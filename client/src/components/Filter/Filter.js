import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filterPets } from '_redux/actions/pets.action'

import { LIST_OF_FILTERS, filters } from 'consts/filter'

import Search from './Search'
import Select from '../Forms/Select'
import useSelect from 'hooks/useSelect'

const Filter = () => {
    const [filter, setFilters] = useState(filters)
    const [cities, setCountry] = useSelect()
    const [chosenFilters, setChosenFilters] = useState({})

    const dsp = useDispatch()
    const changeHandler = (e) => {
        if (e.target.name === 'country') {
            setCountry(() => e.target.value)
        }

        setChosenFilters((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    // eslint-disable-next-line
    useEffect(() => dsp(filterPets(chosenFilters)), [chosenFilters])

    useEffect(
        () => setFilters((state) => ({ ...state, city: cities })),
        [cities]
    )

    return (
        <div>
            <Search />

            <div className="card mt-4">
                <div className="card-header">
                    <div className="card-title d-flex mb-0 align-items-center justify-content-between">
                        <h5 className="mb-0">Filter</h5>
                        <i className="fas fa-filter"></i>
                    </div>
                </div>
                <div className="card-body row gap-2">
                    {LIST_OF_FILTERS.map((filt, key) => (
                        <Select
                            key={key}
                            {...filt}
                            options={filter[filt.name]}
                            onChange={changeHandler}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter
