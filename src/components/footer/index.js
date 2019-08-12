import React,{Component} from 'react'
import Socialicons from './../Socialicons'

class FooterComponent extends Component{
    render(){
        return(
            <>
                <div className="footer">
                    <div  className="centercontent">
                        <div className="copyright">
                            &copy; Larik Praxis 2019
                        </div>
                        <Socialicons />
                    </div>
                </div>
            </>
        )
    }
}

export default FooterComponent;