import { useState, useEffect } from 'react'

const Scroller = () => {
    const [visible, setVisibility] = useState(false)

    useEffect(
        () => document.addEventListener('scroll', (e) => scrollHandler()),
        []
    )

    const scrollHandler = () => {
        if (window.scrollY >= window.innerHeight) setVisibility(true)
        else setVisibility(false)
    }

    const clickHandler = (e) => window.scrollTo(0, 0)

    return (
        visible && (
            <button
                className="btn btn-floating btn-outline-warning btn-to-top btn-lg"
                onClick={clickHandler}
            >
                <i className="fas fa-arrow-up fa-lg"></i>
            </button>
        )
    )
}

export default Scroller
