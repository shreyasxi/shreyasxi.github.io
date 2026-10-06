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
    <h1 class="hero__name">Shreyas Urgunde</h1>
    <p class="hero__meta">MSc Finance, Warwick Business School<span class="hero__sep" aria-hidden="true">·</span>United Kingdom</p>
    <p class="hero__lede">
  Hello, I’m <strong>Shreyas Urgunde</strong>, an economics and finance
  researcher with an MSc in Finance from Warwick Business School.
  My work focuses on empirical finance, econometrics, and applied
  economic analysis, including predoctoral research experience with
  the HAI Lab at the University of Oxford.
</p>

<p class="hero__lede">
  I enjoy financial storytelling. I use data, code, fancy charts and human intuition to make sense of markets, financial structures, and the stories we tell to convince the world (and often ourselves) that risk is manageable, value is objective, and markets are efficient (spoiler: not always).
</p>
    {% include site/contact-links.html %}
  </div>
  <figure class="hero__portrait">
    <img src="/images/prof_pic.jpg" alt="Portrait of Shreyas Urgunde" width="832" height="832" fetchpriority="high">
  </figure>
</section>

<section class="home-section container" aria-labelledby="research-interests">
  <div class="home-section__head">
    <h2 class="home-section__title" id="research-interests">
      Research Interests
    </h2>
  </div>

  <div class="home-section__body">
    <p>
      My research interests centre on financial markets and macroeconomics,
      particularly monetary policy, central bank communication, and asset
      pricing. I am interested in how monetary policy signals shape market expectations, and why financial assets respond differently to the same information or implied policy sentiment.
    </p>
    <p>
      These interests shape both my academic research and the projects I build.
      The projects below include my master’s dissertation on ECB communication
      and financial markets, alongside a platform for tracking global
      macroeconomic indicators and analysing RBI's monetary policy sentiment.
    </p>
    <div class="feature-grid">
      {% assign featured = site.data.projects | where: "featured", true %}
      {% for p in featured %}
        <article class="feature-card feature-card--{{ forloop.index }}">
          <p class="kicker">{{ p.kicker }}</p>
          <h3 class="feature-card__title">{{ p.short_title | escape }}</h3>
          {{ p.summary | markdownify }}
          {% assign card_links = p.links | slice: 0, 3 %}
          {% include site/link-list.html links=card_links primary=true %}
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="home-section home-section--workflow container" id="technical-toolkit" aria-labelledby="how-i-work">
  <div class="home-section__head">
    <h2 class="home-section__title" id="how-i-work">How I Work</h2>
  </div>
  <div class="home-section__body">
    <p>I tend to work from the problem backwards — understand what matters, find the right evidence, test the story carefully, automate what is repeatable, and communicate the result clearly.</p>
    <ol class="research-workflow" role="list">
      <li class="research-workflow__stage">
        <span class="research-workflow__number" aria-hidden="true">01</span>
        <h3 class="research-workflow__title">Frame the problem</h3>
        <p class="research-workflow__description">Start with the economic, financial or business question: what am I trying to understand, what would change the decision, and what evidence would help?</p>
        <p class="research-workflow__example">From monetary-policy signals to market behaviour and corporate finance questions.</p>
        <p class="research-workflow__tools">Economics · structured thinking · market intuition</p>
      </li>
      <li class="research-workflow__stage">
        <span class="research-workflow__number" aria-hidden="true">02</span>
        <h3 class="research-workflow__title">Build the evidence</h3>
        <p class="research-workflow__description">Collect and validate data from official releases, market sources, APIs, company information and documents; clean it carefully and keep track of where it came from.</p>
        <p class="research-workflow__example">MoSPI releases, NSE archives, market APIs, company data and research documents.</p>
        <p class="research-workflow__tools">Python · pandas · APIs · SQL · Excel</p>
      </li>
      <li class="research-workflow__stage">
        <span class="research-workflow__number" aria-hidden="true">03</span>
        <h3 class="research-workflow__title">Analyse what matters</h3>
        <p class="research-workflow__description">Use econometrics, financial analysis, time-series methods and economic reasoning to separate a plausible story from one the evidence supports.</p>
        <p class="research-workflow__example">Econometric tests, valuation work, market relationships and robustness checks.</p>
        <p class="research-workflow__tools">Econometrics · financial analysis · time series</p>
      </li>
      <li class="research-workflow__stage">
        <span class="research-workflow__number" aria-hidden="true">04</span>
        <h3 class="research-workflow__title">Automate what repeats</h3>
        <p class="research-workflow__description">Turn recurring analysis into reproducible workflows, databases, scripts and dashboards so the same work does not need to be rebuilt manually.</p>
        <p class="research-workflow__example">Weekly macro dashboards, scheduled source pipelines and reproducible analysis.</p>
        <p class="research-workflow__tools">Python · Git · GitHub Actions · databases · validation</p>
      </li>
      <li class="research-workflow__stage">
        <span class="research-workflow__number" aria-hidden="true">05</span>
        <h3 class="research-workflow__title">Communicate the result</h3>
        <p class="research-workflow__description">Translate the analysis into a clear chart, memo, dashboard, presentation or piece of writing that helps someone understand the conclusion quickly.</p>
        <p class="research-workflow__example">Research papers, finance projects, dashboards, charts and public writing.</p>
        <p class="research-workflow__tools">Data visualisation · presentations · clear writing</p>
      </li>
    </ol>
    <div class="workflow-tools" aria-labelledby="tools-i-use">
      <h3 class="workflow-tools__title" id="tools-i-use">Tools I use</h3>
      <ul class="workflow-tools__list" role="list">
        <li class="workflow-tools__item">{% include site/icon.html name="code" %}<span>Python</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="chart" %}<span>R</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="chart" %}<span>Stata</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="database" %}<span>SQL</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="sheet" %}<span>Excel</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="laptop" %}<span>VS Code</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="github" %}<span>Git / GitHub</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="file-text" %}<span>LaTeX</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="book-open" %}<span>Obsidian</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="cog" %}<span>Docker</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="terminal" %}<span>Claude Code</span></li>
        <li class="workflow-tools__item">{% include site/icon.html name="terminal" %}<span>Codex</span></li>
      </ul>
    </div>
    <a class="agents-banner" href="/resources/">
      <span class="agents-banner__icon" aria-hidden="true">{% include site/icon.html name="terminal" %}</span>
      <span class="agents-banner__text"><strong>Working with coding agents:</strong> some good habits and cool people to follow in this space</span>
      {% include site/icon.html name="arrow-right" class="agents-banner__arrow" %}
    </a>
  </div>
