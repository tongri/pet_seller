import { useDispatch } from 'react-redux'
import { convertToActive, deleteAd } from '_redux/actions/usersAds.action'

const InActive = ({ id, className }) => {
    const dsp = useDispatch()

    const stateHandler = () => dsp(convertToActive(id))

    const deleteHandler = () => dsp(deleteAd(id))

    console.log(id)
    return (
        <>
            <button
                className={`btn btn-outline-dark ${className}`}
                onClick={stateHandler}
            >
                Activate
            </button>
            <button
                className={`btn btn-dark ${className}`}
                onClick={deleteHandler}
            >
                Delete
            </button>
        </>
    )
}

export default InActive
