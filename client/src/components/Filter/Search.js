import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MDBInput } from 'mdb-react-ui-kit'
import { filterPetsByName } from '_redux/actions/pets.action'

const Search = () => {
    const [value, setValue] = useState('')
    const [firstRender, setFirstRender] = useState(true)

    const dsp = useDispatch()

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false)
            return
        }

        dsp(filterPetsByName(value))
    }, [value])

    return (
        <div className="card form-outline bg-white">
            <i className="fas fa-search trailing"></i>
            <MDBInput
                name="search"
                label="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Search
