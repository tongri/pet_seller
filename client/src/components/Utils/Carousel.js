import React from 'react'

const Carousel = ({ imageSet }) => {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-mdb-ride="carousel"
        >
            <div className="carousel-indicators">
                {imageSet.map((_, index) => (
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide-to={index}
                        className={index === 0 && 'active'}
                        aria-current={index === 0}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            <div className="carousel-inner">
                {imageSet.map((image, index) => (
                    <div className={`carousel-item ${index === 0 && 'active'}`}>
                        <img src={image} alt="..." className="d-block w-100" />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
