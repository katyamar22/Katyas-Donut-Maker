// set initial values
let donuts = 0;
let autoClickers = 0;
let autoClickerCost = 100;

// select elements
const donutCounter = document.querySelector('#donut-counter');
const donutButton = document.querySelector('#donut-button');
const donutClicksDisplay = document.querySelector('#donut-clicks');
const autoClickersDisplay = document.querySelector('#auto-clickers');
const autoClickerCountDisplay = document.querySelector('#auto-clicker-count');
const autoClickerCostDisplay = document.querySelector('#auto-clicker-cost');
const autoClickerButton = document.querySelector('#auto-clicker-button');

// update donut count and display
function updateDonuts() {
  donuts++;
  donutCounter.textContent = donuts;
}

// add donut on click
donutButton.addEventListener('click', () => {
  updateDonuts();
});

// update auto clicker count and donut rate
function updateAutoClickers() {
  if (donuts >= autoClickerCost) {
    donuts -= autoClickerCost;
    autoClickers++;
    autoClickerCost = Math.floor(autoClickerCost * 1.1);
    autoClickerCostDisplay.textContent = autoClickerCost;
    donutClicksDisplay.textContent = '1 + ' + autoClickers;
    autoClickersDisplay.textContent = autoClickers;
    autoClickerCountDisplay.textContent = autoClickers;
  }
  if (donuts < autoClickerCost) {
    autoClickerButton.disabled = true;
    autoClickerButton.classList.add('disabled');
  } else {
    autoClickerButton.disabled = false;
    autoClickerButton.classList.remove('disabled');
  }
  setTimeout(updateAutoClickers, 1000);
}

// start updating auto clickers
updateAutoClickers();
