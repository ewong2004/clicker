// Click counter

// Global Varible
let count = 0;

// Event Listeners
document.getElementById('plus1').addEventListener('click', addOne);
document.getElementById('plus5').addEventListener('click', addFive);
document.getElementById('plus10').addEventListener('click', addTen);
document.getElementById('sub1').addEventListener('click', subOne);
document.getElementById('sub5').addEventListener('click', subFive);
document.getElementById('sub10').addEventListener('click', subTen);



// Event Functions
function addOne() {
  // Update Varible
  count = count + 1;

  // Display New Value
  document.getElementById('counter').innerHTML = count;
}

function addFive() {
  // Update Varible
  count = count + 5;

  // Display New Value
  document.getElementById('counter').innerHTML = count;
}

function addTen() {
  // Update Varible
  count = count + 10;

  // Display New Value
  document.getElementById('counter').innerHTML = count;
}

function subOne() {
  // Update Varible
  count = count - 1;

  // Display New Value
  document.getElementById('counter').innerHTML = count;
}

function subFive() {
  // Update Varible
  count = count - 5;

  // Display New Value
  document.getElementById('counter').innerHTML = count;
}

function subTen() {
  // Update Varible
  count = count - 10;

  // Display New Value
  document.getElementById('counter').innerHTML = count;
}