import React,{Component} from 'react'
import Layout from './../components/Layout'
import Slideshow from './../components/slideshow/index';
import Gallery from './../components/gallery';

class IndexPage extends Component{
    render(){
        return(
            <Layout>
                
                <Slideshow />
                <div className="centercontent">
                    <Gallery />
                </div>
                
            </Layout>
        )
    }
}

export default IndexPage;