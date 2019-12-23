import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = (props) => {   
    const handleOnDragStart = e => e.preventDefault()
    const responsive = {
        0: { items: 1 },
        1024: { items: 1 },
    }

    let list = []
    // if(props.imageSource && props.imageSource.length > 0)
    //     list = props.imageSource.map((src,key) => <img src={src} onDragStart={handleOnDragStart} className="yours-custom-class" />)

    if(props.imageSource && props.imageSource.length > 0) {
        console.log("WHY IS THIS NOT WORKING ")
        console.log(props.imageSource)
        console.log(props.imageSource.length)
        for(let i = 0; i < props.imageSource.length; i++) {
            console.log("Working")
            list.push(<img src={props.imageSource[i]} onDragStart={handleOnDragStart} className="yours-custom-class" />)
        }
    }
    console.log(list)
    return(
        <AliceCarousel mouseDragEnabled buttonsDisabled={true}
        responsive={responsive}
        autoPlayInterval={5000}
        autoPlayDirection="rtl"
        autoPlay={true}
        duration={500}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        items={
            (props.imageSource && props.imageSource.length > 0) ?
                props.imageSource.map((src,key) => <img src={src} onDragStart={handleOnDragStart} className="yours-custom-class" />) :
                [<img src={require('../../../img/club-info-img/5.jpg')} onDragStart={handleOnDragStart} className="yours-custom-class" />,
                 <img src={require('../../../img/club-info-img/4.jpg')} onDragStart={handleOnDragStart} className="yours-custom-class" />]
        } />
    )   
}

export default Carousel