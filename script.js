console.log('Hello!');

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname === '/otherpage.html') {
    // Retrieve data from local storage or set default values
    let dataChart1 = JSON.parse(localStorage.getItem('chart1Data')) || [30, 70];
    let dataChart2 = JSON.parse(localStorage.getItem('chart2Data')) || [40, 60];

    // Create Chart 1
    let ctx1 = document.getElementById('myChart1').getContext('2d');
    let chart1 = new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: ['Label 1', 'Label 2'],
        datasets: [{
          data: dataChart1,
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB']
        }]
      }
    });

    // Create Chart 2
    let ctx2 = document.getElementById('myChart2').getContext('2d');
    let chart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Label 1', 'Label 2'],
        datasets: [{
          data: dataChart2,
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB']
        }]
      }
    });

    // Update local storage data when charts are clicked
    document.getElementById('myChart1').onclick = function(evt) {
      let activePoints = chart1.getElementsAtEvent(evt);
      let chartData = activePoints[0]['_chart'].config.data.datasets[0].data;
      localStorage.setItem('chart1Data', JSON.stringify(chartData));
    };

    document.getElementById('myChart2').onclick = function(evt) {
      let activePoints = chart2.getElementsAtEvent(evt);
      let chartData = activePoints[0]['_chart'].config.data.datasets[0].data;
      localStorage.setItem('chart2Data', JSON.stringify(chartData));
    };
  }
});