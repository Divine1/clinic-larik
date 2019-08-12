import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import IndexPage from './../pages/index'
import TrailPage from './../pages/trail'
import TrailImagePage from './../pages/trailimage'


class AppRouter extends Component{
    render(){
        return(
            <BrowserRouter>
                <Route path="/" exact component={IndexPage} />
                <Route path="/trail" exact component={TrailPage} />
                <Route path="/trailimage" exact component={TrailImagePage} />

            </BrowserRouter>
        )
    }
}

export default AppRouter;