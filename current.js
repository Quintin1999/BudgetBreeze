document.addEventListener("DOMContentLoaded", function () {
  createChart();
  createFinanceTable();
});

addFinanceButton.addEventListener("click", function () {
  addFinance();
  clearFinanceTable();
  createFinanceTable();
});

resetFinanceData.addEventListener("click", function () {
  resetCurrentStorage();

  createChart();

  clearFinanceTable();

  location.reload();
});
