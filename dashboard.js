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

function createHistoryChart(monthIndex) {
  let chartColor = [];
  let chartAmount = [];
  let chartLabel = [];

  let leftover = parseFloat(currentStorage.months[monthIndex].leftoverIncome);

  calculateLeftoverIncome(monthIndex);

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

  historyChart.data.datasets[0].backgroundColor = chartColor;
  historyChart.data.datasets[0].data = chartAmount;
  historyChart.data.labels = chartLabel;

  console.log(chartColor);

  historyChart.update();
}

// When document is loaded run these functions
document.addEventListener("DOMContentLoaded", function () {
  createCurrentChart(0);

  createHistoryChart(1);
});

// Navigate to current page when the current finance chart is clicked
currentFinances.onclick = function () {
  window.location.href = "current.html";
};

// Navigate to budget page when the budget finance chart is clicked
budgetFinances.onclick = function () {
  window.location.href = "history.html";
};
