import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { convertToInactive } from '_redux/actions/usersAds.action'
import { PAGE_AD_EDIT } from 'consts/routes'

const Active = ({ id, className }) => {
    const dsp = useDispatch()

    const stateHandler = () => dsp(convertToInactive(id))

    return (
        <>
            <button
                className={`btn btn-outline-dark ${className}`}
                onClick={stateHandler}
            >
                Deactivate
            </button>
            <Link className={`btn btn-dark ${className}`} to={PAGE_AD_EDIT(id)}>
                Edit
            </Link>
        </>
    )
}

export default Active
