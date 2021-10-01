import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterPets } from '_redux/actions/pets.action'

const Select = ({ name, title, options }) => {
    const [val, setVal] = useState('none')
    const dsp = useDispatch()

    const changeHandler = (e) => {
        setVal(e.target.value)

        dsp(filterPets(val))
    }
    return (
        <div className="form-outline">
            <label htmlFor={name}>{title}</label>
            <select
                name={name}
                id={name}
                className="form-select"
                value={val}
                onChange={changeHandler}
            >
                <option value="none">All</option>
                {options
                    .filter(
                        (value, index, self) => self.indexOf(value) === index
                    )
                    .map((opt, key) => (
                        <option key={key} value={opt}>
                            {opt}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export default Select
