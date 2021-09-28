import Ad from './Ad'

const AdList = ({ list }) => {
    return (
        <div className="container-md-5">
            {list.map((ad) => (
                <Ad {...ad} />
            ))}
        </div>
    )
}

export default AdList
