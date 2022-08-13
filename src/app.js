/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
let palos = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  //write your code here
  let random1 = Math.floor(Math.random() * cards.length);
  let random2 = Math.floor(Math.random() * palos.length);

  document.write(cards[random1] + " " + palos[random2]);
};

document.querySelector();
