import Ad from './Ad'

const AdList = ({ list }) => {
    return (
        <div className="container-md-5">
            {list.map((ad, key) => (
                <Ad key={key} {...ad} />
            ))}
        </div>
    )
}

export default AdList
