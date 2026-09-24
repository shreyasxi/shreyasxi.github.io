---
layout: single
title: "Projects"
permalink: /projects/
width: wide
description: "Research and data projects by Shreyas Urgunde: central bank communication, asset pricing, risk modelling, fintech and equity valuation, with code and reports."
---

{%- comment -%} Project text and links live in _data/projects.yml. {%- endcomment -%}
{%- assign featured = site.data.projects | where: "featured", true -%}
{%- assign others = site.data.projects | where_exp: "p", "p.featured != true" -%}

<section class="project-group" aria-labelledby="featured-projects">
  <h2 class="section-label" id="featured-projects">Featured</h2>
  <div class="project-grid project-grid--featured">
    {%- for p in featured %}
    {% include site/project-card.html project=p number=forloop.index featured=true %}
    {%- endfor %}
  </div>
</section>

<section class="project-group" aria-labelledby="more-projects">
  <h2 class="section-label" id="more-projects">More Projects</h2>
  <div class="project-grid">
    {%- for p in others %}
    {%- assign n = forloop.index | plus: featured.size %}
    {% include site/project-card.html project=p number=n %}
    {%- endfor %}
  </div>
</section>
