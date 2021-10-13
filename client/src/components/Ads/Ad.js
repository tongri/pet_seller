import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { PAGE_AD, PAGE_AD_PERSONAL } from 'consts/routes'

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
    is_liked,
    isOwner = false,
    isActive = true,
    ...tags
}) => {
    const user_id = useSelector((state) => state.users.id)
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2 col-sm-6">
                    <div className="h-100">
                        <img
                            src={tags.files[0].image}
                            alt="Pet"
                            className="rounded w-100 h-100"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </div>
                </div>
                <div className="col-md-10 col-sm-6">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                        <div>
                            <div className="row g-0">
                                <div className="col">
                                    <Link
                                        to={
                                            isOwner
                                                ? PAGE_AD_PERSONAL(id)
                                                : PAGE_AD(id)
                                        }
                                    >
                                        <h5 className="card-title text-dark">
                                            {name}
                                        </h5>
                                    </Link>
                                </div>
                                <div className="col text-end">
                                    {!isOwner && (
                                        <Heart
                                            id={id}
                                            user_id={user_id}
                                            isActive={is_liked}
                                        />
                                    )}
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
                                    <Active id={id} />
                                </div>
                            ) : isOwner && !isActive ? (
                                <div className="col d-flex justify-content-end gap-2">
                                    <Inactive id={id} />
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
