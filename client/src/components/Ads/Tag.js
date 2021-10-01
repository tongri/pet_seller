const Tag = ({ iconClass, tagTitle }) => {
    console.log(iconClass, tagTitle)
    return iconClass && tagTitle ? (
        <span
            className="badge text-custom-gray"
            style={{ background: '#F7F7FA' }}
        >
            <i className={iconClass}></i> {tagTitle}
        </span>
    ) : null
}

export default Tag
