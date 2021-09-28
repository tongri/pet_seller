const Ad = () => {
    return (
        <div className="card d-flex flex-row">
            {/* <div className="card-header">Image...</div> */}
            <div className="card-image">Image...</div>
            <div className="card-body">
                <div className="d-flex flex-column">
                    <div className="card-main-info d-flex justify-content-space-between align-items-center">
                        <div className="card-title">Onix</div>
                        <i className="far fa-heart fa-lg"></i>
                    </div>
                    <div className="card-categories d-flex">
                        <div className="card-title">Onix</div>
                        <i className="far fa-heart fa-lg"></i>
                    </div>
                    <div className="card-secondary-info d-flex ">
                        <div className="card-title">Onix</div>
                        <i className="far fa-heart fa-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ad
