$(document).ready(function() {
	loadActivationPendenciesChart();
	topActivationsChart();
	showSecondarySalesChart();
	showGlobalCustomerSatisfaction();
});
function loadActivationPendenciesChart() {

	$('#id_Container_For_Activation_Pendencies').highcharts({
		chart : {
			type : 'bar'
		},
		title : {
			text : ''
		},
		subtitle : {
			text : 'By Month'
		},
		xAxis : {
			categories : [ 'January', 'February', 'March', 'April', 'May' ],
			title : {
				text : null
			}
		},
		yAxis : {
			min : 0,
			title : {
				text : 'Numbers (millions)',
				align : 'high'
			},
			labels : {
				overflow : 'justify'
			}
		},
		tooltip : {
			valueSuffix : ' millions'
		},
		plotOptions : {
			bar : {
				dataLabels : {
					enabled : true
				}
			}
		},
		legend : {
			layout : 'verrtical',
			align : 'right',
			verticalAlign : 'top',
			x : -40,
			y : 100,
			floating : true,
			borderWidth : 1,
			backgroundColor : '#FFFFFF',
			shadow : true
		},
		credits : {
			enabled : false
		},
		series : [ {
			name : 'FTD',
			data : [ 10, 40, 30, 50, 55 ]
		}, {
			name : 'MTD',
			data : [ 20, 50, 40, 60, 65 ]
		}, {
			name : 'YTD',
			data : [ 35, 55, 55, 75, 70 ]
		} ]
	});
	$('#id_Container_For_Activation_Pendencies').width(
			$('#id_Container_For_Activation_Pendencies').parent().width());
	$('#id_Container_For_Activation_Pendencies').removeAttr('style');
}

