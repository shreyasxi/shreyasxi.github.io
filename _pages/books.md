---
layout: single
title: "Recommended Books"
permalink: /books/
author_profile: true
---

<style>
  .tabs {
    display: flex;
    margin-bottom: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .tabs label {
    background: #f0f0f0;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }

  .tabs input[type="radio"] {
    display: none;
  }

  .tab-content {
    display: none;
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  input[type="radio"]:checked + label {
    background: #333;
    color: white;
  }

  #finance:checked ~ .content #finance-tab,
  #economics:checked ~ .content #economics-tab,
  #blockchain:checked ~ .content #blockchain-tab,
  #others:checked ~ .content #others-tab {
    display: block;
  }
</style>

<div class="tabs">
  <input type="radio" id="finance" name="tabs" checked>
  <label for="finance">💸 Finance</label>

  <input type="radio" id="economics" name="tabs">
  <label for="economics">📘 Economics</label>

  <input type="radio" id="blockchain" name="tabs">
  <label for="blockchain">🔗 Blockchain</label>

  <input type="radio" id="others" name="tabs">
  <label for="others">📚 Others</label>
</div>

<div class="content">

  <!-- Finance Tab -->
  <div class="tab-content" id="finance-tab">
    <ul>
      <li><strong>The Big Short</strong> by Michael Lewis</li>
      <li><strong>Liar’s Poker</strong> by Michael Lewis</li>
      <li><strong>Security Analysis</strong> by Graham & Dodd</li>
    </ul>
  </div>

  <!-- Economics Tab -->
  <div class="tab-content" id="economics-tab">
    <ul>
      <li><strong>Capital in the Twenty-First Century</strong> by Thomas Piketty</li>
      <li><strong>Freakonomics</strong> by Steven Levitt & Stephen Dubner</li>
      <li><strong>The Undercover Economist</strong> by Tim Harford</li>
    </ul>
  </div>

  <!-- Blockchain Tab -->
  <div class="tab-content" id="blockchain-tab">
    <ul>
      <li><strong>The Bitcoin Standard</strong> by Saifedean Ammous</li>
      <li><strong>Layered Money</strong> by Nik Bhatia</li>
      <li><strong>Mastering Blockchain</strong> by Imran Bashir</li>
    </ul>
  </div>

  <!-- Others Tab -->
  <div class="tab-content" id="others-tab">
    <ul>
      <li><strong>Thinking, Fast and Slow</strong> by Daniel Kahneman</li>
      <li><strong>Sapiens</strong> by Yuval Noah Harari</li>
      <li><strong>The Psychology of Money</strong> by Morgan Housel</li>
    </ul>
  </div>

</div>
