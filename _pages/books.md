---
layout: single
title: "Recommended Books"
permalink: /books/
author_profile: true
---

## Recommended Books

Here are some books I’ve found insightful, thought-provoking, or just beautifully written — across finance, economics, blockchain, and beyond.

---

<style>
  .tabs {
    display: flex;
    margin: 1.2rem 0;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .tabs label {
    background: #f0f0f0;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s ease;
  }

  .tabs input[type="radio"] {
    display: none;
  }

  .tab-content {
    display: none;
    animation: fadeIn 0.3s ease-in;
    margin-top: 1rem;
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
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .book-card {
    width: 160px;
    text-align: center;
  }

  .book-card img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .book-title {
    font-weight: bold;
    font-size: 0.95rem;
  }

  .book-author {
    font-size: 0.85rem;
    color: #555;
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
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" alt="The Big Short">
      <div class="book-title">The Big Short</div>
      <div class="book-author">Michael Lewis</div>
    </div>
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/71QHfQ2PZDL.jpg" alt="Liar’s Poker">
      <div class="book-title">Liar’s Poker</div>
      <div class="book-author">Michael Lewis</div>
    </div>
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/91hYcQYfSAL.jpg" alt="Security Analysis">
      <div class="book-title">Security Analysis</div>
      <div class="book-author">Graham & Dodd</div>
    </div>
  </div>

  <!-- Economics Tab -->
  <div class="tab-content" id="economics-tab">
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/81bBhI6pFhL.jpg" alt="Capital in the 21st Century">
      <div class="book-title">Capital in the 21st Century</div>
      <div class="book-author">Thomas Piketty</div>
    </div>
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/81MbA6zqOTL.jpg" alt="Freakonomics">
      <div class="book-title">Freakonomics</div>
      <div class="book-author">Levitt & Dubner</div>
    </div>
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/81SvQ7AEv2L.jpg" alt="Undercover Economist">
      <div class="book-title">The Undercover Economist</div>
      <div class="book-author">Tim Harford</div>
    </div>
  </div>

  <!-- Blockchain Tab -->
  <div class="tab-content" id="blockchain-tab">
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/71nFmqQ0f7L.jpg" alt="Bitcoin Standard">
      <div class="book-title">The Bitcoin Standard</div>
      <div class="book-author">Saifedean Ammous</div>
    </div>
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/71EBR6nUoEL.jpg" alt="Layered Money">
      <div class="book-title">Layered Money</div>
      <div class="book-author">Nik Bhatia</div>
    </div>
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/71Zn3U3lXjL.jpg" alt="Mastering Blockchain">
      <div class="book-title">Mastering Blockchain</div>
      <div class="book-author">Imran Bashir</div>
    </div>
  </div>

  <!-- Others Tab -->
  <div class="tab-content" id="others-tab">
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/71oH3mnyVZL.jpg" alt="Thinking Fast and Slow">
      <div class="book-title">Thinking, Fast and Slow</div>
      <div class="book-author">Daniel Kahneman</div>
    </div>
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/713jIoMO3UL.jpg" alt="Sapiens">
      <div class="book-title">Sapiens</div>
      <div class="book-author">Yuval Noah Harari</div>
    </div>
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/81fhaErB5gL.jpg" alt="Range">
      <div class="book-title">Range</div>
      <div class="book-author">David Epstein</div>
    </div>
  </div>

</div>
