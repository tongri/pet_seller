import React from 'react'

const Search = () => {
    return (
        <div class="card form-outline bg-white">
            <i class="fas fa-search trailing"></i>
            <input
                type="text"
                id="form1"
                class="form-control form-icon-trailing"
            />
            <label class="form-label" for="form1">
                Search
            </label>
        </div>
    )
}

export default Search
