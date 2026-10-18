---
layout: post
title: "Sparse Attention, Explained"
description: "An informal walkthrough of our ICLR 2026 paper."
tags: [ml, research]
math: true
---

This is an example post. Posts live in `_posts/` and are named `YYYY-MM-DD-title.md`.

Math works when you set `math: true` in the front matter. Standard attention costs $O(n^2)$:

$$
\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d}}\right) V
$$

Code blocks are syntax-highlighted:

```python
import torch

def attention(q, k, v):
    scores = q @ k.transpose(-2, -1) / q.size(-1) ** 0.5
    return scores.softmax(-1) @ v
```

Delete this file once you write your first real post.
