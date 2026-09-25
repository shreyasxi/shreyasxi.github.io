---
layout: single
title: "Resources"
permalink: /resources/
width: wide
description: "How Shreyas Urgunde works with coding agents such as Claude Code in economics and finance research: six habits, the people worth following, common mistakes to look for, and further reading."
---

Coding agents such as Claude Code can now write much of the code behind an empirical project. These are the habits I follow to keep the results trustworthy, the mistakes I look out for, the people I learn from, and a few references worth keeping close.

<section class="resource-section" aria-labelledby="pro-tips">
  <h2 class="section-label" id="pro-tips">Pro Tips</h2>
  <p class="resource-section__lede">Habits for working with coding agents without switching off your own judgement.</p>
  <ol class="tips">
    <li class="tip">
      <h3 class="tip__title">Argue with the plan, not the code</h3>
      <p>Have the agent propose a plan before it writes any code, then question it the way a referee would: which sample, which estimator, which standard errors? A wrong assumption caught in the plan costs a sentence to fix; buried in working code, it can survive all the way into a published table.</p>
    </li>
    <li class="tip">
      <h3 class="tip__title">Pre-register, even if only for yourself</h3>
      <p>Agents make it effortless to run fifty specifications before lunch, and just as effortless to keep only the one that worked. Write down your main specification and robustness checks before running anything, and report every one of them.</p>
    </li>
    <li class="tip">
      <h3 class="tip__title">Make the agent prove its work</h3>
      <p>Before an agent refactors anything, have it write tests that pin down known results, such as a replicated table or a key coefficient, and read every diff yourself. The agent writes the code; you own the results.</p>
    </li>
    <li class="tip">
      <h3 class="tip__title">Never let it mark its own homework</h3>
      <p>Review code in a fresh session that didn’t write it, and ask it to find what’s wrong rather than confirm what’s right, because the context that wrote a bug tends to defend it. Then test the reviewer: plant a bug you know about and check that it gets caught.</p>
    </li>
    <li class="tip">
      <h3 class="tip__title">Replicate in a second language</h3>
      <p>For results that matter, have the agent rebuild the analysis in a second language, such as Stata alongside R, and match the estimates to six decimal places. Coding errors rarely repeat across languages, so a match is strong evidence, and a mismatch means a bug or a package default you didn’t know about.</p>
    </li>
    <li class="tip">
      <h3 class="tip__title">Every number comes from code</h3>
      <p>Every number in a draft should come straight from a script’s output, never typed in by hand or recalled from a model’s memory. And to avoid the usual headaches of code hand-offs, build the project to the <a href="https://aeadataeditor.github.io/" target="_blank" rel="noopener noreferrer">AEA Data Editor’s reproducibility guidelines</a>, so anyone can rebuild every table from the raw data.</p>
    </li>
  </ol>
</section>

