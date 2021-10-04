import { MDBInput } from 'mdb-react-ui-kit'

const Search = () => {
    return (
        <div className="card form-outline bg-white">
            <i className="fas fa-search trailing"></i>
            <MDBInput name="search" label="Search" />
        </div>
    )
}

export default Search
