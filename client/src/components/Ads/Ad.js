import CatImage from 'assets/images/cat.jpg'

import TagList from './TagList'

const Ad = ({ gender, city, date, name, ...tags }) => {
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
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col">
                                <h5 className="card-title">{name}</h5>
                            </div>
                            <div className="col text-end">
                                <i className="far fa-heart fa-lg"></i>
                            </div>
                        </div>

                        <TagList tags={tags} />

                        <div
                            className="row p-0 g-0 mt-5 mb-0"
                            style={{ fontSize: '0.85rem' }}
                        >
                            <div className="col text-custom-gray gap-2">
                                <span className="md-3">
                                    <i class="fas fa-map-marker-alt"></i> {city}
                                </span>
                                <span className="ms-3">
                                    <i class="far fa-clock"></i> {date}
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
