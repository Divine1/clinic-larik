import React,{Component} from 'react'

class Termin extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <>
                <div className="termin"
                onClick={()=>this.props.popup(true)}>TERMIN</div>
            </>
        )
    }
}

export default Termin;

