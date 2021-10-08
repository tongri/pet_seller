import { useSelector } from 'react-redux'
import { changeAdState } from 'api/ads.api'
import { getConfigByToken } from 'utils/config'

const Active = ({ id, className }) => {
    const token = useSelector((state) => state.users.token)

    const stateHandler = () =>
        changeAdState({ id, isActive: false, config: getConfigByToken(token) })

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
