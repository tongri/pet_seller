import Tag from './Tag'

import getTags from 'utils/categories'

const TagList = ({ tags, ...rest }) => {
    return (
        <div className="container-fluid d-flex gap-2 p-0">
            {Object.entries(tags).map(([key, value]) => (
                <Tag {...getTags(key, value)} />
            ))}
        </div>
    )
}

export default TagList

// {
//     type: 'cat',
//     sex: 'female',
//     birth_date: '22.11.2020',
//     size: '40-50cm',
// }
