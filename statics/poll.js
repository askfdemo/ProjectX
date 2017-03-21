
init();
function switchVisible() {
            if (document.getElementById('submit')) {
                if (document.getElementById('submit').style.display == 'none') {
                    document.getElementById('newspaper1').style.display = 'block';
                    document.getElementById('submit').style.display = 'none';
                }
                else {
                    document.getElementById('submit').style.display = 'none';
                    document.getElementById('newspaper1').style.display = 'block';
                }
            }
}
function switchVisible1() {
            if (document.getElementById('submit1')) {

                if (document.getElementById('submit1').style.display == 'none') {
                    document.getElementById('newspaper2').style.display = 'block';
                    document.getElementById('submit1').style.display = 'none';
                }
                else {
                    document.getElementById('submit1').style.display = 'none';
                    document.getElementById('newspaper2').style.display = 'block';
                }
            }
}
function switchVisible2() {
            if (document.getElementById('submit2')) {
                if (document.getElementById('submit2').style.display == 'none') {
                    document.getElementById('newspaper3').style.display = 'block';
                    document.getElementById('submit2').style.display = 'none';
                }
                else {
                    document.getElementById('submit2').style.display = 'none';
                    document.getElementById('newspaper3').style.display = 'block';
                }
            }
}
function switchVisible3() {
            if (document.getElementById('submit3')) {
                if (document.getElementById('submit3').style.display == 'none') {
                    document.getElementById('newspaper4').style.display = 'block';
                    document.getElementById('submit3').style.display = 'none';
                }
                else {
                    document.getElementById('submit3').style.display = 'none';
                    document.getElementById('newspaper4').style.display = 'block';
                }
            }
}
function switchVisible4() {
            if (document.getElementById('submit4')) {
                if (document.getElementById('submit4').style.display == 'none') {
                    document.getElementById('newspaper5').style.display = 'block';
                    document.getElementById('submit4').style.display = 'none';
                }
                else {
                    document.getElementById('submit4').style.display = 'none';
                    document.getElementById('newspaper5').style.display = 'block';
                }
            }
}
function switchVisible5() {
            if (document.getElementById('submit5')) {
                if (document.getElementById('submit5').style.display == 'none') {
                    document.getElementById('newspaper6').style.display = 'block';
                    document.getElementById('submit5').style.display = 'none';
                }
                else {
                    document.getElementById('submit5').style.display = 'none';
                    document.getElementById('newspaper6').style.display = 'block';
                }
            }
}
function switchVisible6() {
            if (document.getElementById('submit6')) {
                if (document.getElementById('submit6').style.display == 'none') {
                    document.getElementById('newspaper7').style.display = 'block';
                    document.getElementById('submit6').style.display = 'none';
                }
                else {
                    document.getElementById('submit6').style.display = 'none';
                    document.getElementById('newspaper7').style.display = 'block';
                }
            }
}
function switchVisible7() {
            if (document.getElementById('submit7')) {
                if (document.getElementById('submit7').style.display == 'none') {
                    document.getElementById('newspaper8').style.display = 'block';
                    document.getElementById('submit7').style.display = 'none';
                }
                else {
                    document.getElementById('submit7').style.display = 'none';
                    document.getElementById('newspaper8').style.display = 'block';
                }
            }
}
function switchVisible8() {
            if (document.getElementById('submit8')) {
                if (document.getElementById('submit8').style.display == 'none') {
                    document.getElementById('newspaper9').style.display = 'block';
                    document.getElementById('submit8').style.display = 'none';
                }
                else {
                    document.getElementById('submit8').style.display = 'none';
                    document.getElementById('newspaper9').style.display = 'block';
                }
            }
}
 function switchVisible9() {
            if (document.getElementById('submit9')) {
                if (document.getElementById('submit9').style.display == 'none') {
                    document.getElementById('newspaper10').style.display = 'block';
                    document.getElementById('submit9').style.display = 'none';
                }
                else {
                    document.getElementById('submit9').style.display = 'none';
                    document.getElementById('newspaper10').style.display = 'block';
                }
            }
}
function switchVisible10() {
            if (document.getElementById('submit10')) {
                if (document.getElementById('submit10').style.display == 'none') {
                    document.getElementById('newspaper11').style.display = 'block';
                    document.getElementById('submit10').style.display = 'none';
                }
                else {
                    document.getElementById('submit10').style.display = 'none';
                    document.getElementById('newspaper11').style.display = 'block';
                }
            }
}
function switchVisible11() {
            if (document.getElementById('submit11')) {
                if (document.getElementById('submit11').style.display == 'none') {
                    document.getElementById('newspaper12').style.display = 'block';
                    document.getElementById('submit11').style.display = 'none';
                }
                else {
                    document.getElementById('submit11').style.display = 'none';
                    document.getElementById('newspaper12').style.display = 'block';
                }
            }
}
function switchVisible12() {
            if (document.getElementById('submit12')) {
                if (document.getElementById('submit12').style.display == 'none') {
                    document.getElementById('newspaper13').style.display = 'block';
                    document.getElementById('submit12').style.display = 'none';
                }
                else {
                    document.getElementById('submit12').style.display = 'none';
                    document.getElementById('newspaper13').style.display = 'block';
                }
            }
}




  function init()
   {
      document.getElementById('newspaper1').style.display='none';
      document.getElementById('newspaper2').style.display='none';
      document.getElementById('newspaper3').style.display='none';
      document.getElementById('newspaper4').style.display='none';
      document.getElementById('newspaper5').style.display='none';
      document.getElementById('newspaper6').style.display='none';
      document.getElementById('newspaper7').style.display='none';
      document.getElementById('newspaper8').style.display='none';
      document.getElementById('newspaper9').style.display='none';
      document.getElementById('newspaper10').style.display='none';
      document.getElementById('newspaper11').style.display='none';
      document.getElementById('newspaper12').style.display='none';
      document.getElementById('newspaper13').style.display='none';
   }
