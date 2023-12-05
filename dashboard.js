// When document is loaded run these functions
document.addEventListener("DOMContentLoaded", function () {
  createCurrentChart();

  createBudgetChart();
});

// Navigate to current page when the current finance chart is clicked
currentFinanceElement.onclick = function () {
  window.location.href = "current.html";
};

// Navigate to budget page when the budget finance chart is clicked
budgetFinanceElement.onclick = function () {
  window.location.href = "history.html";
};
