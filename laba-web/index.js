window.onload = function () {
 const labels = ['JAN', 'FEB', 'MAR','APR','MAY','JUN'];

var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data_JSON = JSON.parse(this.responseText)//.data_charts.map((item) => parseInt(item, 10));
            
            const data_2 = {
            labels: labels,
            datasets: [{
            backgroundColor: 'rgb(75, 198, 255)',
            borderColor: 'rgb(75, 198, 255)',
            data: data_JSON.data_line_chart,
            pointRadius: 0,
            fill: 1,
            tension: 0.3
                
        },{
				backgroundColor: 'rgb(75, 198, 255)',
				borderColor: 'rgb(75, 198, 255)',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				pointRadius: 0,

			}]
    };
    const config_2 = {
        type: 'line',
        responsive: true,
        data: data_2,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 70000,
                    min: 10000,
                    grace: '5%',
                }
            }
        },
             
    };
	
    const MyChart1 = new Chart(
        document.getElementById('MyChart1'),
        config_2
    )
    var data_4 = {
        datasets: [
            {
                data: data_JSON.data_doughnut,
                
                cutout: 120,
                responsive: true,
                backgroundColor: [
                    "rgb(225, 196, 0)",
                    "rgb(56, 164, 221)",
                    "rgb(179, 157, 219)"  
                ],
                hoverBackgroundColor: [
                    "rgb(225, 196, 0)",
                    "rgb(56, 164, 221)",
                    "rgb(179, 157, 219)"   
                ]
            }]
    };

    const config_4 = {
        type: 'doughnut',
        data: data_4,
        options: {
            
            
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                    
                }
            }
        },
    };
    const MyChart4 = new Chart(
        document.getElementById('MyChart4'),
        config_4)
        }
    }

    request.open("GET", "data.json", true);
	request.send();
    const data = {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgb(177, 152, 220)',
            borderColor: 'rgb(177, 152, 220)',
            data: [40000, 35000, 27000,45000,55000,38000],
            pointRadius: 0,
            fill: 1,
            tension: 0.3    
        },{
				backgroundColor: 'rrgb(177, 152, 220)',
				borderColor: 'rgb(177, 152, 220)',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				pointRadius: 0,

			}]
    };
    const config = {
        type: 'line',
        responsive: true,
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 70000,
                    min: 10000,
                    grace: '5%',
                    grid: {
      							display: false
   							 }
                }, x: {
    						grid: {
     							 display: false
    							}
							  }
            },
            

        },
             
    };
	
    const MyChart2 = new Chart(
        document.getElementById('MyChart2'),
        config
    )


     const data_3 = {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgb(109,199,190)',
            borderColor: 'rgb(109,199,190)',
            data: [30000, 55000, 35000,45000,50000,38000],
            pointRadius: 0,
            fill: 1,
            tension: 0.3    
        },{
				backgroundColor: 'rgb(109,199,190)',
				borderColor: 'rgb(109,199,190)',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				pointRadius: 0,

			}]
    };
    const config_3 = {
        type: 'line',
        responsive: true,
        data: data_3,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 70000,
                    min: 10000,
                    grace: '5%',
                 grid: {
      							display: false
   							 }
                }, x: {
    						grid: {
     							 display: false
    							}
							  }
            },
            

        },
             
    };
	
    const MyChart3 = new Chart(
        document.getElementById('MyChart3'),
        config_3
    )



}