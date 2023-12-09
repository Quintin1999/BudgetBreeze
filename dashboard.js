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

// When document is loaded run these functions
document.addEventListener("DOMContentLoaded", function () {
  createCurrentChart("january", currentChart);
  createCurrentChart("february", historyChart);
});

// Navigate to current page when the current finance chart is clicked
currentFinances.onclick = function () {
  window.location.href = "current.html";
};

// Navigate to budget page when the budget finance chart is clicked
budgetFinances.onclick = function () {
  window.location.href = "history.html";
};
