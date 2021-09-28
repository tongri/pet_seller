const Select = ({ name, title, options }) => {
    return (
        <div className="form-outline">
            <label htmlFor={name}>{title}</label>
            <select name={name} id={name} className="form-select">
                <option value="-1">All</option>
                {options.map((opt, key) => (
                    <option key={key} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
