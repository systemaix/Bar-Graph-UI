// Chart data sets
const chartData = {
  today: {
    labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM'],
    data: [5, 9, 7, 14, 10, 6],
    colors: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#858796']
  },
  week: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [30, 45, 28, 60, 52, 40, 35],
    colors: ['#4e73df','#1cc88a','#36b9cc','#f6c23e','#e74a3b','#858796','#fd7e14']
  },
  month: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [120, 150, 180, 200],
    colors: ['#4e73df','#1cc88a','#36b9cc','#f6c23e']
  }
};

// Initialize chart
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: chartData.today.labels,
    datasets: [{
      label: 'Sales',
      data: chartData.today.data,
      backgroundColor: chartData.today.colors,
      borderColor: '#ffffff',
      borderWidth: 2,
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 10,
        cornerRadius: 6
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#e3e6f0'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
});

// Button event listeners
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const range = button.getAttribute('data-range');
    updateChart(range);
  });
});

// Update chart data
function updateChart(range) {
  myChart.data.labels = chartData[range].labels;
  myChart.data.datasets[0].data = chartData[range].data;
  myChart.data.datasets[0].backgroundColor = chartData[range].colors;
  myChart.update();
}
