(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".left-center-left"));
    const color= ["#dffaef","#1be8df","#fbd408"],
    option = {
        tooltip: {
            trigger: 'item'
        },
        color:color,
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['40%', '70%'],//大小修改
                avoidLabelOverlap: false,
                label: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                        fontSize: '40',
                                        fontWeight: 'bold',
                                    }
                                },
                data: [
                    {value:192581 },
                    {value:215635},
                    {value: 224585},
                ]
            }
        ]
    };
myChart.setOption(option);
window.addEventListener("resize", function() {
    myChart.resize();
});
})();
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".right-top-chart"));
    // 指定配置和数据
    // var option = {
    //     color: ["#1be8df"],
    //     tooltip: {
    //         trigger: "axis",
    //         axisPointer: {
    //             // 坐标轴指示器，坐标轴触发有效
    //             type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    //         }
    //     },
    //     grid: {
    //         left: "0%",
    //         top: "10px",
    //         right: "0%",
    //         bottom: "4%",
    //         containLabel: true
    //     },
    //     xAxis: [
    //         {
    //             type: "category",
    //             data: [
    //                 "入库件",
    //                 "出库件",
    //                 "在库件",
    //                 "退签件",
    //                 "丢失件"
    //             ],
    //             axisTick: {
    //                 alignWithLabel: true
    //             },
    //             axisLabel: {
    //                 textStyle: {
    //                     color: "rgba(255,255,255,.6)",
    //                     fontSize: "12"
    //                 }
    //             },
    //             axisLine: {
    //                 show: false
    //             }
    //         }
    //     ],
    //     yAxis: [
    //         {
    //             type: "value",
    //             axisLabel: {
    //                 textStyle: {
    //                     color: "rgba(255,255,255,.6)",
    //                     fontSize: "12"
    //                 }
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: "rgba(255,255,255,.1)"
    //                     // width: 1,
    //                     // type: "solid"
    //                 }
    //             },
    //             splitLine: {
    //                 lineStyle: {
    //                     color: "rgba(255,255,255,.1)"
    //                 }
    //             }
    //         }
    //     ],
    //     series: [
    //         {
    //             name: "直接访问",
    //             type: "bar",
    //             barWidth: "35%",
    //             data: [200, 300, 300, 900, 1500],
    //             itemStyle: {
    //                 barBorderRadius: 5
    //             }
    //         }
    //     ]
    // };
    let option = {
        legend: {
            orient: 'vertical',
            x: 'left',
            top:'10px',
            itemGap:30,
            itemWidth:12,
            itemHeight:12,
            icon:'circle',
            textStyle:{
                color:'#ffffff',
                fontSize:'15'
            },
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [{
            type: 'category',
            data: [
                "入库件",
                "出库件",
                "在库件",
                "退签件",
                "丢失件"
                        ],
            axisLine:{
                show:false//去出轴线
            },
            axisTick: {
                alignWithLabel: true,
                show:true,
                interval:2,
                lineStyle:{
                    color:'#EF9276'
                }
            },
            axisLabel : {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            }
        }],
        yAxis : [{
            type : 'value',
            axisLine:{
                show:false//去出轴线
            },
            axisTick: {
                show:false,
                interval:2

            },
            axisLabel : {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:['#A48EC4']
                }
            }
        }],
        series : [{
            type:'bar',
            barWidth: '40',
            label: {//数值在柱状图上
                normal: {
                    show: false,
                    position: 'insideTop'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        let colorList = ['#0E94EB','#DCA315','#A43AC6','#B62B2B','#7B6A2A'];
                        return colorList[params.dataIndex]
                    },
                    label: {//x轴也显示在柱状图上
                        show: false,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[
                {value:'550' },
                {value:'1132'},
                {value:'199'},
                {value:'456'},
                {value:'345'},
                {value:'223'},
                {value:'145'}
            ]
        }]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    // 数据变化
    var dataAll = [
        { year: "寄件",  data:[
                550 ,
                1132,
               199,
              456,
                345,
               223,
                145
            ]},
        { year: "收件",  data:[
                1250 ,
                1132,
                1099,
                1456,
                1345,
                1223,
                1405
            ] }
    ];

    document.querySelector(".select-box ul").addEventListener("click", function (e) {
        var i = e.target == this.children[0] ? 0 : 1;
        option.series[0].data = dataAll[i].data;
        myChart.setOption(option);
    });
})();