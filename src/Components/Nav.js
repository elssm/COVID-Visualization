import React, {useState, useImperativeHandle, useEffect, useContext} from "react";
import '../Assets/css/nav.css'
import { NumContext } from "../App";

const navData = [
    {name: '疫情地图'},
    {name: '最新进展'},
    {name: '昆明疫情'},
    {name: '全球疫情'},
    {name: '其它信息'}
]

const NavWrap = props => <div className="nav">
    {
        navData.map((item, index) => {
            return <NavItem key={item.name} setTabIndex={props.setTabIndex} setCurTabIndex={props.setCurTabIndex} setStyleObj={props.setStyleObj} tabIndex={props.tabIndex} index={index} name={item.name} />
        })
    }
    <div className="bar" style={props.style}></div>
</div>


const NavItemWrap = props => <div className={props.className} onClick={() => props.itemClick(props.index)}>{props.name}</div>

function NavItem(props) {
    const {name, index, tabIndex} = props
    function onItemClick(index) {
        props.setTabIndex(index)
        props.setCurTabIndex(index)
        props.setStyleObj({ left: `${index * 100 + 20 + 'px'}`})
    }
    return (
        <NavItemWrap className={`nav-item ${index === tabIndex ? 'active': ''}`} name={name} itemClick={() => onItemClick(index)} />
    )
}

export default function Nav(props, ref) {
    const {curTabIndex ,setCurTabIndex } = useContext(NumContext);
    const [tabIndex, setTabIndex] = useState(0)
    const [styleObj, setStyleObj] = useState({left: '20px'})
    useImperativeHandle(ref, () => ({
        getTabIndex: () => tabIndex
        })
    )
    return (
        <NavWrap tabIndex={tabIndex} setTabIndex={setTabIndex} setStyleObj={setStyleObj} setCurTabIndex={setCurTabIndex} style={styleObj}/>
    )
}
