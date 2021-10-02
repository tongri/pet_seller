const Photo = ({ main = false, value, ...rest }) => {
    return (
        <label
            className={`card text-muted text-center ${main && 'bg-warning'}`}
            style={{
                width: '100px',
                height: '100px',
                background: !main ? '#F7F7FA' : '',
                cursor: 'Pointer',
            }}
            htmlFor={rest.id}
        >
            <div
                className={` ${
                    main && 'text-light'
                } card-body align-items-center d-flex fw-bold`}
            >
                Main Photo
            </div>
            {/* I HAVE NO FUCKING IDEA HOW THE HELL THIS IS WORKING... */}
            <input
                type="file"
                style={{ display: 'none' }}
                value={value.filename}
                {...rest}
            />
        </label>
    )
}

export default Photo
