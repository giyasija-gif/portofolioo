// Animated pie chart using Chart.js
const ctx = document.getElementById('skillChart').getContext('2d');

const data = {
  labels: ['Html-Css', 'bootstrap-laravel', 'design'],
  datasets: [{
    data: [62.5, 25, 12.5],
    backgroundColor: ['#ff6666', '#ff9999', '#ffc2c2'],
    borderWidth: 0
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#fff',
          font: {
            size: 14
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      duration: 2000
    }
  }
};

new Chart(ctx, config);
