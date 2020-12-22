import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import jsonData from '../Assets/world.json'
import {Table} from 'react-bootstrap';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


// class WorldCom extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log(jsonData)
//         return (
//             <div>asfasfdsaf</div>
//         )
//     }
// }

let countryObj = {
    "北美洲":{
      confirm:0,
      heal:0,
      dead:0,
    }
  }
  
  jsonData.data.forEach((item,i) => {
    if(countryObj[item.continent]==undefined){
      countryObj[item.continent]={
        confirm:0,
        heal:0,
        dead:0,
      }
    }
    
    item.confirm = item.confirm?item.confirm:0;
    item.heal = item.heal?item.heal:0;
    item.dead = item.dead?item.dead:0;
    countryObj[item.continent] = {
      confirm:countryObj[item.continent].confirm +item.confirm,
      heal:countryObj[item.continent].heal +item.heal,
      dead:countryObj[item.continent].dead +item.dead,
    }
  });
  
  let countryList = []
  for (const key in countryObj) {
    countryObj[key].continent = key;
    countryList.push(countryObj[key])
  }
  // console.log(countryObj)
//   console.log(countryList)
  
  let countryListSort = countryList.sort((a,b)=>{
    if(a.confirm>b.confirm){
      return 1;
    }else{
      return -1;
    }
  })
  countryListSort[1]['continent']='未知';
//   console.log(countryListSort[1]['continent'])
  
  let continent = []
  let num = []
  countryList.map((item)=>{
    continent.push(item.continent)
    num.push(item.confirm)
  })
  
  class WorldCom extends React.Component{
    constructor(props){
      super(props)
    }
  
      render(){
        //   console.log(this.props.list)
        return (

          <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>地区</th>
              <th>确诊</th>
              <th>死亡</th>
              <th>治愈</th>
            </tr>
          </thead>
          <tbody>
          {
              this.props.list.map((item,index)=>{
                return (
                  <tr>
                    <td>{item.continent}</td>
                    <td>{item.confirm}</td>
                    <td>{item.dead}</td>
                    <td>{item.heal}</td>
                  </tr>
                )
              })
            }
            
          </tbody>
        </Table>
        )
      }
  }


class EchartsTest extends React.Component{
    componentDidMount(){
      var myChart = echarts.init(document.getElementById('echarts'));
      myChart.setOption({
        title: { text: ' 全球疫情柱状图' },
        tooltip: {},
        xAxis: {
            data: continent
        },
        yAxis: {},
        grid: {
          x: '2%', //相当于距离左边效果:padding-left
          // y: '30%',  //相当于距离上边效果:padding-top
          bottom: '3%',
          containLabel: true
      },
        series: [{
            name: '确诊',
            type: 'bar',
            data: num
        }]
    });
    }
    render(){
      return (
        <div id="echarts" style={{ width: "100%", height: "60vh" }}></div>
      )
    }
  }
  
  class EchartsBase extends React.Component{
    componentDidMount(){
      var myChart = echarts.init(document.getElementById('echartsline'));
      myChart.setOption({
        title: { text: ' 全球疫情折线图' },
        tooltip: {},
        xAxis: {
          data: continent
      },
      yAxis: {
          type: 'value'
      },
      grid: {
        x: '2%', //相当于距离左边效果:padding-left
        // y: '30%',  //相当于距离上边效果:padding-top
        bottom: '3%',
        containLabel: true
    },
      series: [{
          name: '确诊',
          data: num,
          type: 'line'
      }]
    });
    }
    render(){
      return (
        <div id="echartsline" style={{ width: "100%", height: "60vh" }}></div>
      )
    }
  }




