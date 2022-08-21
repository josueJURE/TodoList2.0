const form = document.querySelector("form");
const clear = document.querySelector("#clear");
const ul = document.querySelector("ul");
const input =  document.querySelector("input");
const taskBoard = document.querySelector(".taskBoard");


form.addEventListener("submit", submit);
clear.addEventListener("click", clearList);
ul.addEventListener("click", deleteOrTick);
