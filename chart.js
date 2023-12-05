let currentAmount = [];
let currentColor = [];
let currentCategory = [];
let currentDescription = [];

const addFinanceButton = document.getElementById("addFinance");
const resetFinanceData = document.getElementById("resetData");

const currentFinanceTable = document.getElementById("current-finance-table");

const currentFinanceElement = document.getElementById("currentFinances");
const budgetFinanceElement = document.getElementById("budgetFinances");

// Variables for Pie Charts
const currentFinances = document.getElementById("currentFinances");
const budgetFinances = document.getElementById("budgetFinances");

// Variables for Adding Data
const financeAmount = document.getElementById("finance-amount");
const financeColor = document.getElementById("finance-color");
const financeCategory = document.getElementById("finance-category");
const financeDescription = document.getElementById("finance-description");

// Color Variables for Pie Chart
let hexCodes = [
  "#9FDDFF",
  "#A5FF9D",
  "#C49FFF",
  "#FF9D9D",
  "#FFC09D",
  "#FFE49F",
  "#CCCCCC",
];
let colorNames = [
  "light blue",
  "light green",
  "light purple",
  "light red",
  "light orange",
  "light yellow",
  "light gray",
];

// Variables for local storage of Current Finance Chart
let storageCurrent = JSON.parse(localStorage.getItem("currentData")) || [];

function setLocalStorage(userAmount, userColor, userCategory, userDescription) {
  storageCurrent.push({
    amount: userAmount,
    color: userColor,
    category: userCategory,
    description: userDescription,
  });

  localStorage.setItem("currentData", JSON.stringify(storageCurrent));
}

function setArrays() {
  currentCategory = storageCurrent.map((item) => item.category);
  currentAmount = storageCurrent.map((item) => item.amount);
  currentColor = storageCurrent.map((item) => item.color);
  currentDescription = storageCurrent.map((item) => item.description);
}

function updateLocalStorage() {
  resetData();

  storageCurrent.push({
    amount: currentAmount,
    color: currentColor,
    category: currentCategory,
    description: currentDescription,
  });

  storageCurrent.localStorage.setItem(
    "currentData",
    JSON.stringify(storageCurrent)
  );
}

// Pull input values from user and sets them
function addFinance() {
  let userAmount = financeAmount.value;
  let userColor = financeColor.value;
  let userCategory = financeCategory.value;
  let userDescription = financeDescription.value;

  setLocalStorage(userAmount, userColor, userCategory, userDescription);
  setArrays();
}

// Delete All Local Storage
function resetData() {
  localStorage.removeItem("currentData");

  location.reload();
}

// Populate Current Finance Table
function createCurrentFinanceTable() {
  for (i = 0; i < currentAmount.length; i++) {
    let row = currentFinanceTable.insertRow();

    let index = row.insertCell(0);
    let color = row.insertCell(1);
    let name = row.insertCell(2);
    let amount = row.insertCell(3);
    let category = row.insertCell(4);
    let deleteCell = row.insertCell(5);

    index.textContent = i + 1;
    color.style.backgroundColor = currentColor[i];
    name.textContent = currentDescription[i];
    amount.textContent = currentAmount[i];
    category.textContent = currentCategory[i];

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      currentColor.splice(i, 1);
      currentDescription.splice(i, 1);
      currentAmount.splice(i, 1);
      currentCategory.splice(i, 1);

      updateLocalStorage();
    });

    deleteCell.appendChild(deleteButton);
  }
}

// Create Current Finance Chart
function createCurrentChart() {
  new Chart(currentFinances, {
    type: "pie",
    data: {
      labels: currentCategory,
      datasets: [
        {
          data: currentAmount,
          backgroundColor: currentColor,
        },
      ],
    },
  });
}

// Create Budget Finance Chart
function createBudgetChart() {
  new Chart(budgetFinances, {
    type: "pie",
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
        },
      ],
    },
  });
}
