---
permalink: /
title: "About"
layout: home
description: "Shreyas Urgunde is an economics and finance researcher with an MSc Finance from Warwick Business School, working on empirical finance, econometrics, coding, and applied economic analysis."
redirect_from:
  - /about/
  - /about.html
---

<section class="hero container">
  <div class="hero__text">
    <p class="kicker">Economics &amp; Finance Researcher</p>
    <h1 class="hero__name">Shreyas Urgunde</h1>
    <p class="hero__meta">MSc Finance, Warwick Business School<span class="hero__sep" aria-hidden="true">·</span>United Kingdom</p>
    <p class="hero__lede">Hello, I’m <strong>Shreyas Urgunde</strong>, an economics and finance researcher with an MSc Finance from Warwick Business School. My work focuses on empirical finance, econometrics, coding, and applied economic analysis, including research experience with a research lab based at the University of Oxford. I spend my days making sense of markets, financial structures, and the stories we tell to convince the world (and often ourselves) that risk is manageable, value is objective, and efficiency is real (spoiler: it rarely is).</p>
    {% include site/contact-links.html %}
  </div>
  <figure class="hero__portrait">
    <img src="/images/prof_pic.jpg" alt="Portrait of Shreyas Urgunde" width="832" height="832" fetchpriority="high">
  </figure>
</section>

<section class="home-section container" aria-labelledby="research-interests">
  <div class="home-section__head">
    <h2 class="home-section__title" id="research-interests">Research interests</h2>
  </div>
  <div class="home-section__body">
    <p>My <strong>research interests</strong> sit at the intersection of financial markets, macroeconomics, and digital currencies. I’m particularly fascinated by how central bank communication, market narratives, and emerging technologies influence asset pricing and systemic risks. My master’s dissertation, supervised by Professor Philippe Muller, examines how the tone of ECB communications differentially impacts various financial markets. You can read the full thesis <a href="https://shreyasxi.github.io/ecb-narrative-tone-market-impact-thesis/" target="_blank" rel="noopener noreferrer">here</a>.</p>
    <div class="feature-grid">
      {%- assign featured = site.data.projects | where: "featured", true -%}
      {%- for p in featured %}
      <article class="feature-card feature-card--{{ forloop.index }}">
        <p class="kicker">{{ p.kicker }}</p>
        <h3 class="feature-card__title">{{ p.short_title | escape }}</h3>
        {{ p.summary | markdownify }}
        {%- assign card_links = p.links | slice: 0, 2 %}
        {% include site/link-list.html links=card_links primary=true %}
      </article>
      {%- endfor %}
    </div>
  </div>
</section>

<section class="home-section container" aria-labelledby="selected-writing">
  <div class="home-section__head">
    <h2 class="home-section__title" id="selected-writing">Selected writing</h2>
    <a class="home-section__link" href="/year-archive/"><span>All writing</span>{% include site/icon.html name="arrow-right" %}</a>
  </div>
  <div class="home-section__body">
    {% include site/writing-cards.html items=site.data.writing %}
  </div>
</section>

<section class="home-section container" aria-labelledby="educational-platforms">
  <div class="home-section__head">
    <h2 class="home-section__title" id="educational-platforms">Educational platforms</h2>
  </div>
  <div class="home-section__body">
    <div class="platforms-intro">
      <p>Outside the academic space, I’ve created a number of <strong>educational platforms</strong> to make topics like economics, finance, geopolitics, and social justice more accessible to wider audiences. These platforms have a combined following of over 7,000 people and include:</p>
      <p class="stat" aria-hidden="true"><span class="stat__value">7,000+</span><span class="stat__label">combined following</span></p>
    </div>
    <ol class="platforms">
      <li class="platform platform--navy">
        {% include site/icon.html name="instagram" class="platform__mark" %}
        <p class="platform__type"><span class="platform__badge">{% include site/icon.html name="instagram" %}</span>Instagram</p>
        <h3 class="platform__name"><a href="https://www.instagram.com/empowered.humans.of.earth/" target="_blank" rel="noopener noreferrer">Empowered Humans of Earth</a></h3>
        <p class="platform__handle">@empowered.humans.of.earth</p>
        <p class="platform__desc">exploring economics, social issues, privacy and current affairs</p>
        <p class="platform__cta" aria-hidden="true">Follow on Instagram{% include site/icon.html name="arrow-up-right" %}</p>
      </li>
      <li class="platform platform--oxblood">
        {% include site/icon.html name="instagram" class="platform__mark" %}
        <p class="platform__type"><span class="platform__badge">{% include site/icon.html name="instagram" %}</span>Instagram</p>
        <h3 class="platform__name"><a href="https://www.instagram.com/the.economics.hub/" target="_blank" rel="noopener noreferrer">The Economics Hub</a></h3>
        <p class="platform__handle">@the.economics.hub</p>
        <p class="platform__desc">curating macro trends and financial explainers</p>
        <p class="platform__cta" aria-hidden="true">Follow on Instagram{% include site/icon.html name="arrow-up-right" %}</p>
      </li>
      <li class="platform platform--amber">
        {% include site/icon.html name="substack" class="platform__mark" %}
        <p class="platform__type"><span class="platform__badge">{% include site/icon.html name="substack" %}</span>Substack</p>
        <h3 class="platform__name"><a href="https://economicshub.substack.com/" target="_blank" rel="noopener noreferrer">The Economics Hub on Substack</a></h3>
        <p class="platform__handle">economicshub.substack.com</p>
        <p class="platform__desc">deep dives on various topics. Please follow my weekly newsletter!</p>
        <p class="platform__cta" aria-hidden="true">Subscribe on Substack{% include site/icon.html name="arrow-up-right" %}</p>
      </li>
    </ol>
  </div>
