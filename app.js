//SECTION - STATE

let bank = 0

let clickIncrease = 1

let autoIncrease = 0


let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 50,
    quantity: 0,
    bonus: 1,
    totalBonus: 0
  },
  {
    name: 'drill',
    price: 250,
    quantity: 0,
    bonus: 5,
    totalBonus: 0
  }
];

let autoUpgrades = [
  {
    name: 'astronaut',
    price: 1000,
    quantity: 0,
    bonus: 20,
    totalBonus: 0
  },
  {
    name: 'rover',
    price: 10000,
    quantity: 0,
    bonus: 100,
    totalBonus: 0
  }
];

//!SECTION

//SECTION - LOGIC

function mine() {
  bank += clickIncrease
  drawCheeseTotal()
  console.log('Cheese increase:', clickIncrease, 'Cheese Total:', bank)
}

function returnClickUpgrade(upgradeName) {
  let foundUpgrade = clickUpgrades.find(upgrade => upgrade.name == upgradeName)
  return foundUpgrade
}

function returnAutoUpgrade(upgradeName) {
  let foundUpgrade = autoUpgrades.find(upgrade => upgrade.name == upgradeName)
  return foundUpgrade
}


function getUpgrade(type, upgradeName) {
  let foundUpgrade = type.find(upgrade => upgrade.name == upgradeName)
  buyUpgrade(type, foundUpgrade)
}

function buyUpgrade(type, item) {
  if (bank < item.price) {
    window.alert('You do not have enough money for that purchase.')
    return
  }

  item.quantity++
  bank -= item.price
  let updatedPrice = item.price * 1.2
  item.price = updatedPrice.toFixed()
  item.totalBonus += item.bonus
  drawCheeseTotal()
  console.log(type)
  console.log(item)

  if (type == clickUpgrades) {
    clickIncrease += item.bonus
    console.log('click increase', clickIncrease)
    drawClickUpgradeStats(item.name)
    drawClickIncrease()
    return
  }

  autoIncrease += item.bonus
  console.log('auto increase', autoIncrease)
  drawAutoUpgradeStats(item.name)
  drawAutoIncrease()
}

function autoIncreaseAstronaut() {
  const item = returnAutoUpgrade('astronaut')
  if (item.quantity < 1) {
    return
  }
  bank += item.bonus
  drawCheeseTotal()
}

function autoIncreaseRover() {
  const item = returnAutoUpgrade('rover')
  if (item.quantity < 1) {
    return
  }
  bank += item.bonus
  drawCheeseTotal()
}

//!SECTION

//SECTION - DRAW

function drawCheeseTotal() {
  const cheeseElem = document.getElementById('cheese')
  const cheeseValue = cheeseElem.querySelector('p')
  cheeseValue.innerText = `Mining Total: ${bank.toString()}`
}

function drawClickIncrease() {
  const clickIncreaseElem = document.getElementById('clickIncrease')
  const clickIncreaseParagraph = clickIncreaseElem.querySelector('p')
  clickIncreaseParagraph.innerText = `+${clickIncrease.toString()}`
}

function drawAutoIncrease() {
  const autoIncreaseElem = document.getElementById('autoIncrease')
  const autoIncreaseParagraph = autoIncreaseElem.querySelector('p')
  autoIncreaseParagraph.innerText = `+${autoIncrease.toString()}`
}

function drawNewClickPrices(changedItem, name) {
  const newlyPricedElems = document.getElementById(changedItem)
  const foundItem = returnClickUpgrade(name)
  console.log(newlyPricedElems)
  newlyPricedElems.innerText = `${foundItem.price.toString()} 🧀`

  console.log(newlyPricedElems.innerText)
  
}
function drawNewAutoPrices(changedItem, name) {
  const newlyPricedElems = document.getElementById(changedItem)
  const foundItem = returnAutoUpgrade(name)
  console.log(newlyPricedElems)
  newlyPricedElems.innerText = `${foundItem.price.toString()} 🧀`

  console.log(newlyPricedElems.innerText)
  
}

function drawClickUpgradeStats(type) {
  const upgradeNameElem = document.getElementById(type)
  const upgradeNameSpans = upgradeNameElem.querySelectorAll('span')

  const upgradeQuantityElem = upgradeNameSpans[0]
  const upgradeTotalBonusElem = upgradeNameSpans[upgradeNameSpans.length - 1]

  const foundUpgrade = returnClickUpgrade(type)

  upgradeQuantityElem.innerText = foundUpgrade.quantity.toString()
  upgradeTotalBonusElem.innerText = foundUpgrade.totalBonus.toString()
}

function drawAutoUpgradeStats(type) {
  const upgradeNameElem = document.getElementById(type)
  const upgradeNameSpans = upgradeNameElem.querySelectorAll('span')

  const upgradeQuantityElem = upgradeNameSpans[0]
  const upgradeTotalBonusElem = upgradeNameSpans[upgradeNameSpans.length - 1]

  const foundUpgrade = returnAutoUpgrade(type)

  upgradeQuantityElem.innerText = foundUpgrade.quantity.toString()
  upgradeTotalBonusElem.innerText = foundUpgrade.totalBonus.toString()
}

//!SECTION

//SECTION - PAGE LOAD

drawCheeseTotal()

setInterval(autoIncreaseAstronaut, 3000)
setInterval(autoIncreaseRover, 10000);

//!SECTION