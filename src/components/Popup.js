import React,{Component} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

let timeRange = ["Zeitfenster","08:30","09:30","10:30","11:30","12:30","14:00","15:00","16:00","17:00"]
let city=["Stadt","Berlin","Abbb","Abbb","Abbb","Abbb"]
let hessen=["Hessen","Abbb","Abbb","Abbb","Abbb"]
let country=["Land","Deutschland","Abbb","Abbb","Abbb","Abbb"]

class Popup extends Component{
    constructor(props){
        super(props);
        this.state = {
          startDate: new Date()
        };
    }
    handleChange= (date)=>{
        console.log("date ",date)
        this.setState({
          startDate: date
        });
    }
    submitAppointment = ()=>{
        console.log("in submitAppointment")
        this.props.popup(false)
    }
    render(){
        return(
            <>
                <div className={this.props.togglepopup ? "popup" : "popup toggle"}>
                    <div className="content">
                        
                        <div className="popupcontent">
                        <div className="header">
                        Geplanter Termin
                        </div>
                        <div className="row">
                            <div className="left two">
                            <div><label>Datum</label></div>
                            <div>
                                <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                dateFormat="MMMM d, yyyy"
                                /> 
                            </div>
                            </div>            
                            <div className="right two">
                            <div><label>Zeit</label></div>
                            <div>
                                <select>
                                {
                                    timeRange.map((data,index)=>(
                                    <option key={index}>{data}</option>
                                    ))
                                }
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left"><input type="text" placeholder="Nachname" /></div>
                            <div className="right"><input type="text" placeholder="Vorname" /></div>
                        </div>
                        <div className="row">
                            <div className="left"><input type="text" placeholder="Rufnummer" /></div>
                            <div className="right">
                                <select>
                                {
                                    city.map((data,index)=>(
                                    <option key={index}>{data}</option>
                                    ))
                                }
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <select>
                                {
                                    hessen.map((data,index)=>(
                                    <option key={index}>{data}</option>
                                    ))
                                }
                                </select>
                            </div>
                            <div className="right">
                                <select>
                                {
                                    country.map((data,index)=>(
                                    <option key={index}>{data}</option>
                                    ))
                                }
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="fullwidth">
                            <input type="text" placeholder="Strafe, Hausnummer" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="fullwidth">
                                <textarea
                                    placeholder="Anfrage/ Grund fur die Ernennung"
                                ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="button">
                            <button onClick={()=> this.submitAppointment()}>
                                Termin
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Popup;