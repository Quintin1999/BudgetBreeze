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

let monthIndex = 0;

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

// Initialization data that insures all data is stored properly
let currentInitial = {
  months: [
    {
      amount: [1],
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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
      color: [hexCodes[6]],
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

let currentStorage = JSON.parse(localStorage.getItem("currentStorage"));
console.log(currentStorage);
let totalIncome = parseFloat(currentStorage.months[monthIndex].monthlyIncome);
let leftover = parseFloat(currentStorage.months[monthIndex].leftoverIncome);
let expenses = parseFloat(currentStorage.months[monthIndex].expenses);

if (currentStorage === null || currentStorage === "") {
  localStorage.setItem("currentStorage", JSON.stringify(currentInitial));
} else {
}

function resetCurrentStorage() {
  localStorage.removeItem("currentStorage");

  localStorage.setItem("currentStorage", JSON.stringify(currentInitial));
}

function isNullPresent(monthIndex) {
  var month = currentStorage.months[monthIndex];

  if (month.description.includes("null")) {
    return true;
  } else {
    return false;
  }
}

function removeInitialValue(monthIndex) {
  currentStorage.months[monthIndex].amount.splice(0, 1);
  currentStorage.months[monthIndex].color.splice(0, 1);
  currentStorage.months[monthIndex].category.splice(0, 1);
  currentStorage.months[monthIndex].description.splice(0, 1);
}

function calculateLeftoverIncome() {
  let leftover = totalIncome;

  for (i = 0; i < currentStorage.months[monthIndex].amount.length; i++) {
    leftover -= parseFloat(currentStorage.months[monthIndex].amount[i]);
  }

  currentStorage.months[monthIndex].leftoverIncome = leftover;
}

function addCurrentValue(monthIndex) {
  categorySelected = financeCategory.value;

  if (categorySelected === "income") {
    currentStorage.months[monthIndex].income.push(financeAmount.value);
    currentStorage.months[monthIndex].incomeDescription.push(
      financeDescription.value
    );

    totalIncome += parseFloat(financeAmount.value);

    calculateLeftoverIncome();

    currentStorage.months[monthIndex].monthlyIncome = totalIncome;

    localStorage.setItem("currentStorage", JSON.stringify(currentStorage));

    createChart();
  } else {
    currentStorage.months[monthIndex].amount.push(financeAmount.value);
    currentStorage.months[monthIndex].color.push(financeColor.value);
    currentStorage.months[monthIndex].category.push(financeCategory.value);
    currentStorage.months[monthIndex].description.push(
      financeDescription.value
    );

    calculateLeftoverIncome();

    localStorage.setItem("currentStorage", JSON.stringify(currentStorage));
  }

  createChart();
}

function addFinance() {
  if (isNullPresent(monthIndex)) {
    removeInitialValue(monthIndex);
    addCurrentValue(monthIndex);
  } else {
    addCurrentValue(monthIndex);
  }

  createChart();

  location.reload();
}

function clearFinanceTable() {
  for (let i = currentFinanceTable.rows.length - 1; i > 0; i--) {
    currentFinanceTable.deleteRow(i);
  }
}

// Populate Finance Table
function createFinanceTable() {
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

let currentChart = new Chart(currentFinances, {
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

function createChart() {
  let chartColor = [];
  let chartAmount = [];
  let chartLabel = [];

  calculateLeftoverIncome();

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
    let posleftover = -leftover;

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
    chartAmount.push(posleftover);
    chartLabel.push("negative income");
  } else {
    chartColor = currentStorage.months[monthIndex].color;
    chartAmount = currentStorage.months[monthIndex].amount;
    chartLabel = currentStorage.months[monthIndex].category;
  }

  currentChart.data.datasets[0].backgroundColor = chartColor;
  currentChart.data.datasets[0].data = chartAmount;
  currentChart.data.labels = chartLabel;

  currentChart.update();
}

function getRowIndex(element) {
  let row = element.closest("tr");
  return Array.from(row.parentNode.children).indexOf(row);
}

let incomeLength = currentStorage.months[monthIndex].income.length;

document.querySelector("table").addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteFinance")) {
    let rowIndex = getRowIndex(event.target);

    if (rowIndex <= incomeLength) {
      rowIndex = rowIndex - 1;

      let removedIncome = parseFloat(
        currentStorage.months[monthIndex].income[rowIndex]
      );

      leftover -= removedIncome;
      totalIncome -= removedIncome;

      currentStorage.months[monthIndex].leftoverIncome = leftover;
      currentStorage.months[monthIndex].monthlyIncome = totalIncome;

      currentStorage.months[monthIndex].income.splice(rowIndex, 1);
      currentStorage.months[monthIndex].incomeDescription.splice(rowIndex, 1);

      localStorage.setItem("currentStorage", JSON.stringify(currentStorage));
    } else {
      indexPosition = rowIndex - incomeLength - 1;

      currentStorage.months[monthIndex].amount.splice(indexPosition, 1);
      currentStorage.months[monthIndex].color.splice(indexPosition, 1);
      currentStorage.months[monthIndex].category.splice(indexPosition, 1);
      currentStorage.months[monthIndex].description.splice(indexPosition, 1);

      localStorage.setItem("currentStorage", JSON.stringify(currentStorage));
    }
  }

  currentChart.update();
  clearFinanceTable();
  createFinanceTable();

  location.reload();
});
