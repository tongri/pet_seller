import { useState } from 'react'

const Select = ({
    name,
    title,
    options,
    disabled = false,
    onChange,
    dflt = 'All',
    startFromFirstOption = false,
    className = '',
}) => {
    const [val, setVal] = useState('none')

    const changeHandler = (e) => {
        setVal(e.target.value)
        onChange(e)
    }

    return (
        <div className={`form-outline ${className}`}>
            {title && (
                <label className="text-muted" htmlFor={name}>
                    {title}
                </label>
            )}
            <select
                name={name}
                id={name}
                className="form-select"
                value={val}
                onChange={changeHandler}
                disabled={disabled}
            >
                {!startFromFirstOption && <option value="none">{dflt}</option>}
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
