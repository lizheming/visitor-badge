# visitor-badge

> Since [jwenjian/visitor-badge](https://github.com/jwenjian/visitor-badge) didn't work, I reimplemented it based on its API. Many thanks to [jwenjian/visitor-badge](https://github.com/jwenjian/visitor-badge) for the work.

---

A badge generator service to count visitors of your markdown file.

[The story of visitor badge](https://medium.com/@1link.fun/the-story-of-visitor-badge-1bded5ed56b4)

## Installation


[![Deploy with Deta](https://deta.space/buttons/dark.svg)](https://deta.space/discovery/@lizheming/visitorbadge)

## How To Use

Examples:

- default style

```markdown
![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge)
```

![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge)

- customized left text (default is `visitors`)

```markdown
![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_text=MyPageVisitors)
```
![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_text=MyPageVisitors)

- customized left text with a space between words

```markdown
![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_text=My%20Page%20Visitors)
```
![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_text=My%20Page%20Visitors)

- customzied color

```markdown
![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_color=red&right_color=green) 
```

![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_color=red&right_color=green) (left_color=red, right_color=green)

- customized color and left text

```markdown
![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_color=red&right_color=green&left_text=HelloVisitors)
```

![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_color=red&right_color=green&left_text=HelloVisitors) (left_color=red, right_color=green, left_text=HelloVisitors)

- customized color and a space between words in left text

```markdown
![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_color=red&right_color=green&left_text=Hello%20Visitors)
```

![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=lizheming.visitor-badge&left_color=red&right_color=green&left_text=Hello%20Visitors) (left_color=red, right_color=green, left_text=Hello%20Visitors)
