
// function chartsRelativeSize(percent, derection) {
//     var windowW = $(document).width();
//     var windowH = $(document).height();
//     var r = 0;
//     if ('h' === derection) {
//         r = percent * windowH / 100;
//     } else {
//         r = percent * windowW / 100;
//     }
//     return r;
// }

(function () {
    var myChart = echarts.init(document.querySelector(".charta"));

    var symbols = ['path://M694.7 248.2c-6.3-43.6-43.9-77.2-89.3-77.2L498.9 171l0 0.2-92.8 0c-45.4 0-82.9 33.5-89.3 77.2-0.6 3-1 6-1 9.2L315.8 441l0 120c0 21.8 16 39.4 35.8 39.4 19.8 0 35.8-17.6 35.8-39.4l0-46.8 0-228.4 14.5 0 0 685.4c0 28.3 20.9 51.2 46.6 51.2 25.7 0 46.6-22.9 46.6-51.3L495.1 622.5l21.4 0 0-0.2 0 348.9c0 28.3 20.9 51.2 46.6 51.2 25.7 0 46.6-22.9 46.6-51.3l0-685.5 14.5 0 0 275.1c0 21.8 16 39.4 35.8 39.4 19.8 0 35.8-17.6 35.8-39.4l0-303.4C695.8 254.3 695.4 251.2 694.7 248.2z M503.1 145.8c40.3 0 72.9-32.6 72.9-72.9 0-40.3-32.6-72.9-72.9-72.9s-72.9 32.6-72.9 72.9C430.2 113.2 462.9 145.8 503.1 145.8z',
        'path://M511.6 190.5c-39.4 0-71.3-39.9-71.3-89.1 0-49.2 31.9-89.1 71.3-89.1s71.3 39.9 71.3 89.1c0 49.2-31.8 89.1-71.3 89.1zM706 500.3c12.4 51-42.5 72.1-55.7 23l-53.8-216h-17.2l94.3 379.5h-88.7V972c0 51.6-63.2 51.6-63.2 0V686.7h-20.4v285.2c0 51.6-65.4 51.6-65.4 0V686.7H349.5l92.4-379.5H427l-53.6 216c-13.6 48-68.6 28.1-55.8-23.1L377.7 266c7-27.1 35.8-73.3 86-75.5h96.6c48.6 2.1 77.7 48.8 85.7 75.3l60 234.5z m0 0'
    ];
    var bodyMax = 100//指定图形界限的值
    var labelSetting = {
        normal: {
            show: false,
            position: 'bottom',
            offset: [0, 10],
            formatter: function (param) {
                return (param.value / bodyMax * 100).toFixed(0) + '%';
            },
            textStyle: {
                fontSize: 18,
                fontFamily: 'Arial',
                color: '#686868'
            }
        }
    };
    var markLineSetting = { //设置标线
        symbol: 'none',
        lineStyle: {
            normal: {
                opacity: 0.3
            }
        },
        data: [{
            type: 'max',
            label: {
                normal: {
                    formatter: 'max: {c}'
                }
            }
        }, {
            type: 'min',
            label: {
                normal: {
                    formatter: 'min: {c}'
                }
            }
        }]
    };
    var option = {
        tooltip: {
            show: false, //鼠标放上去显示悬浮数据
        },
        grid: {
            // left: '20%',
            // right: '20%',
            top: '8%',
            bottom: '0',
            left: '1%',
            right: '1%',
            containLabel: true
        },
        xAxis: {
            data: ['男', '女'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize:10,
                },
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisTick: {
                // 刻度线
                show: false
            },
            axisLine: {
                // 轴线
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#00badb',
                    fontSize: 10,
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#393d60'
                },
            }
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{a}<br>{b}:{c}%',
            textStyle: {
                color: '#ffffff',
                fontSize: 10
            },
            axisPointer: {
                type: 'shadow',
            }
        },
        series: [
            {
                name: '男女比例',
                type: 'pictorialBar',
                symbolClip: true,
                symbolBoundingData: bodyMax,
                label: labelSetting,
                barWidth: 50,
                data: [
                    {
                        value: 35,
                        symbol: symbols[0],
                        itemStyle: {
                            normal: {
                                color: 'rgb(146,250,53)' //单独控制颜色
                            }
                        }
                    },
                    {
                        value: 65,
                        symbol: symbols[1],
                        itemStyle: {
                            normal: {
                                color: 'rgb(255,128,98)' //单独控制颜色
                            }
                        }
                    }],
                // markLine: markLineSetting,
                z: 10
            },
            {
                // 设置背景底色，不同的情况用这个
                name: 'full',
                type: 'pictorialBar', //异型柱状图 图片、SVG PathData
                symbolBoundingData: bodyMax,
                animationDuration: 0,
                barWidth: 50,
                itemStyle: {
                    normal: {
                        color: '#ccc' //设置全部颜色，统一设置
                    }
                },
                z: 10,
                data: [{
                    itemStyle: {
                        normal: {
                            color: 'rgba(146,250,53,0.30)' //单独控制颜色
                        }
                    },
                    value: 100,
                    symbol: symbols[0]
                },
                    {
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,128,98,0.30)' //单独控制颜色
                            }
                        },
                        value: 100,
                        symbol: symbols[1]
                    }
                ]
            }
        ]
    }

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".chartb"));
    var option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: "{a} <br/>{b}: {c}",
            textStyle: {
                color: '#ffffff',
                fontSize: 10
            },
            axisPointer: {
                type: 'shadow',
            }
        },
        grid: {
            left: 0,
            right: 0,
            top: '12%',
            bottom: 0,
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        width: '0.1vh',
                        fontSize: 10,
                    },
                },
                splitLine: {
                    show: false
                },
                data: ['城镇', '乡村']
            }
        ],
        color: ['#1B98B9'],
        yAxis: [{
            type: 'value',

            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#00badb',
                    fontSize: 10,
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#393d60'
                },
            }
        }],
        series: [
            {
                type: 'pictorialBar',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                symbolMargin: '10%',
                barWidth:30,
                data: [1120, 3340],
                z:10
            },
            {
                type: 'pictorialBar',
                symbolPosition:'end',
                symbolSize: [25, 25],
                symbolOffset: [0, '-100%'],
                barWidth:10,
                data: [
                    {
                        value: 1120,
                        symbol: 'image://img/cs.png'
                    },
                    {
                        value: 3340,
                        symbol: 'image://img/xc.png'
                    }
                ]
            }
        ]
    }

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".chartc"));
    const handred = 100;
    let point = 80;

    option = {
        title: {
            text: point + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#29EEF3',
                fontSize: '20'
            }
        },
        tooltip: {
            formatter: function(params) {
                return params.name + '：' + params.percent + ' %'
            }
        },
        legend: {
            show: true,
            itemGap: 12,
            data: ['占比', '剩余']
        },

        series: [{
            name: 'circle',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '66%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: point,

                itemStyle: {
                    normal: {
                        color: { // 颜色渐变
                            colorStops: [{
                                offset: 0,
                                color: '#4FADFD' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28E8FA' // 100% 处的颜色1
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {

                value: handred - point,
                itemStyle: {
                    normal: {
                        color: '#E1E8EE'
                    }
                }
            }]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".chartd"));
    const handred = 100;
    let point = 80;

    option = {
        title: {
            text: point + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#29EEF3',
                fontSize: '20'
            }
        },
        tooltip: {
            formatter: function(params) {
                return params.name + '：' + params.percent + ' %'
            }
        },
        legend: {
            show: true,
            itemGap: 12,
            data: ['占比', '剩余']
        },

        series: [{
            name: 'circle',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '66%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: point,

                itemStyle: {
                    normal: {
                        color: { // 颜色渐变
                            colorStops: [{
                                offset: 0,
                                color: '#4FADFD' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28E8FA' // 100% 处的颜色1
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {

                value: handred - point,
                itemStyle: {
                    normal: {
                        color: '#E1E8EE'
                    }
                }
            }]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    // 实例化对象
    // var dataAll = [
    //     { year: "60岁以上", data: [1120, 3340, 2315, 2230, 1345, 3320, 2230, 1120, 3340, 2315, 1120] },
    //     { year: "65岁以上", data:[1500, 3340, 2315, 2230, 1345, 3320, 1230, 1420, 3340, 2315, 3120] }
    // ];
    var myChart = echarts.init(document.querySelector(".chartf"));


    // var tabchange=function () {
    //     $('.js-tab').click(function () {
    //         $(this).addClass('on').siblings().removeClass('on');
    //         var lb=$(this).attr('nlData');
    //         if(lb=='yn'){
    //             loadLlhEch();
    //         }else{
    //             loadLlhEch();
    //         }
    //     })
    // };
    var option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: "{a} <br/>{b}: {c}",
            textStyle: {
                color: '#ffffff',
                fontSize: 10
            },
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: 0,
            right: 0,
            top: '8%',
            bottom: 0,
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        width: '0.1vh',
                        fontSize: 10,
                    },
                },
                splitLine: {
                    show: false
                },
                data: ['商河', '济阳', '天桥', '章丘', '槐荫', '历下', '市中', '历城', '长清', '莱芜', '钢城']
            }
        ],
        yAxis: [{
            type: 'value',

            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#00badb',
                    fontSize: 10,
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#393d60'
                },
            }
        }],
        series: [{
            name: '老龄化比例',
            type: 'pictorialBar',
            symbol: 'image://img/old.png',
            symbolRepeat: 'true',
            symbolSize: [10, 10],
            symbolMargin:'10%',
            data: [1120, 3340, 2315, 2230, 1345, 3320, 2230, 1120, 3340, 2315, 1120]
        }
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    var dataAll = [
        { year: "60岁以上", data: [1120, 3340, 2315, 2230, 1345, 3320, 2230, 1120, 3340, 2315, 1120] },
        { year: "65岁以上", data:[1500, 3340, 2315, 2230, 1345, 3320, 1230, 1420, 3340, 2315, 3120] }
    ];
    document.querySelector(".left-bottom-right div").addEventListener("click", function (e) {
        var i = e.target == this.children[0] ? 0 : 1;
        option.series[0].data = dataAll[i].data;
        myChart.setOption(option);
    });

// $('.six').on('click',function () {
//
// // console.log(dataAll[$(this).index()])
//     var obj=dataAll[$(this).index()];
//     option.series[0].data=obj.data[0];
//     // option.series[1].data=obj.data[1];
//     myChart.setOption(option);
// });
//     $('.seven').on('click',function () {
//
// // console.log(dataAll[$(this).index()])
//         var obj=dataAll[$(this).index()];
//         // option.series[1].data=obj.data[1];
//         option.series[1].data=obj.data[1];
//         myChart.setOption(option);
//     })

})();
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".charte"));

    var option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: "{a} <br/>{b}: {c}",
            textStyle: {
                color: '#ffffff',
                fontSize: 10
            },
            axisPointer: {
                type: 'shadow',
            }
        },
        grid: {
            left: 0,
            right: 0,
            top: '8%',
            bottom: 0,
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    interval: 0, rotate: 15,
                    textStyle: {
                        color: '#fff',
                        width: '0.1vh',
                        fontSize: 10,
                    },
                },
                splitLine: {
                    show: false
                },
                data: ['商河', '吉阳', '天桥', '章丘', '槐荫','历下','市中','历城','长清','莱芜','钢城']
            }
        ],
        yAxis: [{
            type: 'value',

            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#00badb',
                    fontSize: 10,
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#393d60'
                },
            }
        }],
        series: [{
            name: '新生儿比例',
            type: 'pictorialBar',
            symbol: 'image://img/baby.png',
            symbolRepeat: 'true',
            symbolSize: [10,10],
            symbolMargin: '20%',
            data: [1120, 3340, 2315, 2230, 1345, 3320, 2230, 1120, 3340, 2315, 1120]
        }
        ]
    };


myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});
})();


(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".chartg"));

    var myData = ['0-4岁', '5-9岁', '10-14岁', '15-19岁', '20-24岁', '25-29岁', '30-34岁', '35-39岁', '40-44岁', '45-49岁', '50-54岁', '55-59岁', '60-64岁', '65-69岁', '70-74岁', '75-79岁', '80岁及以上'];
    var option = {
        title: {
            text: '年龄段（岁）',
            left: 'center',
            textStyle: {
                color: '#00b9ee',
                fontSize: 10
            }
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function (params) {
                return params[0].name + "<br>男：" + params[0].value + "<br>女：" + params[1].value
            },
            textStyle: {
                color: '#ffffff',
                fontSize: 10
            },
            axisPointer: {
                type: 'shadow',
            }
        },
        legend: {
            data: ['男', '女'],
            top: 0,
            itemWidth: 20,
            itemHeight: 6,
            itemGap: 100,
            textStyle: {
                color: '#00b9ee',
                fontSize: 15
            }
        },
        grid: {
            left: '0%',
            right: '5%',
            top: '6%',
            bottom: '1vh',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        width: '0.1vh',
                        fontSize:10
                    },
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [{
            type: 'category',

            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                },
            },
            data: ['0-4岁', '5-9岁', '10-14岁', '15-19岁', '20-24岁', '25-29岁', '30-34岁', '35-39岁', '40-44岁', '45-49岁', '50-54岁', '55-59岁', '60-64岁', '65-69岁', '70-74岁', '75-79岁', '80岁及以上']
        }],
        series: [
            {
                name: '男',
                type: 'line',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                    }
                },
                lineStyle: {
                    normal: {
                        width: 3
                    }
                }, areaStyle: {
                    normal: {
                        //颜色渐变
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: 'rgba(146,250,53, 0.5)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(146,250,53, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 15
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#86e734'
                    }
                },
                data: [2300, 1370, 2140, 2434, 3200, 1220, 3210, 1240, 1244, 4200, 1370, 2140, 2434, 3200, 1370, 2140, 2434]
            },
            {
                name: '女',
                type: 'line',

                label: {
                    show: true,
                    position: 'right',
                    formatter: function (params) {
                        return String(params.data).substr(1)
                    }
                },
                lineStyle: {
                    normal: {
                        width: 3
                    }
                }, areaStyle: {
                    normal: {
                        //颜色渐变
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: 'rgba(255,109,75, 0.1)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(255,109,75, 0.5)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6d4b'
                    }
                },
                data: [-2300, -1370, -2140, -2434, -3200, -1220, -3210, -1240, -1244, -4200, -1370, -2140, -2434, -3200, -1370, -2140, -2434]
            }
        ]
    };

myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});
})();
