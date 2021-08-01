(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".left-top-left"));

    option = {
        xAxis: {
            data: ['感染性腹泻', '流行新感冒', '登革热', '手足口病', '水痘', '流行性眼线炎', '新红热','甲型病毒','疟疾'],
            axisLine: {
                lineStyle: {

                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            }
        },
        yAxis: {

            nameTextStyle: {
                color: '#fff',
                fontSize: 10
            },
            axisLine: {
                lineStyle: {
                    color: '#3d5269'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {

                lineStyle: {
                    color: '#2d3d53'
                }
            },


        },
        series: [{
            type: 'bar',
            barWidth: 15,
            itemStyle:{
                normal:{
                    color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5ef3ff'
                    }, {
                        offset: 1,
                        color: '#06a4f4'
                    }], false)
                }
            },
            label: {
                normal: {
                    show: false,
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: '#ffffff',
                    position: 'top',
                }
            },
            data: [1254, 1154, 1054, 954, 857, 711, 611,555,444]
        }]
    };

    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".left-top-right-chart"));

    option = {
        color: ['#B56147'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {

            textStyle: {
                fontSize: '12',
                color:'#fff'
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2021-07', '2021-05', '2021-03', '2021-01', '2020-01', '2020-11', '2020-09'],
            axisLabel: {
                textStyle: {
                    fontSize: '12',
                    color:'#fff'
                }
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    fontSize: '12',
                    color:'#fff'
                }
            },
        },
        series: [
            {

                smooth:true,
                data: [100, 150, 850, 200, 400, 500, 880,],
                type: 'line',
                areaStyle: {}
            }
        ]

    };

    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".right-bottom-right-bottom"));

    var symbols = [
        'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
        'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z',
        'path://M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z'
    ];
    var bodyMax = 100; //指定图形界限的值
    var labelSetting = {
        normal: {
            show: true,
            position: 'bottom',
            offset: [0, 30],
            formatter: function(param) {
                return (param.value / bodyMax * 100).toFixed(0) + '%';
            },
            textStyle: {
                fontSize: 10,
                fontFamily: 'Arial',
            }
        }
    };

    option = {
        tooltip: {
            show: false, //鼠标放上去显示悬浮数据
        },
        color:['#69cce6','#ff8282'],
        grid: {
            left: '40%',
            right: '40%',
            top: '30%',
            bottom: '45%',
            containLabel: true
        },
        xAxis: {
            position: 'top',
            data: ['男性', '女性'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#666',
                    fontSize: 10
                }
            }
        },
        yAxis: {
            max: bodyMax,
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
                // 轴坐标文字
                show: false
            }
        },
        series: [{
            name: '男性',
            type: 'pictorialBar',
            symbolClip: true,
            symbolBoundingData: bodyMax,
            label: labelSetting,
            data: [{
                value: 80,
                symbol: symbols[0],
                itemStyle: {
                    normal: {
                        color: 'rgba(105,204,230)' //单独控制颜色
                    }
                },
            },
                {

                }
            ],
            // markLine: markLineSetting,
            z: 10
        },
            {
                name: '女性',
                type: 'pictorialBar',
                symbolClip: true,
                symbolBoundingData: bodyMax,
                label: labelSetting,
                data: [{
                },
                    {
                        value: 65,
                        symbol: symbols[1],
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,130,130)' //单独控制颜色
                            }
                        },
                    }
                ],
                // markLine: markLineSetting,
                z: 10
            },
            {
                // 设置背景底色，不同的情况用这个
                name: 'full',
                type: 'pictorialBar', //异型柱状图 图片、SVG PathData
                symbolBoundingData: bodyMax,
                animationDuration: 0,
                itemStyle: {
                    normal: {
                        color: '#ccc' //设置全部颜色，统一设置
                    }
                },
                z: 10,
                data: [{
                    itemStyle: {
                        normal: {
                            color: 'rgba(105,204,230,0.40)' //单独控制颜色
                        }
                    },
                    value: 100,
                    symbol: symbols[0]
                },
                    {
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,130,130,0.40)' //单独控制颜色
                            }
                        },
                        value: 100,
                        symbol: symbols[1]
                    }
                ]
            },
            {
                name:'男女比例',
                type:'pie',
                radius: ['65%', '85%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:80, name:'男性'},
                    {value:60, name:'女性'}
                ]
            }
        ]
    }

    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".right-top-right"));

