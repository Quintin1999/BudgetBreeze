document.addEventListener("DOMContentLoaded", function () {
  setArrays();
  createCurrentChart();
  createCurrentFinanceTable();
});

addFinanceButton.addEventListener("click", function () {
  addFinance();
  createCurrentChart();
});

resetFinanceData.addEventListener("click", function () {
  resetData();
});
