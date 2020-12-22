import React, {useEffect, useState, useRef, forwardRef, createContext, useContext} from 'react';
import Axios from './lib/axios'
import TotalCondition from "./Components/TotalCondition";
import Nav from './Components/Nav'
import styled, { keyframes } from "styled-components"
import HeaderImg from "./Assets/header.jpg"
import yunnanImg from "./Assets/yunnan.jpg"
import yunnanImg1 from "./Assets/yunnan1.png"
import jsonData from './Assets/world.json'
import worldcityData from './Assets/worldcity.json'
import kunmingData from './Assets/kunming.json'
import Tab1 from './Assets/tab1.jpeg'
import Tab2 from './Assets/tab2.jpeg'
import Tab3 from './Assets/tab3.jpeg'
import Hero from './Assets/hero.png'
import NewsCom from './Components/newscom'
import Nav5Com from './Components/other'
import EchartsPie from './Components/yunnan'

import Nav3Com from './Components/kunmingcom'
import {WorldCom,EchartsTest,EchartsBase,EchartsAll} from './Components/worldcom'
import './Assets/css/style.css'
import LoadingSvg from './Assets/loading.svg'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const ImgRotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`
const LoadingBox = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoadingSvgBox = styled.img`
  width: 100px;
  height: 100px;
  animation: 2s ${ImgRotate} infinite linear;
`
const Nav1 = forwardRef(Nav)
export const NumContext = createContext(0);
const ImgWrap = styled.img`
    width: 500px;
    height: 200px;
