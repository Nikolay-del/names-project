const button = document.querySelector(".morphemic-parsing__button")

let words = [{
    "word": "жгут",
    "prefix": "",
    "root": "жг",
    "suffix": "",
    "ending": "ут",
    "base": "жг"
  },
  {
    "word": "пила",
    "prefix": "",
    "root": "пил",
    "suffix": "",
    "ending": "а",
    "base": "пил"
  },
  {
    "word": "стекло",
    "prefix": "",
    "root": "стекл",
    "suffix": "",
    "ending": "о",
    "base": "стекл"
  },
]
const container = document.querySelector(".morphemic-parsing__container")
const table = container.querySelector(".morphemic-parsing__table")
const parsings = table.querySelectorAll(".morphemic-parsing__word")
const line1 = table.querySelector(".morphemic-parsing__word:first-child")
const word = table.querySelectorAll(".morphemic-parsing__word > td:first-child")
const blockMark = container.querySelector(".morphemic-parsing__mark > span")
const tableInputs = table.querySelectorAll("input")
const parsing1 = []
const parsing2 = []
const parsing3 = []
tableInputs.forEach((item, index) => {
  if (index >= 0 && index < 5) {
    parsing1.push(item)
  }
  if (index >= 5 && index < 10) {
    parsing2.push(item)
  }
  if (index >= 10 && index < 15) {
    parsing3.push(item)
  }
});

for (i = 0; i < words.length; i++) {
  word[i].innerHTML = "<span>" + words[i].word + "</span>"
}

let points = 0

function validation(parsingLine, number) {
  const morphemes = ["prefix", "root", "suffix", "ending", "base"]
  for (x = 0; x < morphemes.length; x++) {
    if (parsingLine[x].value === words[number][morphemes[x]]) {
      parsingLine[x].classList.add("right")
      points++
    } else {
      parsingLine[x].classList.add("wrong")
    }
  }
}

function mark() {
  blockMark.innerHTML = points
}

button.addEventListener("click", function () {
    validation(parsing1, 0)
    validation(parsing2, 1)
    validation(parsing3, 2)
    mark()
    button.disabled = true
  })


