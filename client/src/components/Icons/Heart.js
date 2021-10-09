import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeFavourite } from '_redux/actions/pets.action'

const Heart = ({ id, className, clickable = true, isActive = false }) => {
    const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
    const [active, setState] = useState(isActive)
    const dsp = useDispatch()

    const clickHandler = () => {
        if (!clickable) return
        setState((state) => !state)
        dsp(makeFavourite(id))
    }

    return isAuthenticated ? (
        <i
            className={`${active ? 'fas' : 'far'} fa-heart ${className}`}
            onClick={clickHandler}
        ></i>
    ) : null
}

export default Heart
