const addFinanceButton = document.getElementById("addFinance");
const resetFinanceData = document.getElementById("resetData");

const currentFinanceTable = document.getElementById("finance-table");

// Variables for Pie Charts
const currentFinances = document.getElementById("current-finances");
const budgetFinances = document.getElementById("budget-finances");

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

function setMonthIndex(month) {
  let monthIndex = "null";

  switch (month) {
    case "january":
      monthIndex = 0;
      break;
    case "february":
      monthIndex = 1;
      break;
    case "march":
      monthIndex = 2;
      break;
    case "april":
      monthIndex = 3;
      break;
    case "may":
      monthIndex = 4;
      break;
    case "june":
      monthIndex = 5;
      break;
    case "july":
      monthIndex = 6;
      break;
    case "august":
      monthIndex = 7;
      break;
    case "september":
      monthIndex = 8;
      break;
    case "october":
      monthIndex = 9;
      break;
    case "november":
      monthIndex = 10;
      break;
    case "december":
      monthIndex = 11;
      break;
  }

  return monthIndex;
}

// Initialization data that insures all data is stored properly.
let currentInitial = {
  months: [
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
    {
      amount: [1],
      color: ["#CCCCCC"],
      description: ["null"],
      category: ["null"],
      income: [],
      incomeDescription: [],
      monthlyIncome: 0,
      expenses: 0,
      leftoverIncome: 0,
    },
  ],
};

// Initializes local storage and grabs all local storage.
let currentStorage = JSON.parse(localStorage.getItem("currentStorage"));

// Removes all local storage data and resets it to the initialized data.
function resetCurrentStorage() {
  localStorage.removeItem("currentStorage");
  localStorage.setItem("currentStorage", JSON.stringify(currentInitial));
  console.log("I made it here");
}

// Checks if the local storage data is the initialized data
function isNullPresent(month) {
  let monthIndex = setMonthIndex(month);

  var selectedMonth = currentStorage.months[monthIndex];

  if (selectedMonth.description.includes("null")) {
    return true;
  } else {
    return false;
  }
}

// Removes the filler initial data
function removeInitialValue(month) {
  let monthIndex = setMonthIndex(month);

  currentStorage.months[monthIndex].amount.splice(0, 1);
  currentStorage.months[monthIndex].color.splice(0, 1);
  currentStorage.months[monthIndex].category.splice(0, 1);
  currentStorage.months[monthIndex].description.splice(0, 1);
}

// Calculates the remaining income from total income
function calculateLeftoverIncome(month) {
  let monthIndex = setMonthIndex(month);
  let totalIncome = parseFloat(currentStorage.months[monthIndex].monthlyIncome);

  // if the first value is a null, it prevents the data from being subtracted
  if (isNullPresent(month)) {
  } else {
    let leftover = totalIncome;

    for (i = 0; i < currentStorage.months[monthIndex].amount.length; i++) {
      leftover -= parseFloat(currentStorage.months[monthIndex].amount[i]);
    }

    currentStorage.months[monthIndex].leftoverIncome = leftover;
    localStorage.setItem("currentStorage", JSON.stringify(currentStorage));
  }
}

function addCurrentValue(month) {
  let monthIndex = setMonthIndex(month);

  let totalIncome = parseFloat(currentStorage.months[monthIndex].monthlyIncome);

  categorySelected = financeCategory.value;

  if (categorySelected === "income") {
    currentStorage.months[monthIndex].income.push(financeAmount.value);
    currentStorage.months[monthIndex].incomeDescription.push(
      financeDescription.value
    );

    totalIncome += parseFloat(financeAmount.value);

    calculateLeftoverIncome(month);

    currentStorage.months[monthIndex].monthlyIncome = totalIncome;

    localStorage.setItem("currentStorage", JSON.stringify(currentStorage));

    createCurrentChart(month, currentChart);
  } else {
    currentStorage.months[monthIndex].amount.push(financeAmount.value);
    currentStorage.months[monthIndex].color.push(financeColor.value);
    currentStorage.months[monthIndex].category.push(financeCategory.value);
    currentStorage.months[monthIndex].description.push(
      financeDescription.value
    );

    calculateLeftoverIncome(month);

    localStorage.setItem("currentStorage", JSON.stringify(currentStorage));
  }

  createCurrentChart(month, currentChart);
}

function addFinance(month) {
  if (isNullPresent(month)) {
    removeInitialValue(month);
    addCurrentValue(month);
  } else {
    addCurrentValue(month);
  }

  createCurrentChart(month, currentChart);

  location.reload();
}

function clearFinanceTable() {
  for (let i = currentFinanceTable.rows.length - 1; i > 0; i--) {
    currentFinanceTable.deleteRow(i);
  }
}

// Populate Finance Table
function createFinanceTable(month) {
  let monthIndex = setMonthIndex(month);

  rowCount = 0;

  for (i = 0; i < currentStorage.months[monthIndex].income.length; i++) {
    let row = currentFinanceTable.insertRow();

    let index = row.insertCell(0);
    let color = row.insertCell(1);
    let name = row.insertCell(2);
    let amount = row.insertCell(3);
    let category = row.insertCell(4);
    let edit = row.insertCell(5);

    let editArray = document.createElement("button");

    index.textContent = rowCount + 1;
    color.style.backgroundColor = "#808080";
    name.textContent = currentStorage.months[monthIndex].incomeDescription[i];
    amount.textContent = currentStorage.months[monthIndex].income[i];
    category.textContent = "income";

    editArray.classList.add("deleteFinance");
    editArray.textContent = "Delete";

    edit.appendChild(editArray);

    rowCount++;
  }

  for (i = 0; i < currentStorage.months[monthIndex].amount.length; i++) {
    let row = currentFinanceTable.insertRow();

    let index = row.insertCell(0);
    let color = row.insertCell(1);
    let name = row.insertCell(2);
    let amount = row.insertCell(3);
    let category = row.insertCell(4);
    let edit = row.insertCell(5);

    let editArray = document.createElement("button");

    index.textContent = rowCount + 1;
    color.style.backgroundColor = currentStorage.months[monthIndex].color[i];
    name.textContent = currentStorage.months[monthIndex].description[i];
    amount.textContent = currentStorage.months[monthIndex].amount[i];
    category.textContent = currentStorage.months[monthIndex].category[i];

    editArray.classList.add("deleteFinance");
    editArray.textContent = "Delete";

    edit.appendChild(editArray);

    rowCount++;
  }
}

function createCurrentChart(month, chart) {
  let monthIndex = setMonthIndex(month);

  let chartColor = [];
  let chartAmount = [];
  let chartLabel = [];

  let leftover = parseFloat(currentStorage.months[monthIndex].leftoverIncome);

  calculateLeftoverIncome(month);

  if (leftover > 0) {
    chartColor = currentStorage.months[monthIndex].color.map((color) => {
      return color;
    });
    chartAmount = currentStorage.months[monthIndex].amount.map((amount) => {
      return amount;
    });
    chartLabel = currentStorage.months[monthIndex].category.map((category) => {
      return category;
    });

    chartColor.push("#808080");
    chartAmount.push(leftover);
    chartLabel.push("leftover income");
  } else if (leftover < 0) {
    let posLeftover = -leftover;

    chartColor = currentStorage.months[monthIndex].color.map((color) => {
      return color;
    });
    chartAmount = currentStorage.months[monthIndex].amount.map((amount) => {
      return amount;
    });
    chartLabel = currentStorage.months[monthIndex].category.map((category) => {
      return category;
    });

    chartColor.push("#000000");
    chartAmount.push(posLeftover);
    chartLabel.push("negative income");
  } else {
    chartColor = currentStorage.months[monthIndex].color;
    chartAmount = currentStorage.months[monthIndex].amount;
    chartLabel = currentStorage.months[monthIndex].category;
  }

  chart.data.datasets[0].backgroundColor = chartColor;
  chart.data.datasets[0].data = chartAmount;
  chart.data.labels = chartLabel;

  chart.update();
}

function getRowIndex(element) {
  let row = element.closest("tr");
  return Array.from(row.parentNode.children).indexOf(row);
}