<section class="resource-section" aria-labelledby="who-to-follow">
  <h2 class="section-label" id="who-to-follow">Who to Follow</h2>
  <ul class="follow__list">
    <li class="follow__item follow__item--start">
      <p class="follow__badge">Start here</p>
      <p class="follow__name">Alessandro Spina</p>
      <p class="follow__work"><a href="https://www.alessandro-spina.com/files/Alessandro_APSA_Part1_2026.pdf" target="_blank" rel="noopener noreferrer">Claude Code for Academics</a> <span class="follow__kind"><span aria-hidden="true">· </span>Slides</span></p>
      <p class="follow__desc">A clear first tour: setting up, giving the agent a memory between sessions, the habits that prevent most errors and keeping your data safe.</p>
      {% include site/icon.html name="arrow-up-right" class="follow__arrow" %}
    </li>
    <li class="follow__item">
      <p class="follow__name">Claes Bäckman</p>
      <p class="follow__work"><a href="https://claesbackman.com/claude-code-guide.html" target="_blank" rel="noopener noreferrer">Claude Code in VS Code for Academic Economists</a> <span class="follow__kind"><span aria-hidden="true">· </span>Guide</span></p>
      <p class="follow__desc">A step-by-step setup for economists working in Stata, R, Python and LaTeX, with advice on keeping the agent’s context lean.</p>
      {% include site/icon.html name="arrow-up-right" class="follow__arrow" %}
    </li>
    <li class="follow__item">
      <p class="follow__name">Paul Goldsmith-Pinkham</p>
      <p class="follow__work"><a href="https://bcf.princeton.edu/events/paul-goldsmith-pinkham-mini-series-on-claude-code-for-applied-economists/" target="_blank" rel="noopener noreferrer">Claude Code for Applied Economists</a> <span class="follow__kind"><span aria-hidden="true">· </span>Video series</span></p>
      <p class="follow__desc">An eight-part series for Markus’ Academy at Princeton, from data analysis and web scraping to writing and collaboration.</p>
      {% include site/icon.html name="arrow-up-right" class="follow__arrow" %}
    </li>
    <li class="follow__item">
      <p class="follow__name">Pedro H. C. Sant’Anna</p>
      <p class="follow__work"><a href="https://psantanna.com/claude-code-my-workflow/workflow-guide.html" target="_blank" rel="noopener noreferrer">My Claude Code Setup</a> <span class="follow__kind"><span aria-hidden="true">· </span>Workflow guide</span></p>
      <p class="follow__desc">A complete research workflow built on planning first, adversarial reviewer agents and replication-first coding.</p>
      {% include site/icon.html name="arrow-up-right" class="follow__arrow" %}
    </li>
    <li class="follow__item">
      <p class="follow__name">Aniket Panjwani</p>
      <p class="follow__work"><a href="https://aieconomist.io/guides/codex-for-economists" target="_blank" rel="noopener noreferrer">Guide to Codex for Economists</a> <span class="follow__kind"><span aria-hidden="true">· </span>Guide</span></p>
      <p class="follow__desc">Written for OpenAI’s Codex, but the core loop carries over to Claude Code: plan the work, let the agent run, inspect the diff and keep only what improves the project.</p>
      {% include site/icon.html name="arrow-up-right" class="follow__arrow" %}
    </li>
  </ul>
</section>

<section class="resource-section" aria-labelledby="where-agents-go-wrong">
  <h2 class="section-label" id="where-agents-go-wrong">Where Agents Go Wrong</h2>
  <p class="resource-section__lede">Agents rarely fail loudly. These quiet mistakes are the ones to look for whenever you review their work.</p>
  <ul class="pitfalls">
    <li class="pitfall">
      <h3 class="pitfall__title">The sample shrinks quietly</h3>
      <p>A merge that fails to match, a filter or a missing value can drop observations without raising an error. Check the number of rows before and after every step.</p>
    </li>
    <li class="pitfall">
      <h3 class="pitfall__title">The specification drifts</h3>
      <p>Standard errors switch from clustered to robust, or a fixed effect goes missing, and the code still runs. Compare the final specification with your plan, line by line.</p>
    </li>
    <li class="pitfall">
      <h3 class="pitfall__title">Units don’t match</h3>
      <p>Percentages get mixed with decimals, nominal values with real ones, and annualised growth rates with quarterly ones. Check the units of every series before combining them.</p>
    </li>
    <li class="pitfall">
      <h3 class="pitfall__title">Look-ahead bias creeps in</h3>
      <p>In a backtest or a forecast, an agent may use information that wasn’t available at the time, such as a full-sample average or data revised years later. For each step, ask what you could have known on the day.</p>
    </li>
    <li class="pitfall">
      <h3 class="pitfall__title">Tests get bent to pass</h3>
      <p>When a test fails, an agent may change the test instead of fixing the code. Treat any edit to a test as a red flag, and ask why it was needed.</p>
    </li>
    <li class="pitfall">
      <h3 class="pitfall__title">Citations only look right</h3>
      <p>References, data sources and summaries of papers can sound convincing and still be wrong. Open every source before it goes into a draft.</p>
    </li>
  </ul>
