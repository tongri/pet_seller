import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit'

const Carousel = ({ imageSet }) => {
    return (
        <MDBCarousel showIndicators showControls>
            <MDBCarouselInner>
                {imageSet.map((image, index) => (
                    <MDBCarouselItem key={index} itemId={index}>
                        <MDBCarouselElement src={image} />
                    </MDBCarouselItem>
                ))}
            </MDBCarouselInner>
        </MDBCarousel>
    )
}

export default Carousel
