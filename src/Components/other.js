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



class Nav5Com extends React.Component{
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
              <th>人口</th>
            </tr>
          </thead>
          <tbody>
          {
              this.props.worldcitylist.map((item,index)=>{
                return (
                  <tr>
                    <td>{item.nation}</td>
                    <td>{item.confirm}</td>
                    <td>{item.population}</td>
                  </tr>
                )
              })
            }
            
          </tbody>
        </Table>
        )
      }
  }

  export default Nav5Com