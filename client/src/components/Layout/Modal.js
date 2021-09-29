import { useSelector, useDispatch } from 'react-redux'
import { clearError } from '_redux/actions/errors.action'

const Modal = () => {
    const msg = useSelector((state) => state.errors.message)
    const dsp = useDispatch()

    const clickHandler = (e) => dsp(clearError())

    return msg ? (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Warning!</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                            onClick={clickHandler}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>{msg}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={clickHandler}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}

export default Modal
