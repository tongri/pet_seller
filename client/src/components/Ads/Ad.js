import { useSelector, useDispatch } from 'react-redux'
import { createError } from '_redux/actions/errors.action'

import { AUTHORIZATION } from 'utils/errors'

import CatImage from 'assets/images/cat.jpg'

import TagList from './TagList'

const Ad = ({ gender, city, date, name, favourite, ...tags }) => {
    const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
    const dsp = useDispatch()

    const clickHandler = (e) => {
        console.log('Clicked', isAuthenticated)
        // On heart click
        if (isAuthenticated) dsp()
        else dsp(createError(AUTHORIZATION))
    }
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
                                <i
                                    className={`${
                                        favourite ? 'fas' : 'far'
                                    } fa-heart fa-lg`}
                                    onClick={clickHandler}
                                ></i>
                            </div>
                        </div>

                        <TagList tags={tags} />

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
