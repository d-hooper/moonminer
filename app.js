//SECTION - STATE / GLOBAL VARIABLES

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

//NOTE - Mine

function mine() {
  bank += clickIncrease
  drawCheeseTotal()
}

//NOTE - Return and Buy Upgrades

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
  let updatedPrice = item.price * 1.1
  item.price = updatedPrice.toFixed()
  item.totalBonus += item.bonus
  
  drawCheeseTotal()
  drawNewPrices(item.name)

  if (type == clickUpgrades) {
    clickIncrease += item.bonus
    drawClickUpgradeStats(item.name)
    drawIncrease('clickIncrease')
    return
  }

  autoIncrease += item.bonus
  drawAutoUpgradeStats(item.name)
  drawIncrease('autoIncrease')
}

//NOTE - Calculate Automatic Earnings

function autoIncreaseAstronaut() {
  const item = returnAutoUpgrade('astronaut')
  if (item.quantity < 1) {
    return
  }
  item.totalBonus = item.quantity * item.bonus
  bank += item.totalBonus
  drawCheeseTotal()
}

function autoIncreaseRover() {
  const item = returnAutoUpgrade('rover')
  if (item.quantity < 1) {
    return
  }
  item.totalBonus = item.quantity * item.bonus
  bank += item.totalBonus
  drawCheeseTotal()
}

//!SECTION

//SECTION - DRAW

//NOTE - Cheese Total and Increase Amounts

function drawCheeseTotal() {
  const cheeseElem = document.getElementById('cheese')
  const cheeseValue = cheeseElem.querySelector('p')
  cheeseValue.innerText = `Mining Total: ${bank.toString()}`
}

function drawIncrease(itemToIncrease) {
  const increaseElem = document.getElementById(itemToIncrease)
  const increaseParagraph = increaseElem.querySelector('p')
  
  if (itemToIncrease == 'clickIncrease') {
    itemToIncrease = clickIncrease
  }
  else {
    itemToIncrease = autoIncrease
  }

  increaseParagraph.innerText = `+${itemToIncrease.toString()}`
}

//NOTE - Draw New Prices

function drawNewClickPrices(changedItem, name) {
  const newlyPricedElems = document.getElementById(changedItem)
  const foundItem = returnClickUpgrade(name)
  newlyPricedElems.innerText = `${foundItem.price.toString()} 🧀`
}
function drawNewAutoPrices(changedItem, name) {
  const newlyPricedElems = document.getElementById(changedItem)
  const foundItem = returnAutoUpgrade(name)
  newlyPricedElems.innerText = `${foundItem.price.toString()} 🧀`
}

function drawNewPrices(itemName) {
  if (itemName == 'pickaxe') {
    drawNewClickPrices('buyPickaxe', 'pickaxe')
    return
  }
  if (itemName == 'drill') {
    drawNewClickPrices('buyDrill', 'drill')
    return
  }
  if (itemName == 'astronaut') {
    drawNewAutoPrices('buyAstronaut', 'astronaut')
    return
  }
  if (itemName == 'rover') {
    drawNewAutoPrices('buyRover', 'rover')
    return
  }
    
  throw new Error("Incorrect ID or Item Name supplied.");
}

//NOTE - Draw Stats

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
setInterval(autoIncreaseRover, 3000);

//!SECTION