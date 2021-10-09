import { useDispatch } from 'react-redux'
import { convertToInactive } from '_redux/actions/usersAds.action'
import { getConfigByToken } from 'utils/config'

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
            <button className={`btn btn-dark ${className}`}>Edit</button>
        </>
    )
}

export default Active
