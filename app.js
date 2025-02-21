//SECTION - STATE

let cheese = 0

let clickIncrease = 1

let autoIncrease = 0

//!SECTION

//SECTION - LOGIC

function mine() {
  cheese += clickIncrease
  drawCheeseTotal()
  console.log('Cheese increase:', clickIncrease, 'Cheese Total:', cheese)
}

//!SECTION

//SECTION - DRAW

function drawCheeseTotal() {
  const cheeseElem = document.getElementById('cheese')
  const cheeseValue = cheeseElem.querySelector('p')
  cheeseValue.innerText = `Mining Total: ${cheese.toString()}`
}

function drawCheeseIncrease() {
  const cheeseIncreaseElem = document.getElementById('clickIncrease')
  const clickIncreaseParagraph = cheeseIncreaseElem.querySelector('p')
  clickIncreaseParagraph.innerText = `+${clickIncrease.toString()}`
}



//!SECTION

//SECTION - PAGE LOAD

//!SECTION