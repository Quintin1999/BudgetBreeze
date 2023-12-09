// When document is loaded run these functions
document.addEventListener("DOMContentLoaded", function () {
  createCurrentChart("january");

  createHistoryChart("february");
});

// Navigate to current page when the current finance chart is clicked
currentFinances.onclick = function () {
  window.location.href = "current.html";
};

// Navigate to budget page when the budget finance chart is clicked
budgetFinances.onclick = function () {
  window.location.href = "history.html";
};
