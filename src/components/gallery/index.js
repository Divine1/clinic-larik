import React,{Component} from 'react'
import Gallery from 'react-grid-gallery';

const imagePath="/static/GalleryFacilities/"
const IMAGESARRAY =
[
    {
        src: imagePath+"1.jpg",
        thumbnail: imagePath+"1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        tags: [{value: "MRI SCAN", title: "Nature | Flowers"}],
        caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: imagePath+"2.jpg",
        thumbnail: imagePath+"2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        tags: [{value: "NATURE OF BLOOD TEST", title: "Nature | Flowers"}],
        caption: "286H (gratisography.com)"
    },
    {
        src: imagePath+"3.jpg",
        thumbnail: imagePath+"3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
        tags: [{value: "CT SCAN", title: "Nature | Flowers"}],
        caption: "315H (gratisography.com)"
    },
    {
        src: imagePath+"4.jpg",
        thumbnail: imagePath+"4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        tags: [{value: "HOSPITAL", title: "Nature | Flowers"}],
        caption: "201H (gratisography.com)"
    },
    {
        src: imagePath+"5.jpg",
        thumbnail: imagePath+"5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        tags: [{value: "TOOTH ANALYSIS", title: "Nature | Flowers"}],
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    }
]

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "2rem"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "2rem",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};

class GalleryComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            images: IMAGESARRAY
        };
    }
    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }

    render(){
        var images =
                this.state.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                            {i.hasOwnProperty('tags') &&
                             this.setCustomTags(i)}
                        </div>);
                    return i;
                });

        return(
            <>
               <div className="gallerycomponent">
                    <div className="caption">GALLERY</div>
                    <div>
                        <div 
                            style={{
                            display: "block",
                            minHeight: "1px",
                            width: "100%",
                            overflow: "auto"}}>
                                <Gallery
                                    images={images}
                                    enableImageSelection={false}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default GalleryComponent;