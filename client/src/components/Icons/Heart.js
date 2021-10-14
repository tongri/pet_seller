import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeFavourite, removeFavourite } from '_redux/actions/pets.action'

const Heart = ({
    id,
    user_id,
    className,
    clickable = true,
    isActive = false,
}) => {
    const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
    const [active, setState] = useState(isActive)
    const dsp = useDispatch()

    const clickHandler = () => {
        if (!clickable) return

        isActive ? dsp(removeFavourite(id)) : dsp(makeFavourite(id, user_id))
        setState((state) => !state)
    }

    return isAuthenticated ? (
        <i
            className={`${active ? 'fas' : 'far'} fa-heart ${className}`}
            onClick={clickHandler}
        ></i>
    ) : null
}

export default Heart
