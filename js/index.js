// const { Chart } = require("./chart.min");

// const { Chart } = require("./chart.min");

$(document).ready(function() {
    $(" .select").niceSelect()
    $(".table__rows").mCustomScrollbar();
    $(".content__right").mCustomScrollbar();

    $(".table__check input").click(function() {
        if ($(this).is(':checked')) {
            $(this).parents(".table__row").addClass("table__row--active");
        } else {
            $(this).parents(".table__row").removeClass("table__row--active");
        }
    })
    $(".datapicker__show").click(function() {
        $(this).addClass("datapicker__show--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        if ($(".datapicker__show").hasClass("datapicker__show--active")) {
            var div = $(".datapicker__hidden"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.siblings(".datapicker__show").removeClass("datapicker__show--active")
            }
        }

    });


    function doughnutDiagram() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [20, 20, 15, 7],
                    backgroundColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(255, 76, 97, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(255, 76, 97, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    // borderWidth: 1
                }]
            },
            options: {
                cutout: 50
            }
        });
    }

    function doughnutDiagram2() {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [20, 20, 15, 7],
                    backgroundColor: [
                        // 'rgba(255, 76, 97, 1)',
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(51, 214, 159, 1)',
                        'rgba(255, 76, 97,1)'
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(51, 214, 159, 1)',
                        'rgba(255, 76, 97,1)'
                    ],
                    // borderWidth: 1
                }]
            },
            options: {
                cutout: 35
            }
        });
    }

    function lineDiagram() {
        Chart.defaults.scale.beginAtZero = true;
        Chart.defaults.scale.ticks.maxRotation = 0;
        Chart.defaults.scale.ticks.backdropColor = 'rgba(159, 162, 180,1)'
            // Chart.defaults.scale.ticks.padding = 10;
        Chart.defaults.font.size = 10;
        Chart.defaults.font.family = 'Proxima Nova';
        Chart.defaults.plugins.legend.display = false;
        let ctx = document.getElementById("myChart3").getContext('2d');
        const data = {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек', ],
            datasets: [{
                // label: '# of Votes',
                data: [18, 30, 29, 45, 38, 19, 21, 40, 48, 43, 39, 20],
                lineTension: 1,
                fill: true,
                backgroundColor: 'rgba(55, 81, 255, 0.1)', // Цвет фона
                borderColor: 'rgba(0, 73, 141, 1)', // Цвет границы
                borderWidth: 1,
            }]
        };
        const options = {
            scales: {
                yAxes: [{
                    display: false,
                }],


            }
        }
        console.log(Chart.defaults)
        const lineChart = new Chart(ctx, {
            type: 'line',
            axisX: {
                labelAngle: 0
            },
            data: data,
            options: options,
        })
    }

    if (document.getElementById('myChart')) {
        doughnutDiagram()
    }
    if (document.getElementById('myChart2')) {
        doughnutDiagram2()
    }


    if (document.getElementById('myChart3')) {
        lineDiagram()
    }

    $(".table__head-title").click(function() {
        $(this).toggleClass("table__head-title--active")
    })

})