const Active = ({ className }) => {
    return (
        <>
            <button className={`btn btn-outline-dark ${className}`}>
                Deactivate
            </button>
            <button className={`btn btn-dark ${className}`}>Edit</button>
        </>
    )
}

export default Active
