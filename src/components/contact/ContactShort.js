
import React,{Component} from 'react'
import { GiSnakeEgg } from "react-icons/gi";


import Timing from './../Timing'
import Larik from './../Larik'
import Direction from './../Direction'
import Socialicons from './../Socialicons'
class ContactShortComponent extends Component{
    constructor(props){
        super(props)
       
    }
    componentDidMount(){
        
    }
    
    render(){
        return(
            <>
                <div className="contactshort">
                    <div className="holder1">
                        <div className="row centercontent">
                            <div className="left">
                                <Direction layoutObject={this.props.layoutObject} />
                            </div>
                            <div className="right">
                                <Socialicons />
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="holder2">
                        <div className="row centercontent">
                            <div className="content">
                                <div className="left">
                                    <Larik />
                                </div>
                                <div className="right">
                                    <div>
                                        <div className="icon snake" 
                                         style={{color:"#e27091",fontWeight:"bold"}}><GiSnakeEgg /></div>
                                        <div>
                                            <div>Praxis fur Allgemeinmedizin</div>
                                            <div>Diabetologische Schwerpunktpraxis</div>
                                        </div>
                                    </div>
                                    <Timing layoutObject={this.props.layoutObject} />
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactShortComponent;