//SECTION - STATE

let bank = 500

let clickIncrease = 1

let autoIncrease = 0


let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 50,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'drill',
    price: 250,
    quantity: 0,
    bonus: 1
  }
];

let autoUpgrades = [
  {
    name: 'astronaut',
    price: 1000,
    quantity: 0,
    bonus: 20
  },
  {
    name: 'rover',
    price: 50000,
    quantity: 0,
    bonus: 20
  }
];

//!SECTION

//SECTION - LOGIC

function mine() {
  bank += clickIncrease
  drawCheeseTotal()
  console.log('Cheese increase:', clickIncrease, 'Cheese Total:', bank)
}

function getUpgrade(type, upgradeName) {
  let foundUpgrade = type.find(upgrade => upgrade.name == upgradeName)
  console.log(foundUpgrade)
  buyUpgrade(foundUpgrade)
}

function buyUpgrade(item) {
  if (bank < item.price) {
    return
  }
  item.quantity++
  item.price *= 1.2
  console.log(item);
}

function addToUpgradeValue() {

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

//!SECTION

//SECTION - PAGE LOAD

//!SECTION