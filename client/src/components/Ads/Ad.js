import { Link } from 'react-router-dom'
import moment from 'moment'

import Heart from 'components/Icons/Heart'

import Active from 'components/Buttons/Active'
import Inactive from 'components/Buttons/Inactive'

import TagList from './TagList'

const Ad = ({
    id,
    city,
    date,
    name,
    favourite,
    isOwner = false,
    isActive = true,
    ...tags
}) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2 col-sm-6">
                    <img
                        src={tags.images[0].image}
                        alt="Pet"
                        className="rounded w-100 h-100"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
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
                                    {!isOwner && <Heart id={id} />}
                                </div>
                            </div>

                            <TagList tags={tags} />
                        </div>

                        <div
                            className="row p-0 g-0 mt-5 mb-0 align-items-center"
                            style={{ fontSize: '0.85rem' }}
                        >
                            <div className="col text-muted gap-2">
                                <span className="md-3">
                                    <i className="fas fa-map-marker-alt"></i>{' '}
                                    {city}
                                </span>
                                <span className="ms-3">
                                    <i className="far fa-clock"></i>{' '}
                                    {moment(date).format('MMM Do YY')}
                                </span>
                            </div>
                            {isOwner && isActive ? (
                                <div className="col d-flex justify-content-end gap-2">
                                    <Active />
                                </div>
                            ) : isOwner && !isActive ? (
                                <div className="col d-flex justify-content-end gap-2">
                                    <Inactive />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ad
