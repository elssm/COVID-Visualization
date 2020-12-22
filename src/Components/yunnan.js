import React from 'react';
import ReactDOM from 'react-dom';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsPie extends React.Component{
    componentDidMount(){
      var myChart = echarts.init(document.getElementById('echartspie'));
      myChart.setOption({
        title: { text: ' 云南当日疫情数据' },
        legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['云南省', '云南'],
            ['确诊', 174],
            ['死亡', 2],
            ['新增', 2],
            ['治愈', 79]
        ]
    },
    series: [{
        type: 'pie',
        radius: 150,
        center: ['50%', '50%']
        // No encode specified, by default, it is '2012'.
    }]
    });
    }
    render(){
      return (
        <div id="echartspie" style={{ width: "100%", height: "60vh" }}></div>
      )
    }
  }

  export default EchartsPie