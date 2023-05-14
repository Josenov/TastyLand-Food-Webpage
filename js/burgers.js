import {loadDataFromApi, drawCards } from "./functions.js";


let food = await loadDataFromApi();

let foodData = food.burgers;

console.log(foodData)

let divCards = document.getElementById('cardsDiv');

drawCards(foodData, divCards)