const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'polarArea',
  data: {
    labels: ['Physical Product', 'Digital Product'],
    datasets: [{
      label: 'Sales',
      data: [200,290], 
      backgroundColor: [
        '#3409784F',  
        '#03AFC559'   
      ]
    }]
  },
  options: {
    scales: {
     responsive: true,
    }
  }
});