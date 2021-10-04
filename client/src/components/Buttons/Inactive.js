const Inactive = ({ className }) => {
    return (
        <>
            <button className={`btn btn-outline-dark ${className}`}>
                Activate
            </button>
            <button className={`btn btn-dark ${className}`}>Delete</button>
        </>
    )
}

export default Inactive
