import moment from 'moment'

import Tag from './Tag'
import getTags from 'utils/categories'

const TagList = ({ tags }) => {
    const timeDiff = (value) => {
        const now = new moment()
        const birthday = new moment(value)

        return moment.duration(now.diff(birthday)).humanize()
    }
    return (
        <div className="container-fluid d-flex flex-wrap gap-2 p-0">
            {Object.entries(tags).map(([key, value], index) => (
                <Tag
                    key={index}
                    {...getTags(
                        key,
                        key === 'birthday' ? timeDiff(value) : value
                    )}
                />
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
