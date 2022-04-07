let button = document.querySelector(".morphemic-parsing__button")
let prefix1
let wordHarness = {
  "word": "жгут",
  "prefix": "",
  "root": "жг",
  "suffix": "",
  "ending": "ут",
  "base": "жг"
}

let wordSaw = {
  "word": "пила",
  "prefix": "",
  "root": "пил",
  "suffix": "",
  "ending": "а",
  "base": "пил"
}

let wordGlass = {
  "word": "стекло",
  "prefix": "",
  "root": "стекл",
  "suffix": "",
  "ending": "о",
  "base": "стекл"
}

let words = [wordHarness.word, wordSaw.word, wordGlass.word]

let td = document.querySelectorAll(".morphemic-parsing__word > td:first-child")

for (i = 0; i < words.length; i++) {
  td[i].innerHTML = "<span>" + words[i] + "</span>"
}

button.addEventListener("click", function () {
});
