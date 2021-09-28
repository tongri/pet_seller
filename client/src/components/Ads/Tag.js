const Tag = ({ iconClass, tagTitle }) => {
    return (
        <span
            className="badge text-custom-gray"
            style={{ background: '#F7F7FA' }}
        >
            <i className={iconClass}></i> {tagTitle}
        </span>
    )
}

export default Tag