var dataAxis = [1.28, 1.29, 1.3, 1.31, 2.01, 2.02, 2.03, 2.04, 2.05, 2.06, 2.07, 2.08, 2.09, 2.1, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.2, 2.21, 2.22, 2.23, 2.24, 2.25, 2.26, 2.27, 2.28, 2.29, 3.01, 3.02, 3.03, 3.04, 3.05, 3.06, 3.07, 3.08, 3.09, 3.1, 3.11, 3.12, 3.13, 3.14, 3.15, 3.16, 3.17, 3.18, 3.19, 3.2, 3.21, 3.22, 3.23, 3.24, 3.25, 3.26, 3.27, 3.28, 3.29, 3.3, 3.31, 4.01, 4.02, 4.03, 4.04, 4.05, 4.06, 4.07, 4.08, 4.09, 4.1, 4.11, 4.12, 4.13, 4.14, 4.15, 4.16, 4.17, 4.18, 4.19, 4.2, 4.21, 4.22, 4.23, 4.24, 4.25, 4.26, 4.27, 4.28, 4.29, 4.3, 5.01, 5.02, 5.03, 5.04, 5.05, 5.06, 5.07, 5.08, 5.09, 5.1, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 5.17, 5.18, 5.19, 5.2, 5.21, 5.22, 5.23, 5.24, 5.25, 5.26, 5.27, 5.28, 5.29, 5.3, 5.31, 6.01, 6.02, 6.03, 6.04, 6.05, 6.06, 6.07, 6.08, 6.09, 6.1, 6.11, 6.12, 6.13, 6.14, 6.15, 6.16, 6.17, 6.18, 6.19, 6.2, 6.21, 6.22, 6.23, 6.24, 6.25, 6.26, 6.27, 6.28, 6.29, 6.3, 7.01, 7.02, 7.03, 7.04, 7.05, 7.06, 7.07, 7.08, 7.09, 7.1, 7.11, 7.12, 7.13, 7.14, 7.15, 7.16, 7.17, 7.18, 7.19, 7.2, 7.21, 7.22, 7.23, 7.24, 7.25, 7.26, 7.27, 7.28, 7.29, 7.3, 7.31, 8.01, 8.02, 8.03, 8.04, 8.05, 8.06, 8.07, 8.08, 8.09, 8.1, 8.11, 8.12, 8.13, 8.14, 8.15, 8.16, 8.17, 8.18, 8.19, 8.2, 8.21, 8.22, 8.23, 8.24, 8.25, 8.26, 8.27, 8.28, 8.29, 8.3, 8.31, 9.01, 9.02, 9.03, 9.04, 9.05, 9.06, 9.07, 9.08, 9.09, 9.1, 9.11, 9.12, 9.13, 9.14, 9.15, 9.16, 9.17, 9.18, 9.19, 9.2, 9.21, 9.22, 9.23, 9.24, 9.25, 9.26, 9.27, 9.28, 9.29, 9.3, 10.01, 10.02, 10.03, 10.04, 10.05, 10.06, 10.07, 10.08, 10.09, 10.1, 10.11, 10.12, 10.13, 10.14, 10.15, 10.16, 10.17, 10.18, 10.19, 10.2, 10.21, 10.22, 10.23, 10.24, 10.25, 10.26, 10.27, 10.28, 10.29, 10.3, 10.31, 11.01, 11.02, 11.03, 11.04, 11.05, 11.06, 11.07, 11.08, 11.09, 11.1, 11.11, 11.12, 11.13, 11.14, 11.15, 11.16, 11.17, 11.18, 11.19, 11.2, 11.21, 11.22, 11.23, 11.24, 11.25, 11.26, 11.27, 11.28, 11.29, 11.3, 12.01, 12.02, 12.03, 12.04, 12.05, 12.06, 12.07, 12.08, 12.09, 12.1, 12.11, 12.12, 12.13, 12.14, 12.15, 12.16, 12.17, 12.18, 12.19, 12.2]
;
var data = [57, 74, 98, 124, 139, 149, 154, 177, 201, 225, 273, 299, 313, 385, 397, 444, 505, 516, 601, 687, 800, 904, 1018, 1096, 1231, 1528, 1895, 2286, 2575, 3085, 3945, 4947, 6305, 7342, 9628, 12047, 13897, 16234, 19378, 22903, 26959, 30814, 35796, 41212, 48724, 58493, 67414, 79559, 92093, 106167, 122946, 147281, 169551, 204426, 235356, 270475, 313748, 356275, 407822, 466847, 537359, 600269, 659449, 723899, 802883, 882341, 958134, 1057294, 1143525, 1206183, 1281747, 1366952, 1450303, 1538640, 1637683, 1716963, 1788161, 1858355, 1934291, 2017483, 2098707, 2190113, 2271717, 2339647, 2416345, 2509897, 2574719, 2659664, 2756365, 2835787, 2908094, 2980553, 3059873, 3141226, 3240690, 3339282, 3395941, 3506189, 3588157, 3668152, 3763009, 3860594, 3958892, 4044639, 4127234, 4205093, 4289731, 4379103, 4477725, 4573159, 4663087, 4746857, 4836178, 4929628, 5032360, 5132438, 5253256, 5345699, 5448370, 5531463, 5627372, 5733681, 5854300, 5972350, 6108396, 6210041, 6315311, 6386214, 6556454, 6689166, 6833081, 6966334, 7072988, 7178904, 7280933, 7436665, 7577330, 7715414, 7847532, 7973787, 8098293, 8236018, 8416451, 8552443, 8729804, 8855537, 9018053, 9163341, 9327731, 9509393, 9689712, 9878786, 10060911, 10224925, 10380136, 10558100, 10777104, 10956618, 11167650, 11356550, 11536202, 11710288, 11926929, 12137764, 12365469, 12590886, 12811740, 13005323, 13202960, 13431839, 13659498, 13915343, 14162835, 14392098, 14614511, 14822081, 15059888, 15345966, 15628024, 15858719, 16168257, 16379816, 16609335, 16868882, 17085666, 17420475, 17712830, 17990118, 18202259, 18415042, 18674281, 18944114, 19228449, 19508000, 19771870, 20001674, 20224894, 20493232, 20770927, 21057439, 21345517, 21589534, 21811490, 22011066, 22271790, 22546429, 22801070, 23088608, 23339500, 23552150, 23772621, 24023751, 24302697, 24591193, 24874662, 25134770, 25339645, 25601774, 25878271, 26143490, 26445557, 26764246, 27022914, 27253420, 27455318, 27701529, 27998245, 28299711, 28633177, 28895248, 29145649, 29407817, 29705502, 30006765, 30327714, 30674273, 30938978, 31211286, 31452644, 31760912, 32035144, 32400124, 32741512, 33017634, 33271017, 33528855, 33823727, 34146687, 34473575, 34807125, 35097573, 35379639, 35706194, 36055016, 36407740, 36772341, 37100902, 37422854, 37747633, 38038647, 38418385, 38760160, 39199544, 39605331, 39941690, 40317504, 40675340, 41085707, 41538423, 42055152, 42533835, 42970832, 43380982, 43830295, 44294846, 44835186, 45413967, 45956236, 46431885, 46867507, 47319352, 47920680, 48523195, 49122564, 49748179, 50229058, 50795103, 51189307, 51728002, 52519873, 53146429, 53745632, 54304906, 54821106, 55421439, 56016927, 56654985, 57343796, 57985912, 58546604, 59038363, 59611800, 60188972, 60807442, 61403665, 62054982, 62633939, 63113404, 63654104, 64299731, 64946171, 65662957, 66342289, 66962525, 67480714, 68053620, 68689714, 69377104, 70064896, 71541945, 72192624, 72725477, 73307202, 73938792, 74677952, 75420933, 76120979, 76719219]
;
var yMax = 100000000;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

  class EchartsAll extends React.Component{
    componentDidMount(){
      var myChart = echarts.init(document.getElementById('echartsall'));
      myChart.setOption({
        title: {
          text: '全球确诊人数',
          subtext: 'ConfirmCount'
      },
      xAxis: {
          data: dataAxis,
          axisLabel: {
              inside: true,
              textStyle: {
                  color: '#fff'
              }
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          z: 10
      },
      grid: {
        x: '2%', //相当于距离左边效果:padding-left
        // y: '30%',  //相当于距离上边效果:padding-top
        bottom: '3%',
        containLabel: true
    },
      yAxis: {
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              textStyle: {
                  color: '#999'
              }
          }
      },
      dataZoom: [
          {
              type: 'inside'
          }
      ],
      series: [
          { // For shadow
              type: 'bar',
              itemStyle: {
                  color: 'rgba(0,0,0,0.05)'
              },
              barGap: '-100%',
              barCategoryGap: '40%',
              data: dataShadow,
              animation: false
          },
          {
              type: 'bar',
              itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#83bff6'},
                          {offset: 0.5, color: '#188df0'},
                          {offset: 1, color: '#188df0'}
                      ]
                  )
              },
              emphasis: {
                  itemStyle: {
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              {offset: 0, color: '#2378f7'},
                              {offset: 0.7, color: '#2378f7'},
                              {offset: 1, color: '#83bff6'}
                          ]
                      )
                  }
              },
              data: data
          }
      ]
    });

    var zoomSize = 6;
    myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});
    }
    render(){
      return (
        <div id="echartsall" style={{ width: "100%", height: "60vh" }}></div>
      )
    }
  }
  


export {WorldCom,EchartsTest,EchartsBase,EchartsAll}