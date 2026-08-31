//  import Chart from 'chart.js/auto';

function addData(title, Data, bgcolor, bordercolor, order = 0, borda) {
    return {
        label: title,
        data: Data,
        backgroundColor: bgcolor,
        borderColor: '#fff',
        pointRadius: 3,
        pointBorderWidth: 4,
        borderWidth: borda,
        borderRadius: 12,
        order: order
    };
}

let dataset = addData("Teste", [1, 2, 3, 4, 3, 2, 1], '#f5be50', '#f5be50', 0, 2)
let divGrafico = document.getElementById('grafico');
let canvas = document.createElement('canvas');
canvas.id = 'bar' + 1 + 'chart';

const ctx = canvas.getContext('2d');
Chart.defaults.font.size = 18;

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["", "", "", "", "", "", ""],
        datasets: [dataset]
    },
    options: {
        aspectRatio: 1.5,
        responsive: true,
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        },
        scales: {

            x: {
                ticks: {
                    color: '#000',
                    font: {
                        size: 16,
                        family: 'Roboto'
                    },
                    display: false
                },
                border: {
                    color: '#f5be50',
                    width: 0.5
                },
                grid: {
                    tickColor: "black",
                    drawOnChartArea: false,
                    display: false
                },
            },

            y: {
                ticks: {
                    beginAtZero: true,
                    tickWidth: 4,
                    stepSize: 10,
                    weight: 1,
                    color: 'black',
                    font: {
                        size: 16,
                        family: 'Roboto'
                    },
                    display: false
                },
                border: {
                    color: 'black',
                    width: 0.5,
                    display: false
                },
                grid: {
                    tickColor: "black",
                    drawOnChartArea: false,
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
            callbacks: {
                label: function() {
                return ''; 
                }
                }
            }
        }

    }
});

divGrafico.appendChild(canvas);

dataset = addData("Teste", [-1, 4, 2, -2, 2, -3, 3, -1], '#fff', '#fff', 0, 2)
divGrafico = document.getElementsByClassName('grafico-title-section');

Chart.defaults.font.size = 18;

for (let i = 0; i < divGrafico.length; i++) {
    canvas = document.createElement('canvas');
    canvas.id = 'line' + 1 + 'chart';

    const ctx = canvas.getContext('2d');
    Chart.defaults.font.size = 18;

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["", "", "", "", "", "", ""],
            datasets: [dataset]
        },
        options: {
            aspectRatio: 1.5,
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            scales: {

                x: {
                    ticks: {
                        color: '#000',
                        font: {
                            size: 16,
                            family: 'Roboto'
                        },
                        display: false
                    },
                    border: {
                        color: '#fff',
                        width: 0.5,
                        display: false
                    },
                    grid: {
                        tickColor: "black",
                        drawOnChartArea: false,
                        display: false
                    },
                },

                y: {
                    ticks: {
                        beginAtZero: true,
                        tickWidth: 4,
                        stepSize: 10,
                        weight: 1,
                        color: 'black',
                        font: {
                            size: 16,
                            family: 'Roboto'
                        },
                        display: false
                    },
                    border: {
                        color: 'black',
                        width: 0.5,
                        display: false
                    },
                    grid: {
                        tickColor: "black",
                        drawOnChartArea: false,
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
            callbacks: {
                label: function() {
                return '';
                }
                }
            }
            }

        }
    });
   
    divGrafico[i].appendChild(canvas);
}

const data = {
  labels: [
    'Machine Learning',
    'AutoML',
    'Meta-learning',
    'Engenharia de Dados',
    'Ciência de Dados'
  ],
  datasets: [{
    label: 'Meus interesses',
    data: [16, 13, 16, 14, 13],
    backgroundColor: [
      '#008EEA',
      '#005185',
      '#003E66',
      '#0B9DFB',
      '#0065a5'
    ]
  }]
};

divGrafico = document.getElementById('polar-chart');
canvas = document.createElement('canvas');
canvas.id = 'polar' + 1 + 'chart';

const ctx2 = canvas.getContext('2d');
Chart.defaults.font.size = 18;

const myChart2 = new Chart(ctx2, {
    type: 'polarArea',
    data: data,
    title: 'Meus interesses',
    options: {
        aspectRatio: 1.5,
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        },
        scales: {
            r: {
                grid: {
                    display: false 
                },
                ticks: {
                    display: false 
                }
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
            callbacks: {
                label: function() {
                return ''; 
                }
                }
            }
        }

    }
});

divGrafico.appendChild(canvas);
