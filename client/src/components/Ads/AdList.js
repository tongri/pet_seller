import Ad from './Ad'

const AdList = ({ list, isOwner = false, isActive = true }) => {
    return (
        <div className="container-md-5">
            {list.map((ad, key) => (
                <Ad key={key} {...ad} isOwner={isOwner} isActive={isActive} />
            ))}
        </div>
    )
}

export default AdList
