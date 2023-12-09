let historyChart = new Chart(budgetFinances, {
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

const monthSelected = document.getElementById("month-select");

function createFinanceTableHistory(month) {
  let monthIndex = setMonthIndex(month);

  rowCount = 0;

  for (i = 0; i < currentStorage.months[monthIndex].income.length; i++) {
    let row = currentFinanceTable.insertRow();

    let index = row.insertCell(0);
    let color = row.insertCell(1);
    let name = row.insertCell(2);
    let amount = row.insertCell(3);
    let category = row.insertCell(4);

    index.textContent = rowCount + 1;
    color.style.backgroundColor = "#808080";
    name.textContent = currentStorage.months[monthIndex].incomeDescription[i];
    amount.textContent = currentStorage.months[monthIndex].income[i];
    category.textContent = "income";

    rowCount++;
  }

  for (i = 0; i < currentStorage.months[monthIndex].amount.length; i++) {
    let row = currentFinanceTable.insertRow();

    let index = row.insertCell(0);
    let color = row.insertCell(1);
    let name = row.insertCell(2);
    let amount = row.insertCell(3);
    let category = row.insertCell(4);

    index.textContent = rowCount + 1;
    color.style.backgroundColor = currentStorage.months[monthIndex].color[i];
    name.textContent = currentStorage.months[monthIndex].description[i];
    amount.textContent = currentStorage.months[monthIndex].amount[i];
    category.textContent = currentStorage.months[monthIndex].category[i];

    rowCount++;
  }
}

function setSelectedMonth() {
  let month = monthSelected.value;

  createCurrentChart(month, historyChart);
  clearFinanceTable();
  createFinanceTableHistory(month);
}

document
  .getElementById("month-select")
  .addEventListener("change", setSelectedMonth);

document.addEventListener("DOMContentLoaded", function () {
  setSelectedMonth();
});
