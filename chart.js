// Current Arrays
let currentCategory = [];
let currentAmount = [];
let currentColor = [];
let currentDescription = [];
let currentIncome = 0;

// Budget Arrays
let budgetAmount = [];
let budgetColor = [];
let budgetCategory = [];
let budgetDescription = [];
let budgetIncome = 0;

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
let storageCurrentAmount =
  JSON.parse(localStorage.getItem("currentAmount")) || [];
let storageCurrentColor =
  JSON.parse(localStorage.getItem("currentColor")) || [];
let storageCurrentCategory =
  JSON.parse(localStorage.getItem("currentCategory")) || [];
let storageCurrentDescription =
  JSON.parse(localStorage.getItem("currentDescription")) || [];
let storageCurrentIncome =
  JSON.parse(localStorage.getItem("currentIncome")) || [];

// Variables for local storage of Budget Finance Chart
let storageBudgetAmount =
  JSON.parse(localStorage.getItem("budgetAmount")) || [];
let storageBudgetColor = JSON.parse(localStorage.getItem("budgetColor")) || [];
let storageBudgetCategory =
  JSON.parse(localStorage.getItem("budgetCategory")) || [];
let storageBudgetDescription =
  JSON.parse(localStorage.getItem("budgetDescription")) || [];
let storageBudgetIncome =
  JSON.parse(localStorage.getItem("budgetIncome")) || [];

// Populate Local Data into Current Data
function pullCurrentLocalData() {
  currentAmount = storageCurrentAmount;
  currentColor = storageCurrentColor;
  currentCategory = storageCurrentCategory;
  currentDescription = storageCurrentDescription;
  currentIncome = storageCurrentIncome;
}

function setLocalStorage() {
  localStorage.setItem("currentAmount", JSON.stringify(currentAmount));
  localStorage.setItem("currentColor", JSON.stringify(currentColor));
  localStorage.setItem("currentCategory", JSON.stringify(currentCategory));
  localStorage.setItem(
    "currentDescription",
    JSON.stringify(currentDescription)
  );
}

// Pull input values from user and sets them
function addFinance(type) {
  switch (type) {
    case "current":
      amount = currentAmount;
      color = currentColor;
      category = currentCategory;
      description = currentDescription;
      break;
    case "budget":
      amount = budgetAmount;
      color = budgetColor;
      category = budgetCategory;
      description = budgetDescription;
      break;
    default:
      break;
  }

  amount.push(financeAmount.value);
  color.push(financeColor.value);
  category.push(financeCategory.value);
  description.push(financeDescription.value);
}

// Add Chart Data
function addCurrentFinanceData() {
  pullCurrentLocalData();

  // Pulls input values from the user and sets them to the written code
  addFinance("current");

  // Adds input values into local storage
  setLocalStorage();
}

// Income
function addIncome(type) {}

// Delete All Local Storage
function resetData() {
  localStorage.removeItem("currentAmount");
  localStorage.removeItem("currentColor");
  localStorage.removeItem("currentCategory");
  localStorage.removeItem("currentDescription");

  location.reload();
}

// Populate Finance Table
function createFinanceTable() {
  pullCurrentLocalData();

  for (i = 0; i < currentAmount.length; i++) {
    let row = currentFinanceTable.insertRow();

    let index = row.insertCell(0);
    let color = row.insertCell(1);
    let name = row.insertCell(2);
    let amount = row.insertCell(3);
    let category = row.insertCell(4);
    let edit = row.insertCell(5);

    index.textContent = i + 1;
    color.backgroundColor = currentColor[i];
    name.textContent = currentDescription[i];
    amount.textContent = currentAmount[i];
    category.textContent = currentCategory[i];

    let editArray = document.createElement("button");
    editArray.textContent = "Delete";

    editArray.addEventListener("click", function () {
      currentAmount.splice(index + 1, 1);
      currentColor.splice(index + 1, 1);
      currentCategory.splice(index + 1, 1);
      currentDescription.splice(index + 1, 1);

      localStorage.setItem("currentAmount", JSON.stringify(currentAmount));
      localStorage.setItem("currentColor", JSON.stringify(currentColor));
      localStorage.setItem("currentCategory", JSON.stringify(currentCategory));
      localStorage.setItem(
        "currentDescription",
        JSON.stringify(currentDescription)
      );

      location.reload();

      createCurrentChart();
    });

    edit.appendChild(editArray);
  }
}

// Create Current Finance Chart
function createCurrentChart() {
  new Chart(currentFinances, {
    type: "pie",
    data: {
      labels: storageCurrentCategory,
      datasets: [
        {
          data: storageCurrentAmount,
          backgroundColor: storageCurrentColor,
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
