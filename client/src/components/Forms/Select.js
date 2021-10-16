import { memo, useState, useEffect } from 'react'

const Select = memo(
    ({
        name,
        title,
        value,
        options,
        disabled = false,
        onChange,
        dflt = 'All',
        startFromFirstOption = false,
        className = '',
    }) => {
        const [val, setVal] = useState('none')

        useEffect(() => {
            if (value) setVal(value)
        }, [value])

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
                    {!startFromFirstOption && (
                        <option value="None">{dflt}</option>
                    )}
                    {options.map((value, key) => (
                        <option key={key} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
)

export default Select