`
const styles = {
    slide: {
        // padding: 15,
        // height: 400,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        height: 200,
        background: '#FEA900',
    },
    slide2: {
        height: 200,
        background: '#B3DC4A',
    },
    slide3: {
        height: 200,
        background: '#6AC0FF',
    },
};

console.log(kunmingData)


let worldcityObj={
    "安道尔":{
        confirm:0,
        population:0,
    }
}

// console.log(worldcityData.data.FAutoConfirmMillionRankList)

worldcityData.data.FAutoConfirmMillionRankList.forEach((item,i) =>{
    worldcityObj[item.nation] = {
        confirm:item.confirm,
        population:item.population,
      }
});

// console.log(worldcityObj)

let worldcityList = []
  for (const key in worldcityObj) {
    worldcityObj[key].nation = key;
    worldcityList.push(worldcityObj[key])
  }
//   console.log(worldcityList)

//全球数据
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




let myChart
const dataList=[
    {name:"南海诸岛",confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '北京', confirmedCount:1, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '天津', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '上海',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '重庆',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '河北',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '河南',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '云南',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '辽宁',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '黑龙江',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '湖南', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '安徽',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '山东',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '新疆',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '江苏',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '浙江',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '江西',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '湖北',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '广西',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '甘肃',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '山西',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '内蒙古',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '陕西', confirmedCount:123, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '吉林', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '福建', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '贵州', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '广东',confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '青海', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '西藏', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '四川', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '宁夏', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '海南', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '台湾', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '香港', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
    {name: '澳门', confirmedCount:0, newAddNum: 0, cureNum: 0, deadNum: 0},
]

const notRealOverallArr = [
    {
        "provinceName": "南海诸岛",
        "confirmedCount": 0,
        "curedCount": 0,
        "deadCount": 0,
        "countryName": "中国"
      },
      {
        "provinceName": "香港",
        "confirmedCount": 7623,
        "curedCount": 6266,
        "deadCount": 120,
        "countryName": "中国"
      },
      {
        "provinceName": "台湾",
        "confirmedCount": 740,
        "curedCount": 606,
        "deadCount": 7,
        "countryName": "中国"
      },
      {
        "provinceName": "上海",
        "confirmedCount": 1415,
        "curedCount": 1319,
        "deadCount": 7,
        "countryName": "中国"
      },
      {
        "provinceName": "四川",
        "confirmedCount": 838,
        "curedCount": 794,
        "deadCount": 3,
        "countryName": "中国"
      },
      {
        "provinceName": "广东",
        "confirmedCount": 2018,
        "curedCount": 1973,
        "deadCount": 8,
        "countryName": "中国"
      },
      {
        "provinceName": "福建",
        "confirmedCount": 502,
        "curedCount": 469,
        "deadCount": 1,
        "countryName": "中国"
      },
      {
        "provinceName": "内蒙古",
        "confirmedCount": 342,
        "curedCount": 314,
        "deadCount": 1,
        "countryName": "中国"
      },
      {
        "provinceName": "陕西",
        "confirmedCount": 502,
        "curedCount": 482,
        "deadCount": 3,
        "countryName": "中国"
      },
      {
        "provinceName": "云南",
        "confirmedCount": 224,
        "curedCount": 210,
        "deadCount": 2,
        "countryName": "中国"
      },
      {
        "provinceName": "黑龙江",
        "confirmedCount": 960,
        "curedCount": 936,
        "deadCount": 13,
        "countryName": "中国"
      },
      {
        "provinceName": "山东",
        "confirmedCount": 858,
        "curedCount": 841,
        "deadCount": 7,
        "countryName": "中国"
      },
      {
        "provinceName": "江苏",
        "confirmedCount": 684,
        "curedCount": 675,
        "deadCount": 0,
        "countryName": "中国"
      },
      {
        "provinceName": "河南",
        "confirmedCount": 1295,
        "curedCount": 1266,
        "deadCount": 22,
        "countryName": "中国"
      },
      {
        "provinceName": "北京",
        "confirmedCount": 956,
        "curedCount": 940,
        "deadCount": 9,
        "countryName": "中国"
      },
      {
        "provinceName": "浙江",
        "confirmedCount": 1297,
        "curedCount": 1290,
        "deadCount": 1,
        "countryName": "中国"
      },
      {
        "provinceName": "天津",
        "confirmedCount": 302,
        "curedCount": 295,
        "deadCount": 3,
        "countryName": "中国"
      },
      {
        "provinceName": "山西",
        "confirmedCount": 222,
        "curedCount": 220,
        "deadCount": 0,
        "countryName": "中国"
      },
      {
        "provinceName": "湖北",
        "confirmedCount": 68149,
        "curedCount": 63636,
        "deadCount": 4512,
        "countryName": "中国"
      },
      {
        "provinceName": "重庆",
        "confirmedCount": 590,
        "curedCount": 583,
        "deadCount": 6,
        "countryName": "中国"
      },
      {
        "provinceName": "广西",
        "confirmedCount": 264,
        "curedCount": 261,
        "deadCount": 2,
        "countryName": "中国"
      },
      {
        "provinceName": "湖南",
        "confirmedCount": 1020,
        "curedCount": 1016,
        "deadCount": 4,
        "countryName": "中国"
      },
      {
        "provinceName": "安徽",
        "confirmedCount": 992,
        "curedCount": 986,
        "deadCount": 6,
        "countryName": "中国"
      },
      {
        "provinceName": "新疆",
        "confirmedCount": 980,
        "curedCount": 977,
        "deadCount": 3,
        "countryName": "中国"
      },
      {
        "provinceName": "江西",
        "confirmedCount": 935,
        "curedCount": 934,
        "deadCount": 1,
        "countryName": "中国"
      },
      {
        "provinceName": "河北",
        "confirmedCount": 373,
        "curedCount": 367,
        "deadCount": 6,
        "countryName": "中国"
      },
      {
        "provinceName": "辽宁",
        "confirmedCount": 289,
        "curedCount": 287,
        "deadCount": 2,
        "countryName": "中国"
      },
      {
        "provinceName": "甘肃",
        "confirmedCount": 182,
        "curedCount": 180,
        "deadCount": 2,
        "countryName": "中国"
      },
      {
        "provinceName": "海南",
        "confirmedCount": 171,
        "curedCount": 165,
        "deadCount": 6,
        "countryName": "中国"
      },
      {
        "provinceName": "吉林",
        "confirmedCount": 157,
        "curedCount": 155,
        "deadCount": 2,
        "countryName": "中国"
      },
      {
        "provinceName": "贵州",
        "confirmedCount": 147,
        "curedCount": 145,
        "deadCount": 2,
        "countryName": "中国"
      },
      {
        "provinceName": "宁夏",
        "confirmedCount": 75,
        "curedCount": 75,
        "deadCount": 0,
        "countryName": "中国"
      },
      {
        "provinceName": "澳门",
        "confirmedCount": 46,
        "curedCount": 46,
        "deadCount": 0,
        "countryName": "中国"
      },
      {
        "provinceName": "青海",
        "confirmedCount": 18,
        "curedCount": 18,
        "deadCount": 0,
        "countryName": "中国"
      },
      {
        "provinceName": "西藏",
        "confirmedCount": 1,
        "curedCount": 1,
        "deadCount": 0,
        "countryName": "中国"
      }
]

const newDataList = [].concat(dataList)
function Header() {
    return (
        <ImgWrap src={HeaderImg} />
    )
}


function Loading() {
    return (
        <LoadingBox>
            <div>Loading...</div>
            < LoadingSvgBox src={LoadingSvg} />
        </LoadingBox>
    )
}

function DetailCom() {
    const [ overallArr, setOverallArr ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        Axios.$get('http://localhost:8080/api/province') //https://lab.isaaclin.cn/nCoV/api/area
            .then(res => {
                // console.log('res', res.data.result)
                console.log('res', res.data.results)
                // const { results } = res.data
                // const results = res.data
                const {data} = res
                console.log(data)
                dataList.forEach(item => {
                    const itemMatch = data.find(it => it.provinceName === item.name)
                    if (itemMatch) {
                        item.value = itemMatch.confirmedCount
                        item.confirmedCount = itemMatch.confirmedCount
                        item.newAddNum = 0
                        item.cureNum = itemMatch.curedCount
                        item.deadNum = itemMatch.deadCount
                    }
                    
                })
                myChart.setOption({
                    series : [
                        {
                            name: '确诊人数',
                            type: 'map',
                            geoIndex: 0,
                            data: dataList
                        }
                    ]
                })
                setLoading(false)
                // setOverallArr(res.data.results)
                setOverallArr(res.data)
            }).catch(err => {
                // console.log('err', err)
                dataList.forEach(item => {
                        item.value = 1
                        item.confirmedCount = item.confirmedCount
                        item.newAddNum = item.newAddNum
                        item.cureNum = item.cureNum
                        item.deadNum = item.deadNum
                })
                myChart.setOption({
                    series : [
                        {
                            name: '确诊人数',
                            type: 'map',
                            geoIndex: 0,
                            data: dataList
                        }
                    ]
                })
            // console.log('notreal', notRealOverallArr)
                setOverallArr(notRealOverallArr)
                setLoading(false)
        })
    }, [])
    return (
      <div style={{ width: '500px'}} >
          {
              loading ? <Loading />
                : <div>
                    <hr></hr>
                    <h2>中国病例:</h2>
                    <ul>
                        <li>
                            <span>地区</span>
                            <span>确诊</span>
                            <span>治愈</span>
                            <span>死亡</span>
                        </li>
                    </ul>
                    <div style={{ height: '400px', overflow: 'scroll'}}>
                        {
                            overallArr.map(item => {
                                return (
                                    item.countryName ==='中国'
                                        ? <li key={item.provinceName}>
                                            <span>{item.provinceName}</span>
                                            <span>{item.confirmedCount}</span>
                                            <span>{item.curedCount}</span>
                                            <span>{item.deadCount}</span>
                                        </li>
                                        : null
                                )
                            })
                        }
                    </div>

                  </div>
          }
      </div>
    )
}

const  option = {
    tooltip: {
        formatter:function(params,ticket, callback){
            return params.seriesName + '<br />' + params.name + '：' + params.data.confirmedCount
        }//数据格式化
    },
    visualMap: {
        min: 0,
        max: 1500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],//取值范围的文字
        inRange: {
            color: ['#F5DEB3', '#800000']//取值范围的颜色
        },
        show:true//图注
    },
    geo: {
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom:1.23,//视角缩放比例
        label: {
            normal: {
                show: true,
                fontSize:'10',
                color: 'rgba(0,0,0,0.7)'
            }
        },
        itemStyle: {
            normal:{
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis:{
                areaColor: '#F3B329',//鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series : [
        {
            name: '确诊人数',
            type: 'map',
            geoIndex: 0,
            data: dataList
        }
    ]
};

function App() {
    // console.log('render APP')
    const ref = useRef({})
    const [searchVal, setSearchVal] = useState('')
    const [confirmNum, setConfirmNum] = useState('')
    const [newAddNum, setNewAddNum] = useState('')
    const [cureNum, setCureNum] = useState('')
    const [deadNum, setDeadNum] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [hasFound, setHasFound] = useState(false)
    const [curTabIndex, setCurTabIndex] = useState(0)
    const [contentStyleObj, setContentStyleObj] = useState({})

    useEffect(() => {
       myChart = window.echarts.init(document.getElementById('map'))
       myChart.setOption(option)
    }, [])
    useEffect(() => {
        // console.log('ref.current.getTabIndex() ===>', ref.current.getTabIndex())
        setCurTabIndex(ref.current.getTabIndex())
        setContentStyleObj({display: 'flex', background: 'gray', transform: `translate(-${curTabIndex * 500}px, 0)`})
    }, [curTabIndex])
    function reset() {
        setConfirmNum('')
        setNewAddNum('')
        setCureNum('')
        setDeadNum('')
    }
    function handleChange(e) {
        console.log('ref', ref.current.getTabIndex())
        setShowSearch(false)
        reset()
        setSearchVal(e.target.value)
    }
    function handleKeyDown(e) {
        if (e.keyCode === 13) {
            setShowSearch(true)
            for (let i = 0; i < dataList.length; i++) {
                if (dataList[i].name == e.target.value) {
                    setHasFound(true)
                    setConfirmNum(dataList[i].confirmedCount)
                    setNewAddNum(dataList[i].newAddNum)
                    setCureNum(dataList[i].cureNum)
                    setDeadNum(dataList[i].deadNum)
                    return
                }
            }
            setHasFound(false)
        }
    }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Header />
        <AutoPlaySwipeableViews style={{width:'500px', height:'200px', overflow: 'hidden'}} autoplay={true} interval={2000}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <img src={Tab1} style={{ objectFit: 'fill', width: '500px', height: '200px'}}/>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <img src={Tab2} style={{ objectFit: 'fill', width: '500px', height: '200px'}}/>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <img src={Tab3} style={{ objectFit: 'fill', width: '500px', height: '200px'}}/>
            </div>
        </AutoPlaySwipeableViews>
        <NumContext.Provider value = {{ curTabIndex, setCurTabIndex}}>
            <Nav1 ref={ref}/>
        </NumContext.Provider>
        <div className="contentWrap">
            <div className="content" style={contentStyleObj}>
                <div className="contentItem">
                    <TotalCondition />
                    <div className="map">
                        <h2>地区分布图</h2>
                        <div id="map" style={{ width: '500px', height: '400px'}}></div>
                    </div>
                    <div>
                        <div style={{ width: '500px'}}>
                            <span>省份搜索：</span>
                            <input placeholder="enter键搜索" value={searchVal} onKeyDown={handleKeyDown} onChange={e => handleChange(e)} />
                        </div>

                        {
                            showSearch && <div>
                                <h2>查询结果</h2>
                                {
                                    hasFound
                                        ?  <div>
                                            <div>确诊人数：{confirmNum}</div>
                                            {/* <div>疑似人数：{newAddNum}</div> */}
                                            <div>治愈人数：{cureNum}</div>
                                            <div>死亡人数：{deadNum}</div>
                                        </div>
                                        : <div>省份数据错误</div>
                                }
                            </div>
                        }
                    </div>
                    <DetailCom />
                </div>
                <div className="contentItem">
                    {/* <Nav2Com></Nav2Com> */}
                    <NewsCom />
                </div>
                <div className="contentItem">
                  {/* <h2>asdasd</h2> */}
                  <div className="banner2">
                    <img alt="yunnan" src={yunnanImg} /> 
                  </div>
                  <hr></hr>
                  <div style={{width:500+'px',height:500+'px'}}>
                  <EchartsPie></EchartsPie>
                  </div>
                  <hr></hr>
                  <h3 style={{textAlign:"center"}}>云南省疫情时间轮播图</h3>
                  <div className="banner3">
                    <img alt='yunnan1' src={yunnanImg1} />
                  </div>
                  <hr></hr>
                  
                    <h2 style={{textAlign:"center"}}>云南省疫情时间线</h2>
                    <Nav3Com kunminglist={kunmingData}></Nav3Com> 
                </div>

                <div className="contentItem">
                  <hr></hr>
                <div style={{width:500+'px',height:500+'px'}}>
                        <EchartsTest />
                    </div>
                  <hr></hr>
                <h3 style={{textAlign:"center"}}>七大洲疫情数据</h3>
                    <div>
                    <WorldCom list={countryListSort}/>
                    </div>
                    
                    <hr></hr>
                    <div style={{width:500+'px',height:500+'px'}}>
                    <EchartsAll />
                    </div>
                        <hr></hr>
                    <div style={{width:500+'px',height:500+'px'}}>
                      <EchartsBase></EchartsBase>
                    </div>
                </div>


                <div className="contentItem">
                  <hr></hr>
                    <div className='banner1'>
                        <h3 style={{textAlign:"center"}}>我们对抗疫英雄的籍贯进行了采集</h3>
                        <h3 style={{textAlign:"center"}}>于是有了下面这张照片</h3>
                    <img alt="hero" src={Hero} />
                    </div>
                    <h2 style={{textAlign:"center"}}>世界各地确诊人数</h2>
                    <hr></hr>
                    <Nav5Com worldcitylist={worldcityList} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

