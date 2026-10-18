---
layout: page
title: Publications
permalink: /publications/
---

<p class="section-note">See also <a href="{{ site.social.google_scholar }}">Google Scholar</a>. <sup>*</sup>Equal contribution.</p>

{% assign groups = "conference:Conference Papers,journal:Journal Articles,workshop:Workshop Papers,preprint:Preprints" | split: "," %}
{% for g in groups %}
  {% assign parts = g | split: ":" %}
  {% assign pubs = site.data.publications | where: "type", parts[0] %}
  {% if pubs.size > 0 %}
  <h2 class="section-title">{{ parts[1] }}</h2>
  <ol class="pubs">
    {% for pub in pubs %}{% include pub.html pub=pub %}{% endfor %}
  </ol>
  {% endif %}
{% endfor %}
