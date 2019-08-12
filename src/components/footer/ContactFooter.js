import React,{Component} from 'react'

class ContactFooterComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <div className="contactfootercomponent ">
                    <div className="centercontent">
                        <div className="contact"
                    ref={(data) => { console.log("contact");this.props.layoutObject.contact = data; }}
                    >
                        <div className="head">Contact</div>
                        <div>
                            <div>Praxis Sarmad Larik</div>
                            <div>Auf der Warte 1</div>
                            <div>61184 Karben</div>
                        </div>
                        <div>
                            <div>Telefon: 06039 41414</div>
                            <div>Fax : 06039 41414</div>
                            <div>E-Mail: info@larik-praxis.de</div>
                        </div>
                    </div>
                        <div className="officehours"
                        ref={(data) => { console.log("officehours");this.props.layoutObject.schedule = data; }}>
                        <div className="head">Öffnungszeiten</div>
                        <div>
                            <div>Montag to Freitag:</div>
                            <div>08.30 – 13.00 und 14.00 - 17.00 Uhr</div>
                        </div>
                        <div 
                        style={{
                            fontWeight:"bold",cursor:"pointer",
                            fontSize:"1.3rem","textDecoration":"underline"
                        }}
                        onClick={()=>this.props.popup(true)}
                        >Online appointment request</div>
                    </div>
                        <div className="importantcontent">
                        <div className="head">Wichtige Inhalte</div>
                        <div>
                            <div>Kontaktdaten</div>
                            <div>Online-Terminanfrage</div>
                            <div>Downloads</div>
                            <div>Schulungsprogramme</div>
                            <div>Nützliche Links</div>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactFooterComponent;