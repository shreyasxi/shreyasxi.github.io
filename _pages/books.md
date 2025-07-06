---
layout: single
title: "Recommended Books"
permalink: /books/
author_profile: true
---

Here are some books I’ve found insightful, thought-provoking, or just beautifully written — across finance, economics, blockchain, and beyond.

---

<style>
  .book-tabs input[type="radio"] {
    display: none;
  }

  .book-tabs label {
    display: inline-block;
    margin: 0.5rem 0.8rem 0.5rem 0;
    padding: 0.5rem 1.1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    background-color: #f0f0f0;
    transition: all 0.2s ease-in-out;
  }

  .book-tabs input[type="radio"]:checked + label {
    background-color: #333;
    color: white;
  }

  .book-tab-content {
    display: none;
    margin-top: 1.5rem;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .book-tabs input#tab1:checked ~ .tab1,
  .book-tabs input#tab2:checked ~ .tab2,
  .book-tabs input#tab3:checked ~ .tab3,
  .book-tabs input#tab4:checked ~ .tab4 {
    display: flex;
  }

  .book-card {
    width: 160px;
    text-align: center;
  }

  .book-card img {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 0.4rem;
  }

  .book-title {
    font-weight: bold;
    font-size: 0.92rem;
  }

  .book-author {
    font-size: 0.85rem;
    color: #666;
  }
</style>

<div class="book-tabs">
  <input type="radio" name="tabs" id="tab1" checked><label for="tab1">💸 Finance</label>
  <input type="radio" name="tabs" id="tab2"><label for="tab2">📘 Economics</label>
  <input type="radio" name="tabs" id="tab3"><label for="tab3">🔗 Blockchain</label>
  <input type="radio" name="tabs" id="tab4"><label for="tab4">📚 Others</label>

  <div class="book-tab-content tab1">
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" alt="The Big Short">
      <div class="book-title">The Big Short</div>
      <div class="book-author">Michael Lewis</div>
    </div>
  </div>

  <div class="book-tab-content tab2">
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/81bBhI6pFhL.jpg" alt="Capital in the 21st Century">
      <div class="book-title">Capital in the 21st Century</div>
      <div class="book-author">Thomas Piketty</div>
    </div>
  </div>

  <div class="book-tab-content tab3">
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/71nFmqQ0f7L.jpg" alt="Bitcoin Standard">
      <div class="book-title">Bitcoin Standard</div>
      <div class="book-author">Saifedean Ammous</div>
    </div>
  </div>

  <div class="book-tab-content tab4">
    <div class="book-card">
      <img src="https://m.media-amazon.com/images/I/71oH3mnyVZL.jpg" alt="Thinking Fast and Slow">
      <div class="book-title">Thinking, Fast and Slow</div>
      <div class="book-author">Daniel Kahneman</div>
    </div>
  </div>
</div>