$(document).ready(function () {

    // Build the chart
    Highcharts.chart('containerr', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });


    //////


    // Build the chart
    Highcharts.chart('container1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('container2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('container3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
//////////////////

    // Build the chart
    Highcharts.chart('containerr1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////////////

    // Build the chart
    Highcharts.chart('containerr2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
/////////////////////

    // Build the chart
    Highcharts.chart('containerr3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
    /////////////////////

    // Build the chart
    Highcharts.chart('containerr4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
/////////////////////

    // Build the chart
    Highcharts.chart('containerr5', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr5', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr5', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
/////////////////////

    // Build the chart
    Highcharts.chart('containerr6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
/////////////////////

    // Build the chart
    Highcharts.chart('containerr7', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr7', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr7', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
/////////////////////

    // Build the chart
    Highcharts.chart('containerr8', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr8', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr8', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
/////////////////////

    // Build the chart
    Highcharts.chart('containerr9', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr9', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr9', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
/////////////////////

    // Build the chart
    Highcharts.chart('containerr10', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr10', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrr10', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
/////////////////////

    // Build the chart
    Highcharts.chart('containerr11', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 56
            }, {
                name: 'Female',
                y: 44,
                sliced: true,
                selected: true
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr11', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Countries based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'USA',
                y: 56.33
            }, {
                name: 'UK',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'AUS',
                y: 10.38
            }, {
                name: 'Spain',
                y: 4.77
            }, {
                name: 'India',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
        // Build the chart
    Highcharts.chart('containerrrr11', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age based Chart'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: '15-20',
                y: 56.33
            }, {
                name: '21-25',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '26-30',
                y: 10.38
            }, {
                name: '31-35',
                y: 4.77
            }, {
                name: '35-40',
                y: 0.91
            }, {
                name: '40 and above',
                y: 0.2
            }]
        }]
    });
////////////////
});

