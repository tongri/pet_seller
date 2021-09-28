import CatImage from 'assets/images/cat.jpg'

import TagList from './TagList'

const Ad = () => {
    const tags = {
        type: 'cat',
        sex: 'female',
        birth_date: '22.11.2020',
        size: '40-50cm',
    }

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-1">
                    <img src={CatImage} alt="..." className="img-thumbnail" />
                </div>
                <div className="col-md-11">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col">
                                <h5 className="card-title">Onix</h5>
                            </div>
                            <div className="col text-end">
                                <i className="far fa-heart fa-lg"></i>
                            </div>
                        </div>

                        <TagList tags={tags} />

                        <div
                            className="row p-0 g-0 mt-5"
                            style={{ fontSize: '0.85rem' }}
                        >
                            <div className="col text-custom-gray gap-2">
                                <span className="md-3">
                                    <i class="fas fa-map-marker-alt"></i>{' '}
                                    Wroclaw
                                </span>
                                <span className="ms-3">
                                    <i class="far fa-clock"></i> 10 August
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
