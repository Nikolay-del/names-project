// Слова

let wordHarness = {
  "word": "Жгут",
  "prefix": "",
  "root": "жг",
  "suffix": "",
  "ending": "ут",
  "base": "жг"
}

let wordSaw = {
  "word": "Пила",
  "prefix": "",
  "root": "пил",
  "suffix": "",
  "ending": "а",
  "base": "пил"
}

let wordGlass = {
  "word": "Стекло",
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
