import React,{Component} from 'react'
import Header from './header'
import Footer from './footer'
import ContactShort from './contact/ContactShort'
import ContactFooter from './footer/ContactFooter'
import GoogleMap from './location'
import Popup from './Popup';

class LayoutComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            togglepopup : false
        }
    }
    popup=(data)=>{
        console.log("in popup function data ",data)
        this.setState({
            togglepopup : data
        })
    }
    render(){
        return(
            <>
                <header>
                    <Popup togglepopup={this.state.togglepopup} popup = {this.popup} />
                    <ContactShort layoutObject={this}/>
                    <Header layoutObject={this} popup = {this.popup} />
                </header>
                <main>
                    <div className="allocatespace"></div>
                    {this.props.children}
                    
                </main>
                <footer>
                    <div style={{clear:"both"}}></div>
                    <GoogleMap layoutObject={this}/>
                    <ContactFooter layoutObject={this} popup = {this.popup} />
                    <Footer />
                </footer>
            </>
        )
    }
}

export default LayoutComponent;