</section>

<section class="home-section container" aria-labelledby="technical-toolkit">
  <div class="home-section__head">
    <h2 class="home-section__title" id="technical-toolkit">My Technical Toolkit</h2>
  </div>
  <div class="home-section__body">
    <ul class="toolkit" aria-label="Tools">
      <li>R</li>
      <li>Python</li>
      <li>LaTeX</li>
      <li>Stata</li>
      <li>GitHub</li>
      <li>Excel</li>
      <li>Docker</li>
      <li>VS Code</li>
      <li>Obsidian</li>
      <li>Claude Code</li>
    </ul>
    <p>I’m proficient in R, Python, LaTeX, and Excel, with working knowledge of Stata for tasks like panel regressions and applied econometrics. I enjoy building financial models and making complex data easier to interpret and explain. Beyond just writing code or frantically “vibe coding”, I take careful measure to build robust, fully reproducible data pipelines that hold up to the most rigorous peer-reviewed academic standards.</p>
    <aside class="callout">
      <p class="callout__label">Pro tip</p>
      <p>If you want to avoid the usual headaches of code hand-offs, the <a href="https://aeadataeditor.github.io/" target="_blank" rel="noopener noreferrer">AEA Data Editor’s reproducibility guidelines</a> are the perfect baseline to adopt.</p>
    </aside>
  </div>
</section>

<section class="home-section container" aria-labelledby="outside-work">
  <div class="home-section__head">
    <h2 class="home-section__title" id="outside-work">Outside work</h2>
  </div>
  <div class="home-section__body">
    <p>When I’m not working on the usual finance stuff, I like to:</p>
    <ul class="hobbies">
      <li class="hobby hobby--sand">
        <span class="hobby__icon" aria-hidden="true">📚</span>
        <h3 class="hobby__title">Reading</h3>
        <p class="hobby__text">Read books — sometimes for leisure, often to deepen my understanding of a particular field</p>
      </li>
      <li class="hobby hobby--terracotta">
        <span class="hobby__icon" aria-hidden="true">🍳</span>
        <h3 class="hobby__title">Cooking</h3>
        <p class="hobby__text">Cook meals without planning — usually hoping to discover something new through randomness (10/10 would recommend)</p>
      </li>
      <li class="hobby hobby--steel">
        <span class="hobby__icon" aria-hidden="true">🛡️</span>
        <h3 class="hobby__title">Privacy</h3>
        <p class="hobby__text">Explore privacy, threat modelling, and decentralised technologies</p>
      </li>
      <li class="hobby hobby--sage">
        <span class="hobby__icon" aria-hidden="true">⚽</span>
        <h3 class="hobby__title">Football &amp; tennis</h3>
        <p class="hobby__text">Watch football and Tennis</p>
      </li>
      <li class="hobby hobby--lavender">
        <span class="hobby__icon" aria-hidden="true">♟️</span>
        <h3 class="hobby__title">Chess</h3>
        <p class="hobby__text">Spend arguably too much time blundering pieces on <a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer">Chess.com</a> :-D</p>
      </li>
      <li class="hobby hobby--straw">
        <span class="hobby__icon" aria-hidden="true">🏃</span>
        <h3 class="hobby__title">Running</h3>
        <p class="hobby__text">Go for a run to clear my mind and reset</p>
      </li>
    </ul>
  </div>
</section>

<section class="home-section home-section--cta container" aria-labelledby="get-in-touch">
  <div class="home-section__head">
    <h2 class="home-section__title" id="get-in-touch">Get in touch</h2>
  </div>
  <div class="home-section__body">
    <p class="home-cta__text">If you’re interested in talking research, sharing ideas, or just debating the credibility of classical economics in modern markets, feel free to reach out!</p>
    <div class="action-row">
      <a class="btn btn--primary" href="mailto:{{ site.author.email }}">{% include site/icon.html name="mail" %}<span>Email me</span></a>
      <a class="btn" href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener noreferrer">{% include site/icon.html name="linkedin" %}<span>Connect on LinkedIn</span></a>
    </div>
  </div>
</section>
