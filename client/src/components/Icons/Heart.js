import { useState } from 'react'
import { useSelector } from 'react-redux'

const Heart = ({ className, isActive = false }) => {
    const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
    const [active, setState] = useState(isActive)

    const clickHandler = () => setState((state) => !state)

    return isAuthenticated ? (
        <i
            className={`${active ? 'fas' : 'far'} fa-heart ${className}`}
            onClick={clickHandler}
        ></i>
    ) : null
}

export default Heart
