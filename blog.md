---
layout: page
title: Blog
permalink: /blog/
---

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="news-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post.description %}<p class="muted">{{ post.description }}</p>{% endif %}
  </li>
{% else %}
  <li class="muted">No posts yet.</li>
{% endfor %}
</ul>
