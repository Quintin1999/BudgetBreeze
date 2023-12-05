document.addEventListener("DOMContentLoaded", function () {
  createCurrentChart();
  createFinanceTable();
});

addFinanceButton.addEventListener("click", function () {
  addCurrentFinanceData();
  createCurrentChart();
  createFinanceTable();
});

resetFinanceData.addEventListener("click", function () {
  resetData();
  createCurrentChart();
});
