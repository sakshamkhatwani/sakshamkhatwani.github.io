---
layout: page
title: Projects
permalink: /projects/
subtitle: Research software and open-source tools.
---

<div class="projects">
{% for p in site.data.projects %}
  <div class="project-card">
    {% if p.image %}<img src="{{ p.image | relative_url }}" alt="" loading="lazy">{% endif %}
    <h3>{{ p.title }}</h3>
    <p>{{ p.description }}</p>
    {% if p.tags %}<p class="tags">{% for t in p.tags %}<span class="tag">{{ t }}</span>{% endfor %}</p>{% endif %}
    <p class="pub-links">
      {% if p.github %}<a href="{{ p.github }}"><i class="fa-brands fa-github"></i> Code</a>{% endif %}
      {% if p.paper %}<a href="{{ p.paper | relative_url }}"><i class="fa-regular fa-file-lines"></i> Paper</a>{% endif %}
      {% if p.demo %}<a href="{{ p.demo }}"><i class="fa-solid fa-play"></i> Demo</a>{% endif %}
    </p>
  </div>
{% endfor %}
</div>