function topActivationsChart() {

	$('#id_Container_For_Top_Activations').highcharts({
		chart : {
			plotBackgroundColor : null,
			plotBorderWidth : null,
			plotShadow : false
		},
		title : {
			text : ''
		},
		credits : {
			enabled : false
		},
		tooltip : {
			pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions : {
			pie : {
				allowPointSelect : true,
				cursor : 'pointer',
				dataLabels : {
					enabled : false,
					color : '#000000',
					connectorColor : '#000000',
					format : '<b>{point.name}</b>: {point.percentage:.1f} %'
				}
			}
		},
		series : [ {
			type : 'pie',
			name : 'Top Activations',
			data : [ [ 'Manish', 45.0 ], [ 'Rajesh', 26.8 ], {
				name : 'Venkat',
				y : 12.8,
				sliced : true,
				selected : true
			}, [ 'Sarath', 8.5 ], [ 'Sai', 6.2 ], [ 'Suneeta', 0.7 ] ]
		} ]
	});

	$('#id_Container_For_Top_Activations').width(
			$('#id_Container_For_Top_Activations').parent().width());
	$('#id_Container_For_Top_Activations').removeAttr('style');

}

function showSecondarySalesChart() {

	$('#id_Secondary_Sales')
			.highcharts(
					{
						chart : {
							type : 'bar'
						},
						title : {
							text : ''
						},
						subtitle : {
							text : 'Secondary Sales'
						},
						xAxis : {
							categories : [ 'FTD', 'MTD', 'YTD',

							]
						},
						yAxis : {
							min : 0,
							title : {
								text : 'Numbers (In Million)'
							}
						},
						credits : {
							enabled : false
						},
						tooltip : {
							headerFormat : '<span style="font-size:10px">{point.key}</span><table>',
							pointFormat : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
									+ '<td style="padding:0"><b>{point.y:.1f} Million</b></td></tr>',
							footerFormat : '</table>',
							shared : true,
							useHTML : true
						},
						plotOptions : {
							series : {
								cursor : 'pointer',
								// pointPadding : 0.2,
								// borderWidth : 0,
								point : {
									events : {
										click : function() {
											// alert(this.x+'-'+this.y);
											var targetData = [
													(this.y * 40 / 100) + 10,
													(this.y * 35 / 100) + 15,
													(this.y * 25 / 100) - 3 ];
											var achievedData = [
													this.y * 40 / 100,
													this.y * 35 / 100,
													this.y * 25 / 100 ];
											showSecondaryDetailsDrillDown(
													targetData, achievedData)
										}
									}
								}
							}
						},
						series : [ {
							name : 'Sales',
							data : [ 15, 25, 35 ]

						} ]
					});

}

function showSecondaryDetailsDrillDown(targetData, achievedData) {
	$('#id_Secondary_Sales')
			.highcharts(
					{
						chart : {
							type : 'column'
						},
						title : {
							text : ''
						},
						subtitle : {
							text : 'Click to go back to Secondary Sales Chart'
						},
						xAxis : {
							categories : [ 'DSE-1', 'DSE-2', 'DSE-3' ]
						},
						yAxis : {
							min : 0,
							title : {
								text : 'Numbers (In Million)'
							}
						},
						credits : {
							enabled : false
						},
						tooltip : {
							headerFormat : '<span style="font-size:10px">{point.key}</span><table>',
							pointFormat : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
									+ '<td style="padding:0"><b>{point.y:.1f} Million</b></td></tr>',
							footerFormat : '</table>',
							shared : true,
							useHTML : true
						},
						plotOptions : {
							series : {
								cursor : 'pointer',
								// pointPadding : 0.2,
								// borderWidth : 0,
								point : {
									events : {
										click : function() {
											showSecondarySalesChart();
										}
									}
								}
							}
						},
						series : [ {
							name : 'Target',
							data : targetData

						}, {
							name : 'Achieved',
							data : achievedData

						}, {
							type : 'pie',
							name : '',
							data : [ {
								name : 'DSE-1',
								y : achievedData[0],
								color : Highcharts.getOptions().colors[5]
							// Jane's color
							}, {
								name : 'DSE-2',
								y : achievedData[1],
								color : Highcharts.getOptions().colors[6]
							// John's color
							}, {
								name : 'DSE-3',
								y : achievedData[2],
								color : Highcharts.getOptions().colors[7]
							// Joe's color
							} ],
							center : [ 700, 30 ],
							size : 100,
							showInLegend : false,
							dataLabels : {
								enabled : false
							}
						} ]
					});

}

function showSecondaryChartsDetails() {

	$('#id_DetailsSecondary_Sales')
			.highcharts(
					{
						chart : {
							type : 'column'
						},
						title : {
							text : ''
						},
						subtitle : {
							text : ''
						},
						xAxis : {
							categories : [ 'DSE-1', 'DSE-2', 'DSE-3' ]
						},
						yAxis : {
							min : 0,
							title : {
								text : 'Rainfall (mm)'
							}
						},
						credits : {
							enabled : false
						},
						tooltip : {
							headerFormat : '<span style="font-size:10px">{point.key}</span><table>',
							pointFormat : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
									+ '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
							footerFormat : '</table>',
							shared : true,
							useHTML : true
						},
						plotOptions : {
							column : {
								pointPadding : 0.2,
								borderWidth : 0
							}
						},
						series : [ {
							name : 'Target',
							data : [ 10, 11, 7 ]

						}, {
							name : 'Achieved',
							data : [ 8, 6, 11 ]

						} ]
					});

}

function showGlobalCustomerSatisfaction(){
	

	    $('#id_Customer_Satisfaction').highcharts({

	        chart: {
	            type: 'gauge',
	            plotBackgroundColor: null,
	            plotBackgroundImage: null,
	            plotBorderWidth: 0,
	            plotShadow: false
	        },

	        title: {
	            text: ''
	        },

	        subtitle: {
	            text: 'Global Customer Satisfaction'
	        },
	        credits : {
				enabled : false
			},

	        pane: {
	            startAngle: -90,
	            endAngle: 90,
	            background: [{
	                backgroundColor: {
	                    linearGradient: {
	                        x1: 0,
	                        y1: 0,
	                        x2: 0,
	                        y2: 1
	                    },
	                    stops: [
	                        [0, '#FFF'],
	                        [1, '#333']
	                    ]
	                },
	                borderWidth: 0,
	                outerRadius: '109%'
	            }, {
	                backgroundColor: {
	                    linearGradient: {
	                        x1: 0,
	                        y1: 0,
	                        x2: 0,
	                        y2: 1
	                    },
	                    stops: [
	                        [0, '#333'],
	                        [1, '#FFF']
	                    ]
	                },
	                
	                borderWidth: 1,
	                outerRadius: '107%'
	            }, {
	                // default background
	            }, {
	                backgroundColor: '#DDD',
	                borderWidth: 0,
	                outerRadius: '105%',
	                innerRadius: '103%'
	            }]
	        },

	        // the value axis
	        yAxis: {
	            min: 0,
	            max: 100,

	            minorTickInterval: 'auto',
	            minorTickWidth: 1,
	            minorTickLength: 10,
	            minorTickPosition: 'inside',
	            minorTickColor: '#666',

	            tickPixelInterval: 30,
	            tickWidth: 2,
	            tickPosition: 'inside',
	            tickLength: 10,
	            tickColor: '#666',
	            labels: {
	                step: 2,
	                rotation: 'auto'
	            },
	            title: {
	                text: ''
	            },
	            plotBands: [{
	                from: 0,
	                to: 40,
	                color: '#DF5353' // red
	            }, {
	                from: 40,
	                to: 70,
	                color: '#DDDF0D' // yellow
	            }, {
	                from: 70,
	                to: 100,
	                color: '#55BF3B' // green
	            }]
	        },

	        series: [{
	            name: 'Satisfaction Index',
	            data: [80],
	            tooltip: {
	                valueSuffix: ''
	            }
	        }]

	    },
	    // Add some life
	    function (chart) {
	        if (!chart.renderer.forExport) {
	            setInterval(function () {
	                var point = chart.series[0].points[0],
	                    newVal,
	                    inc = Math.round((Math.random() - 0.5) * 20);

	                newVal = point.y + inc;
	                if (newVal < 0 || newVal > 200) {
	                    newVal = point.y - inc;
	                }
	                if (newVal > 100) newVal = 100;
	                point.update(newVal);

	            }, 3000);
	        }
	    });

}