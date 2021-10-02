const Card = ({ title, children, className }) => {
    return (
        <div className={`card ${className} `}>
            <div className="card-header">
                <h5 className="card-title m-0">{title}*</h5>
            </div>
            <div className="card-body">{children}</div>
        </div>
    )
}

export default Card
