---
layout: single
title: "Recommended Books"
permalink: /books/
width: wide
description: "Books Shreyas Urgunde recommends across finance, economics, blockchain and beyond."
---

Here are some books I’ve found insightful, thought-provoking, or just beautifully written — across finance, economics, blockchain, and beyond.

{% comment %} Books live in _data/books.yml; covers in /images/books/. {% endcomment %}
<nav class="shelf-nav" aria-label="Book categories">
  <ul class="shelf-nav__list">
    {%- for shelf in site.data.books %}
    <li><a href="#{{ shelf.id }}">{{ shelf.label }} <span class="shelf-nav__count">{{ shelf.books.size }}</span></a></li>
    {%- endfor %}
  </ul>
</nav>

{%- for shelf in site.data.books %}
<section class="shelf" aria-labelledby="{{ shelf.id }}">
  <h2 class="shelf__title" id="{{ shelf.id }}">{{ shelf.label }}</h2>
  <ul class="book-grid">
    {%- for book in shelf.books %}
    <li class="book">
      <div class="book__cover"><img src="{{ book.cover | relative_url }}" alt="" width="320" height="480" loading="lazy" decoding="async"></div>
      <p class="book__title">{{ book.title | escape }}</p>
      <p class="book__author">{{ book.author | escape }}</p>
    </li>
    {%- endfor %}
  </ul>
</section>
{%- endfor %}
