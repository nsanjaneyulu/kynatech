$(document).ready(function() {
/* dashboard spend by month bar charts  Start */
    var buyers = document.getElementById("buyers");
    var ctx = buyers.getContext("2d");

    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "MY SPEND BY MONTH",
            backgroundColor: [
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(254, 249, 111, 0.9)',
                'rgba(254, 249, 111, 0.9)',
                'rgba(254, 249, 111, 0.9)',
                'rgba(254, 249, 111, 0.9)'

            ],
            borderColor: [
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(242, 195, 4, 0.9)',
                'rgba(254, 249, 111, 0.9)',
                'rgba(254, 249, 111, 0.9)',
                'rgba(254, 249, 111, 0.9)',
                'rgba(254, 249, 111, 0.9)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40, 68, 56, 75, 89, 100],
        }]
    };

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data
    });
    /* dashboard spend by month bar charts  End */
    /* dashboard spend by category bar Start */
    var countries = document.getElementById("countries");
    var ctx = countries.getContext("2d");

    var data = {
        labels: [
            "Red",
            "Blue",
            "Yellow",
            "Green"
        ],
        animation: {
            animateScale: true
        },
        datasets: [{
            data: [300, 50, 100, 200],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#0fbd7a"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#0fbd7a"
            ]
        }]
    };
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data
    });
    /* dashboard spend by category bar End */
    /* dashboard my home value bar Start */
    var myhomevalue = document.getElementById("myhomevalue");
    var ctx = myhomevalue.getContext("2d");

    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{


            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#f00",
            borderColor: "#f00",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#f00",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#f00",
            pointHoverBorderColor: "#f00",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [22, 28, 29, 32, 38, 38, 40, 29, 32],
            spanGaps: false,
        }, {


            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [99, 92, 88, 79, 72, 65, 50, 92, 88, 79],
            spanGaps: false,
        }]
    };
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data
    });
    /* dashboard my home value bar End */
});