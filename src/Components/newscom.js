import React from "react"
import axios from '../lib/axios'
// import bannerImg from '../Assets/news.jpg'
import bannerImg from '../Assets/yiqing.jpeg'
class NewsCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            datalist:[]
        }
    }
    
    async componentWillMount(){
        let res = await axios.get("http://localhost:8080/api/news")
        // console.log(res.data)
        let data = JSON.parse(res.data.data[0].content)
        // console.log(data.sub_raw_datas)
        this.setState({
            datalist:data.sub_raw_datas
        })
    }
    render(){
        // console.log('asdas')
        return (
            <div className="contentItem new">
                <div className="banner">
                    <img alt="banner" src={bannerImg} />
                    <h1>疫情追踪</h1>
                </div>
                <div className="newContent">
                    <div className="line"></div>
                    <div className="newList">
                        {
                            this.state.datalist.map((item,index)=>{
                                return (
                                    <div className="newsListItem" key={index}>
                                        <div className="time">{item.raw_data.showtime_string}</div>
                                        <div className="desc">
                                            {item.raw_data.desc}
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default NewsCom