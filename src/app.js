/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];

let numero = numeros[Math.floor(Math.random() * (13 - 0) + 0)];

var palos = [
  { s: "♦", color: "red" },
  { s: "♥", color: "red" },
  { s: "♠", color: "black" },
  { s: "♣", color: "black" }
];
let palo = palos[Math.floor(Math.random() * (4 - 0) + 0)];

document.querySelectorAll(".palo").forEach((elem, index) => {
  elem.innerHTML = palo.s;
  elem.style.color = palo.color;
});

document.querySelector(".numero").innerHTML = numero;
document.querySelector(".numero").style.color = palo.color;
