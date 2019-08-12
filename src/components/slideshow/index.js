import React,{Component} from 'react'

// const images = [
//     "/static/generatedImage/pic5-500w.jpg 500w,/static/generatedImage/pic5-960w.jpg 1000w,/static/generatedImage/pic5-1920w.jpg 1920w",
//     "/static/generatedImage/pic6-500w.jpg 500w,/static/generatedImage/pic6-960w.jpg 1000w,/static/generatedImage/pic6-1920w.jpg 1920w",
//     "/static/generatedImage/pic7-500w.jpg 500w,/static/generatedImage/pic7-960w.jpg 1000w,/static/generatedImage/pic7-1920w.jpg 1920w",
//     "/static/generatedImage/pic8-500w.jpg 500w,/static/generatedImage/pic8-960w.jpg 1000w,/static/generatedImage/pic8-1920w.jpg 1920w",
// ];
const images = [
    "/static/generatedImage/m3.jpeg 500w",
    "/static/generatedImage/m1.jpg 500w",
    "/static/generatedImage/m4.jpeg 500w",
    "/static/generatedImage/m2.jpeg 500w",
];


class SlideshowComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            imagelist : images
        }
        this.next=0;
        this.prev=0;
    }
    componentDidMount() {
        
        this.slider();
        
        setInterval(()=>{
            this.slider();
        },4000)
    }
    slider = ()=>{
        let imagedata = images.map((data,index)=>{
            
             if(this.next == index){
                return {data : data, class:"active next"}
            }
            else if(this.prev == index){
                return {data : data, class:"prev"}
            }
            else{
                return {data : data, class:""}
            }
        })
        this.prev=this.next
        this.next++;
        if(this.next>=images.length){
            this.next=0;
        }
        this.setState({
            imagelist:imagedata
        })
    }
    render(){
        return(
            <div className="slideshow">
                <div className="imgcontent">
                {
                    this.state.imagelist.map((data,index)=>{
                        return <div className="img" 
                                key={index}
                                className= {data.class!= "" ? "img "+data.class : "img"}
                                >
                                    <img srcSet={data.data} size="100%" />
                                </div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default SlideshowComponent;