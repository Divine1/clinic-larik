import React,{Component} from 'react'
import { IoIosMenu,IoIosArrowBack,IoMdClose } from "react-icons/io";
import Larik from './../Larik'
import Timing from './../Timing'
import Termin from './../Termin'

const labels = [
    {label:"Home",children:[]},
    {label:"News",children:[
        {label:"General"},
        {label:"Events"}
    ]},
    {label:"Practice",children:[
        {label:"About us"},
        {label:"Team"},
        {label:"Quality"},
        {label:"Career"}
    ]},
    {label:"Diabetology",children:[
        {label:"General"},
        {label:"Foot Clinic"},
        {label:"Therapy"},
        {label:"Services"},
        {label:"Studies"}
    ]},
    {label:"Workshops",children:[
        {label:"Workshops"},
        {label:"Workshop Programs"}
    ]},
    {label:"Service",children:[
        {label:"Service & Downloads"},
        {label:"Useful Links"}
    ]},
    {label:"Contact",children:[
        {label:"Contact Data"},
        {label:"Appointment Request"},
        {label:"Prescription Request"}
    ]}
]

class HeaderComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            labels : labels,
            isactive :false
        }
    }
    showchild=(selectedlabel)=>{
        console.log("in showchild ",selectedlabel)
        let parentclasslocal = "";
        let updatedLabels = labels.map((data,index)=>{
            console.log("data.label ",data.label)
            if(selectedlabel.toLowerCase() === data.label.toLowerCase()){
                parentclasslocal="parentactive"
                return {...data,className:"active"}
            }
            return data
        })
        console.log("parentclasslocal ",parentclasslocal)
        console.log("updatedLabels ",updatedLabels)
        this.setState({
            labels : updatedLabels,
            parentclass :parentclasslocal
        })
    }
    closeChildren=()=>{
        this.setState({
            labels : labels
        })
    }
    toggleMenu=()=>{
        this.setState({
            labels : labels,
            isactive : !this.state.isactive
        })
    }
    render(){
        return(
            <>
                <div className="menuheader">
                    <div className="header-large centercontent">
                        <ul className="menudata">
                        {
                            labels.map((data1,index1)=>(
                                <li key={index1}>
                                    <a href="#">{data1.label}</a>
                                    {
                                        data1.children.length>0 ? 
                                            <ul>
                                                {
                                                    data1.children.map((data2,index2)=>(
                                                        <li key={index2}><span>{data2.label}</span></li>
                                                    ))
                                                }
                                            </ul>
                                        :
                                            null
                                    }
                                </li>
                            ))
                        }
                        </ul>
                        <Termin popup={this.props.popup} />
                    </div>
                    <div className="header-small">
                        <div className="menudata">
                            
                            <div className="details">
                                <Larik />
                                <Timing layoutObject={this.props.layoutObject}  />
                            </div>
                            <Termin popup={this.props.popup} />
                            <a className="responsiveicon" href="#"
                            onClick={this.toggleMenu}>
                                {this.state.isactive ? <IoMdClose /> : <IoIosMenu />}
                            </a>
                            <div className="clearfix"></div>
                        </div>
                        <div className={this.state.isactive ? "isactive ulcontainer" : "ulcontainer"}>
                            <ul>
                            {
                                this.state.labels.map((data1,index1)=>(
                                    <li key={index1}>
                                        <a href="#" 
                                        className={data1.children.length>0 ? "childarrow" : ""}
                                        onClick={()=>this.showchild(data1.label)}>{data1.label}</a>
                                        {
                                            data1.children.length>0 ? 
                                                <ul className={data1.className ==="active" ? "active" :""}>
                                                    <li><a className="backbutton" onClick={this.closeChildren}
                                                    ><IoIosArrowBack /> back</a></li>
                                                    {
                                                        data1.children.map((data2,index2)=>(
                                                            <li key={index2}><a>{data2.label}</a></li>
                                                        ))
                                                    }
                                                </ul>
                                            :
                                                null
                                        }
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default HeaderComponent;