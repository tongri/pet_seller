import { Link } from 'react-router-dom'
import CatImage from 'assets/images/cat.jpg'

import Heart from 'components/Icons/Heart'

import TagList from './TagList'

const Ad = ({ id, city, date, name, favourite, ...tags }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2 col-sm-6">
                    <img
                        src={CatImage}
                        alt="Pet"
                        className="img-thumbnail"
                        style={{ height: '100%' }}
                    />
                </div>
                <div className="col-md-10 col-sm-6">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                        <div>
                            <div className="row g-0">
                                <div className="col">
                                    <Link to={`/ad/${id}`}>
                                        <h5 className="card-title text-dark">
                                            {name}
                                        </h5>
                                    </Link>
                                </div>
                                <div className="col text-end">
                                    <Heart id={id} />
                                </div>
                            </div>

                            <TagList tags={tags} />
                        </div>

                        <div
                            className="row p-0 g-0 mt-5 mb-0"
                            style={{ fontSize: '0.85rem' }}
                        >
                            <div className="col text-custom-gray gap-2">
                                <span className="md-3">
                                    <i className="fas fa-map-marker-alt"></i>{' '}
                                    {city}
                                </span>
                                <span className="ms-3">
                                    <i className="far fa-clock"></i> {date}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ad
