let month = "january";

document.addEventListener("DOMContentLoaded", function () {
  createCurrentChart(month);
  createFinanceTable(month);

  console.log(currentStorage);
});

addFinanceButton.addEventListener("click", function () {
  addFinance(month);

  clearFinanceTable();
  createFinanceTable(month);
});

resetFinanceData.addEventListener("click", function () {
  resetCurrentStorage();

  createCurrentChart(month);
  clearFinanceTable();
});

document.querySelector("table").addEventListener("click", function (event) {
  let monthIndex = setMonthIndex(month);

  let leftover = parseFloat(currentStorage.months[monthIndex].leftoverIncome);
  let incomeLength = currentStorage.months[monthIndex].income.length;
  let totalIncome = parseFloat(currentStorage.months[monthIndex].monthlyIncome);

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
  createFinanceTable(month);

  location.reload();
});
