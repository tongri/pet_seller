import { useSelector } from 'react-redux'
import { changeAdState } from 'api/ads.api'
import { getConfigByToken } from 'utils/config'

const InActive = ({ id, className }) => {
    const token = useSelector((state) => state.users.token)

    const stateHandler = () =>
        changeAdState({ id, isActive: true, config: getConfigByToken(token) })

    return (
        <>
            <button
                className={`btn btn-outline-dark ${className}`}
                onClick={stateHandler}
            >
                Activate
            </button>
            <button className={`btn btn-dark ${className}`}>Delete</button>
        </>
    )
}

export default InActive
