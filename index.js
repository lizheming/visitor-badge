const Koa = require('koa');
const Dittorm = require('dittorm');
const { makeBadge } = require('badge-maker');
const app = new Koa();

async function counter(key) {
  const { LEAN_ID, LEAN_KEY, LEAN_MASTER_KEY, LEAN_SERVER } = process.env;
  const counterModel = new Dittorm('leancloud')('badge', {
    appId: LEAN_ID,
    appKey: LEAN_KEY,
    masterKey: LEAN_MASTER_KEY,
    serverURL: LEAN_SERVER,
  });
  const resp = await counterModel.select({ key });
  if (!Array.isArray(resp) || !resp.length) {
    const count = 1;
    await counterModel.add({ key, count });
    return count;
  }
  
  const count = resp[0].count + 1;
  await counterModel.update({ count }, { key });
  return count;
}

app.use(async (ctx, next) => {
  ctx.svg = (badgeOption) => {
    const svg = makeBadge(badgeOption);
  
    ctx.type = 'image/svg+xml';
    ctx.set('Cache-Control', 'no-cache,max-age=0');
    ctx.set('Expires', new Date(Date.now() - 10 * 60 * 1000).toGMTString());
    ctx.body = svg;
  }
  
  try {
    await next();
  } catch(e) {
    ctx.svg({ label: 'Error', message: e.message, labelColor: '#555', color: '#007ec6' });
    console.log(e);
  }
});


app.use(async ctx => {
  if (ctx.path !== '/badge') {
    return;
  }

  const { page_id: pageId, left_color: leftColor, right_color: rightColor, left_text: leftText } = ctx.query;
  if (!pageId) {
    throw new Error('Missing required param: page_id'); 
  }

  const latestCount = await counter(pageId);

  return ctx.svg({
    label: leftText || 'visitors',
    message: latestCount.toString(),
    labelColor: leftColor || '#595959',
    color: rightColor || '#1283c3',
  });
});

module.exports = app.callback();