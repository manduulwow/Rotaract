import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = (props) => {   
    const handleOnDragStart = e => e.preventDefault()
    const responsive = {
        0: { items: 1 },
        1024: { items: 1 },
    }

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
                props.imageSource.map((src,key) => <img src={(typeof(src) !== 'object') ? src : window.location.origin+"/api/getImage?imageId="+src.id} onDragStart={handleOnDragStart} className="yours-custom-class" />) :
                [<img src={require('../../../img/club-info-img/5.jpg')} onDragStart={handleOnDragStart} className="yours-custom-class" />,
                 <img src={require('../../../img/club-info-img/4.jpg')} onDragStart={handleOnDragStart} className="yours-custom-class" />]
        } />
    )   
}

export default Carousel