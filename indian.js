// 인디언 문제

const colorArr = ["빨간", "검은", "푸른"];
const animalArr = ["늑대", "곰", "호랑이"];
const wordArr = ["눈물", "환생", "기상"];

let color = colorArr[Math.floor(Math.random() * colorArr.length)];
let animal = animalArr[Math.floor(Math.random() * animalArr.length)];
let word = wordArr[Math.floor(Math.random() * wordArr.length)];

let newSentence = [color, animal + "의", word + "!!"].join(" ");
console.log(newSentence)