</section>

<section class="resource-section" aria-labelledby="further-reading">
  <h2 class="section-label" id="further-reading">Further Reading</h2>
  <div class="reading">
    <div class="reading__group">
      <h3 class="reading__title">Coding Agents</h3>
      <ul class="reading__list">
        <li class="reading__item">
          <p class="reading__source">Anthropic<span aria-hidden="true"> · </span>Documentation</p>
          <p class="reading__name"><a href="https://code.claude.com/docs/en/best-practices" target="_blank" rel="noopener noreferrer">Best Practices for Claude Code{% include site/icon.html name="arrow-up-right" %}</a></p>
          <p class="reading__desc">The official guide from the team that builds Claude Code: give the agent a way to check its own work, plan before it codes and add an independent review.</p>
        </li>
        <li class="reading__item">
          <p class="reading__source">Simon Willison<span aria-hidden="true"> · </span>Essay</p>
          <p class="reading__name"><a href="https://simonwillison.net/2025/Mar/19/vibe-coding/" target="_blank" rel="noopener noreferrer">Not All AI-Assisted Programming Is Vibe Coding{% include site/icon.html name="arrow-up-right" %}</a></p>
          <p class="reading__desc">Where vibe coding ends and careful work begins. His rule: never commit code you couldn’t explain to somebody else.</p>
        </li>
        <li class="reading__item">
          <p class="reading__source">Scott Cunningham<span aria-hidden="true"> · </span>Newsletter series</p>
          <p class="reading__name"><a href="https://causalinf.substack.com/s/claude-code" target="_blank" rel="noopener noreferrer">Claude Code on Scott’s Mixtape{% include site/icon.html name="arrow-up-right" %}</a></p>
          <p class="reading__desc">The author of <cite>Causal Inference: The Mixtape</cite> keeps a running record of using Claude Code for empirical research, with walkthroughs of real projects.</p>
        </li>
      </ul>
    </div>
    <div class="reading__group">
      <h3 class="reading__title">Research Code</h3>
      <ul class="reading__list">
        <li class="reading__item">
          <p class="reading__source">Matthew Gentzkow and Jesse M. Shapiro<span aria-hidden="true"> · </span>Guide</p>
          <p class="reading__name"><a href="https://web.stanford.edu/~gentzkow/research/CodeAndData.pdf" target="_blank" rel="noopener noreferrer">Code and Data for the Social Sciences{% include site/icon.html name="arrow-up-right" %}</a></p>
          <p class="reading__desc">The classic rules for research code: automate everything, keep code and data under version control, and have one script run the whole project. They matter even more when an agent writes the code.</p>
        </li>
        <li class="reading__item">
          <p class="reading__source">Social Science Data Editors<span aria-hidden="true"> · </span>Template</p>
          <p class="reading__name"><a href="https://social-science-data-editors.github.io/template_README/" target="_blank" rel="noopener noreferrer">Template README for Replication Packages{% include site/icon.html name="arrow-up-right" %}</a></p>
          <p class="reading__desc">The README that data editors at social science journals recommend, listing everything a replication package should document.</p>
        </li>
        <li class="reading__item">
          <p class="reading__source">MIT<span aria-hidden="true"> · </span>Course</p>
          <p class="reading__name"><a href="https://missing.csail.mit.edu/" target="_blank" rel="noopener noreferrer">The Missing Semester of Your CS Education{% include site/icon.html name="arrow-up-right" %}</a></p>
          <p class="reading__desc">Free lectures on the tools few courses teach: the command line, Git and debugging, and now a lecture on agentic coding.</p>
        </li>
      </ul>
    </div>
  </div>
</section>
