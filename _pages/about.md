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
    <h2 class="home-section__title" id="research-interests">Research Interests</h2>
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
    <h2 class="home-section__title" id="selected-writing">Selected Writing</h2>
    <a class="home-section__link" href="/year-archive/"><span>All writing</span>{% include site/icon.html name="arrow-right" %}</a>
  </div>
  <div class="home-section__body">
    {% include site/writing-cards.html items=site.data.writing %}
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

<section class="home-section container" aria-labelledby="technical-toolkit">
  <div class="home-section__head">
    <h2 class="home-section__title" id="technical-toolkit">My Technical Toolkit</h2>
  </div>
  <div class="home-section__body">
    <p>I’m proficient in R, Python, LaTeX, and Excel, with working knowledge of Stata for tasks like panel regressions and applied econometrics. I enjoy building financial models and making complex data easier to interpret and explain. Beyond just writing code or frantically “vibe coding”, I take careful measure to build robust, fully reproducible data pipelines that hold up to the most rigorous peer-reviewed academic standards.</p>
    <div class="toolkit">
      <div class="toolkit__group toolkit__group--navy">
        <span class="toolkit__icon" aria-hidden="true">{% include site/icon.html name="chart" %}</span>
        <h3 class="toolkit__title">Analysis &amp; modelling</h3>
        <p class="toolkit__desc">Econometrics, financial models and data analysis</p>
        <ul class="tools">
          <li class="tool tool--r">R</li>
          <li class="tool tool--python">Python</li>
          <li class="tool tool--stata">Stata</li>
          <li class="tool tool--excel">Excel</li>
        </ul>
      </div>
      <div class="toolkit__group toolkit__group--oxblood">
        <span class="toolkit__icon" aria-hidden="true">{% include site/icon.html name="file-text" %}</span>
        <h3 class="toolkit__title">Writing &amp; editing</h3>
        <p class="toolkit__desc">Papers, research notes and everyday editing</p>
        <ul class="tools">
          <li class="tool tool--latex">LaTeX</li>
          <li class="tool tool--obsidian">Obsidian</li>
          <li class="tool tool--vscode">VS Code</li>
        </ul>
      </div>
      <div class="toolkit__group toolkit__group--forest">
        <span class="toolkit__icon" aria-hidden="true">{% include site/icon.html name="code" %}</span>
        <h3 class="toolkit__title">Code &amp; reproducibility</h3>
        <p class="toolkit__desc">Version control, containers and agentic coding</p>
        <ul class="tools">
          <li class="tool tool--github">GitHub</li>
          <li class="tool tool--docker">Docker</li>
          <li class="tool tool--claude">Claude Code</li>
        </ul>
      </div>
    </div>
    <aside class="tips" aria-labelledby="pro-tips">
      <h3 class="tips__title" id="pro-tips">Pro tips</h3>
      <ol class="tips__list">
        <li class="tip">
          <h4 class="tip__title">Start from a standard</h4>
          <p>If you want to avoid the usual headaches of code hand-offs, the <a href="https://aeadataeditor.github.io/" target="_blank" rel="noopener noreferrer">AEA Data Editor’s reproducibility guidelines</a> are the perfect baseline to adopt.</p>
        </li>
        <li class="tip">
          <h4 class="tip__title">Rebuild everything with one command</h4>
          <p>Keep raw data read-only, script every step, and pin package versions with <a href="https://rstudio.github.io/renv/" target="_blank" rel="noopener noreferrer">renv</a> or <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">uv</a>, so every number in the paper can be regenerated from scratch.</p>
        </li>
        <li class="tip">
          <h4 class="tip__title">Brief a coding agent like a research assistant</h4>
          <p>Write the project’s conventions into a <a href="https://code.claude.com/docs/en/memory" target="_blank" rel="noopener noreferrer">CLAUDE.md file</a>, ask for a plan before any code, and keep each task small enough to review in one sitting.</p>
        </li>
        <li class="tip">
          <h4 class="tip__title">Make the agent prove its work</h4>
          <p>Before an agent refactors anything, have it write tests that pin down known results, such as a replicated table or a key coefficient, and read every diff yourself. The agent writes the code; you own the results.</p>
        </li>
      </ol>
    </aside>
  </div>
</section>

<section class="home-section container" aria-labelledby="outside-work">
  <div class="home-section__head">
    <h2 class="home-section__title" id="outside-work">Outside Work</h2>
  </div>
  <div class="home-section__body">
    <p>When I’m not working on the usual finance stuff, I like to:</p>
    <ul class="hobbies">
      <li class="hobby hobby--feature hobby--teal">
        <span class="hobby__icon" aria-hidden="true">🎓</span>
        <h3 class="hobby__title">Volunteering</h3>
        <p class="hobby__text">Volunteer for social causes that help marginalised students get into higher educational institutions</p>
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
      </li>
      <li class="hobby hobby--sand">
        <span class="hobby__icon" aria-hidden="true">📚</span>
        <h3 class="hobby__title">Reading</h3>
        <p class="hobby__text">Read books — sometimes for leisure, often to deepen my understanding of a particular field</p>
        <a class="hobby__link" href="/books/"><span>See my bookshelf</span>{% include site/icon.html name="arrow-right" %}</a>
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
      <li class="hobby hobby--lavender">
        <span class="hobby__icon" aria-hidden="true">♟️</span>
        <h3 class="hobby__title">Chess</h3>
        <p class="hobby__text">Spend arguably too much time blundering pieces on <a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer">Chess.com</a> :-D</p>
      </li>
      <li class="hobby hobby--sage">
        <span class="hobby__icon" aria-hidden="true">⚽</span>
        <h3 class="hobby__title">Football &amp; tennis</h3>
        <p class="hobby__text">Watch football and tennis</p>
      </li>
      <li class="hobby hobby--straw">
        <span class="hobby__icon" aria-hidden="true">🏃</span>
        <h3 class="hobby__title">Running</h3>
        <p class="hobby__text">Go for a run to clear my mind and reset</p>
      </li>
      <li class="hobby hobby--rose">
        <span class="hobby__icon" aria-hidden="true">🏋️</span>
        <h3 class="hobby__title">Gym</h3>
        <p class="hobby__text">Lift weights — strength training is one thing I never take lightly</p>
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
