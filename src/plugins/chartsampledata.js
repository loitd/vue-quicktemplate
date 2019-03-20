export const planetChartData = {
    type: 'line',
    data: {
      labels: ['1-Mar', '2-Mar', '3-Mar', '4-Mar', '5-Mar', '6-Mar', '7-Mar', '8-Mar', '9-Mar', '10-Mar', '11-Mar', '12-Mar', '13-Mar', '14-Mar', '15-Mar', '16-Mar', '17-Mar', '18-Mar', '19-Mar', '20-Mar', '21-Mar', '22-Mar', '23-Mar', '24-Mar', '25-Mar', '26-Mar', '27-Mar', '28-Mar', '29-Mar', '30-Mar',],
      datasets: [
        { // one line graph
          label: 'Transactions',
          type: 'line', // Add this
          data: [494, 440, 455, 513, 504, 460, 420, 546, 494, 440, 455, 513, 504, 460, 420,],
          backgroundColor: [
            'rgba(54,73,93,.5)', // Blue
          ],
          borderColor: [
            '#36495d',
          ],
          borderWidth: 3
        },
        { // another line graph
          label: 'Amount (x1.000.000 vnd)',
          type: 'line', // Add this
          data: [673, 504, 358, 713, 714, 527, 552, 717, 673, 504, 358, 713, 714, 527, 552,],
          backgroundColor: [
            'rgba(71, 183,132,.5)', // Green
          ],
          borderColor: [
            '#47b784',
          ],
          borderWidth: 3
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      },
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  }
  
export default planetChartData;