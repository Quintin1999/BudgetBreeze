document.addEventListener("DOMContentLoaded", function () {
  createCurrentChart();
  createFinanceTable();
});

addFinanceButton.addEventListener("click", function () {
  for (let i = currentFinanceTable.rows.length - 1; i > 0; i--) {
    currentFinanceTable.deleteRow(i);
  }

  addCurrentFinanceData();
  createCurrentChart();
  createFinanceTable();
});

resetFinanceData.addEventListener("click", function () {
  resetData();
  createCurrentChart();
});
