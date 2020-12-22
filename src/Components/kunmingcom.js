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



class Nav3Com extends React.Component{
    constructor(props){
      super(props)
    }
  
      render(){
        //   console.log(this.props.list)
        return (
          <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>日期</th>
              <th>确诊</th>
              <th>治愈</th>
              <th>死亡</th>
              <th>新增确诊</th>
            </tr>
          </thead>
          <tbody>
          {
              this.props.kunminglist.map((item,index)=>{
                return (
                  <tr>
                    <td>{item.日期}</td>
                    <td>{item.确诊}</td>
                    <td>{item.治愈}</td>
                    <td>{item.死亡}</td>
                    <td>{item.新增确诊}</td>
                  </tr>
                )
              })
            }
            
          </tbody>
        </Table>
        )
      }
  }

export default Nav3Com