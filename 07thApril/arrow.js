"use strict";
//arrow functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = "Juice with ${apples} apples and ${oranges} oranges.";
  return juice;
}

console.log(fruitProcessor(2, 3));
