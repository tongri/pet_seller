const Card = ({ title, children, className, bodyClassName }) => {
    return (
        <div className={`card ${className} `}>
            <div className="card-header">
                <h5 className="card-title m-0">{title}</h5>
            </div>
            <div className={`card-body ${bodyClassName}`}>{children}</div>
        </div>
    )
}

export default Card
