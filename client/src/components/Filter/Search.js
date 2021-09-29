import React from 'react'

const Search = () => {
    return (
        <div className="card form-outline bg-white">
            <i className="fas fa-search trailing"></i>
            <input
                type="text"
                id="form1"
                className="form-control form-icon-trailing"
            />
            <label className="form-label" htmlFor="form1">
                Search
            </label>
        </div>
    )
}

export default Search