option = {
    color: ['#269632'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {

          textStyle: {
            fontSize: '12',
            color:'#fff'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2021-07', '2021-05', '2021-03', '2021-01', '2020-01', '2020-11', '2020-09'],
          axisLabel: {
            textStyle: {
              fontSize: '10',
              color:'#fff'
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              fontSize: '10',
              color:'#fff'
            }
          },
        },
        series: [
          {

            smooth:true,
            data: [100, 150, 850, 200, 400, 500, 880,],
            type: 'line',
            areaStyle: {}
          }
        ]

};


    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".left-bottom-left-bottom"));

    let  option = {
        tooltip : {
            trigger: 'axis',

        },
        grid:{
            x:60,
            y:10,
            x2:20,
            y2:25,
            top:10,
            borderWidth:0
        },
        yAxis : [
            {
                splitLine:{ show:false},

                axisTick:{
                    show:false
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#dcdcdc'
                    }
                },
                splitArea:{ show:false},
                type : 'category',
                data :['发热、咳嗽、流口水','呼吸浅促','皮疹、水泡','头痛、眼眶痛、肌肉疼','持续高烧','肌肉酸痛、乏力','恶心、呕吐、食欲不振','腹痛、腹胀、腹泻'],
                axisLabel:{interval:0,rotate:0}
            }
        ],
        xAxis : [
            {
                splitLine:{
                    show:false,
                },
                axisTick:{
                    show:false
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#dcdcdc'
                    }
                },
                splitArea:{ show:false},
                type : 'value',
                //max:100
            }
        ],
        dataZoom:[{
            show: true,
            orient:'vertical',
            width: 5,
            left: 10,
            startValue:0,
            endValue:6,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '100%',
        }],
        series : [

            {
                type:'bar',
                barWidth:11,
                silent:true,
                itemStyle:{
                    normal:{
                    }
                },
            },
            {
                name:'数据汇聚量',
                type:'bar',
                barWidth:11,
                data:['200','300','400','500','600','700','800'],
                itemStyle:{
                    normal:{
                        color:function(params){
                            let colorList = ['#FD6D87', '#FD6D87', '#FD6D87', '#FD6D87','#FD6D87','#FD6D87','#FD6D87','#FD6D87'];
                            return colorList[params.dataIndex]
                        },
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".right-bottom-left-bottom"));


    option = {
        title : {
            text: '',
            x:'center'
        },
        color: ['#31CC32','#FF9767','#86CDF9','#FD6D87','#4B5CC5','#FAFE73'],
        tooltip : {
            trigger: 'item',
        },
        toolbox: {
            show : true,
        },
        calculable : true,
        series : [
            {

                type:'pie',
                radius : [20, 80],

                roseType : 'area',
                data:[
                    {value:5, name:'婴儿（1-3岁）'},
                    {value:10, name:'少儿（4-10岁）'},
                    {value:15, name:'少年（10-18岁）'},
                    {value:20, name:'青年（18-45岁）'},
                    {value:25, name:'中年（45-60岁）'},
                    {value:30, name:'老年（60岁以上）'},
                ]
            }
        ]
    };


    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".right-top-left"));
    var data = [20, 18, 12, 11, 9,9,8,4];
    var titlename = ['抑郁症', '高血压', '痔疮', '肺癌', '子宫肌瘤','乙肝','水痘','肺结核'];
    var valdata = [2000, 1800, 1200, 1100, 900,900,800,700];
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6','#F57474','#F8B448','#F8B448'];
    option = {
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                formatter: function(value, index) {
                    return [
                        '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        // padding: 5,
                        align: 'center',
                        // width: 15,
                        // height: 15
                    },
                }
            },


        }, {
            show: true,
            inverse: true,
            data: valdata,
            axisLabel: {
                textStyle: {
                    fontSize: 8,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 1,
            data: data,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                    fontSize:8
                }
            },
        }, {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100,100,100,100],
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 1,
                    barBorderRadius: 10,
                }
            }
        }, ]
    };


    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


