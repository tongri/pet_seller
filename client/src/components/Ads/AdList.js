import Ad from './Ad'

const AdList = ({ list, isOwner = false, isActive = true }) => {
    return list.length !== 0 ? (
        <div className="container-md-5">
            {list.map((ad, key) => (
                <Ad key={key} {...ad} isOwner={isOwner} isActive={isActive} />
            ))}
        </div>
    ) : (
        <p className="text-center">No ads yet...</p>
    )
}

export default AdList