</section>

<section class="home-section container" aria-labelledby="educational-platforms">
  <div class="home-section__head">
    <h2 class="home-section__title" id="educational-platforms">Educational Platforms</h2>
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

<section class="home-section container" aria-labelledby="selected-writing">
  <div class="home-section__head">
    <h2 class="home-section__title" id="selected-writing">Selected Writing</h2>
    <a class="home-section__link" href="/year-archive/"><span>Explore more</span>{% include site/icon.html name="arrow-right" %}</a>
  </div>
  <div class="home-section__body">
    {% include site/writing-cards.html items=site.data.writing %}
  </div>
</section>

<section class="home-section container" aria-labelledby="outside-work">
  <div class="home-section__head">
    <h2 class="home-section__title" id="outside-work">Outside Work</h2>
  </div>
  <div class="home-section__body pastimes">
    <p class="pastimes__lead">When I’m not working on the usual finance stuff, <em>I like to:</em></p>
    <ul class="pastimes__list">
      <li class="pastime pastime--teal">
        <span class="pastime__emoji" aria-hidden="true">🎓</span>
        <div class="pastime__body">
          <p class="pastime__text">Volunteer for social causes that help marginalised students get into higher educational institutions</p>
          <ul class="causes">
            <li class="cause">
              <a class="cause__name" href="https://www.projecteduaccess.com/" target="_blank" rel="noopener noreferrer">Project EduAccess{% include site/icon.html name="arrow-up-right" %}</a>
              <p class="cause__desc">Democratising access to higher education and professional opportunities</p>
            </li>
            <li class="cause">
              <a class="cause__name" href="https://eklavyaindia.org/" target="_blank" rel="noopener noreferrer">Eklavya India Foundation{% include site/icon.html name="arrow-up-right" %}</a>
              <p class="cause__desc">Helping first-generation students from marginalised communities reach top universities</p>
            </li>
            <li class="cause">
              <a class="cause__name" href="https://bahujanecon.org/" target="_blank" rel="noopener noreferrer">Bahujan Economists{% include site/icon.html name="arrow-up-right" %}</a>
              <p class="cause__desc">Increasing the representation of marginalised communities in economics research</p>
            </li>
          </ul>
        </div>
      </li>
      <li class="pastime pastime--sand">
        <span class="pastime__emoji" aria-hidden="true">📚</span>
        <div class="pastime__body">
          <p class="pastime__text">Read books — sometimes for leisure, often to deepen my understanding of a particular field</p>
          <a class="pastime__link" href="/books/"><span>Want some book recommendations?</span>{% include site/icon.html name="arrow-right" %}</a>
        </div>
      </li>
      <li class="pastime pastime--terracotta">
        <span class="pastime__emoji" aria-hidden="true">🍳</span>
        <div class="pastime__body">
          <p class="pastime__text">Cook meals without planning — usually hoping to discover something new through randomness (10/10 would recommend)</p>
        </div>
      </li>
      <li class="pastime pastime--steel">
        <span class="pastime__emoji" aria-hidden="true">🛡️</span>
        <div class="pastime__body">
          <p class="pastime__text">Explore privacy, threat modelling, and decentralised technologies</p>
        </div>
      </li>
      <li class="pastime pastime--lavender">
        <span class="pastime__emoji" aria-hidden="true">♟️</span>
        <div class="pastime__body">
          <p class="pastime__text">Spend arguably too much time blundering pieces on <a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer">Chess.com</a>&nbsp;<span class="nowrap">:-D</span></p>
        </div>
      </li>
      <li class="pastime pastime--sage">
        <span class="pastime__emoji" aria-hidden="true">⚽</span>
        <div class="pastime__body">
          <p class="pastime__text">Watch football and tennis</p>
        </div>
      </li>
      <li class="pastime pastime--straw">
        <span class="pastime__emoji" aria-hidden="true">🏃</span>
        <div class="pastime__body">
          <p class="pastime__text">Go for a run to clear my mind and reset</p>
        </div>
      </li>
      <li class="pastime pastime--rose">
        <span class="pastime__emoji" aria-hidden="true">🏋️</span>
        <div class="pastime__body">
          <p class="pastime__text">Lift weights — strength training is one thing I never take lightly</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="home-section home-section--cta container" aria-labelledby="get-in-touch">
  <div class="home-section__head">
    <h2 class="home-section__title" id="get-in-touch">Get in Touch</h2>
  </div>
  <div class="home-section__body">
    <p class="home-cta__text">If you’re interested in talking research, sharing ideas, or just debating the credibility of classical economics in modern markets, feel free to reach out!</p>
    <div class="action-row">
      <a class="btn btn--primary" href="mailto:{{ site.author.email }}">{% include site/icon.html name="mail" %}<span>Email me</span></a>
      <a class="btn" href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener noreferrer">{% include site/icon.html name="linkedin" %}<span>Connect on LinkedIn</span></a>
    </div>
  </div>
</section>
