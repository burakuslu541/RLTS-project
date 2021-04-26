/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Echarts Init Js File
*/





// scatter chart

var dom = document.getElementById("scatter-chart");
var myChart = echarts.init(dom);
var app = {};
var value;
option = null;
option = {
  // Setup grid
  grid: {
    zlevel: 0,
    x: 0,
    x2: 0,
    y: 2,
    y2: 2,
    borderWidth: 0,
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "rgba(0,0,0,0)",
  },
  xAxis: {
    axisLine: {
      lineStyle: {  
        color: "#8791af",
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgba(166, 176, 207, 0.1)",
      },
    },
    min:0,
    max:10
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#8791af",
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgba(166, 176, 207, 0.1)",
      },
    
  },
  min:0,
  max:10
  },
  series: [
    {
      symbolSize: 30,
      data: [value],
      type: "scatter",
    },
  ],
  color: ["#34c38f"],
};
setInterval(function () {
  $.get("http://localhost:8000/koordinat", function (response) {
    option.series[0].data[0]=response;
    console.log(option.series[0].data);
    myChart.setOption(option, true);
  });
}, 2000);
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}







