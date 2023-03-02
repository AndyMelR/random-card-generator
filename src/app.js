/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document;
};

const getListaPalos = () => {
  return ["❤️", "♦️", "♣️", "♠️"];
};

const getListNumber = () => {
  return ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
};

const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length);
};

const card = {
  symbol: null,
  number: null
};

const getRandomCard = () => {
  const symbolRandom = getListaPalos()[getRandomIndex(getListaPalos())];
  const numberRandom = getListNumber()[getRandomIndex(getListNumber())];
  return { symbolRandom, numberRandom };
};

const displayCard = card => {
  let cardHTML = "";
  if (card.symbolRandom == "❤️" || card.symbolRandom == "♦️") {
    cardHTML = `<div class="card">
    <div class="card-body">
      <div class="card-item"><span class="emoticon">${card.symbolRandom}</span></div>
      <div class="card-item" style="color:red;display:flex;justify-content:center;"><span class="emoticon" style="font-size:8em;">${card.numberRandom}</span></div>
      <div id="symbol-reverse" class="card-item transformed"><span class="emoticon">${card.symbolRandom}</span></div>
    </div>
  </div>`;
  } else {
    cardHTML = `<div class="card">
      <div class="card-body">
        <div class="card-item"><span class="emoticon">${card.symbolRandom}</span></div>
        <div class="card-item" style="display:flex;justify-content:center;"><span class="emoticon" style="font-size:8em;">${card.numberRandom}</span></div>
        <div id="symbol-reverse" class="card-item transformed"><span class="emoticon">${card.symbolRandom}</span></div>
      </div>
    </div>`;
  }
  const cardContainer = document.querySelector("#card-container");
  cardContainer.innerHTML = cardHTML;
};

const generateRandomCard = () => {
  const card = getRandomCard();
  displayCard(card);
};

const generateCardBtn = document.querySelector("#generate-card-btn");
generateCardBtn.addEventListener("click", generateRandomCard);
