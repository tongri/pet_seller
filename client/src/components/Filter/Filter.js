import Search from './Search'
import Select from '../Forms/Select'

const LIST_OF_FILTERS = [
    { name: 'countries', title: 'Country' },
    { name: 'cities', title: 'City' },
    { name: 'kinds', title: 'Kind of animal' },
    { name: 'genders', title: 'Gender' },
    { name: 'sizes', title: 'Size' },
    { name: 'ages', title: 'Age' },
]

const Filter = ({ filters }) => {
    return (
        <div>
            <Search />

            <div className="card mt-4">
                <div className="card-header">
                    <div className="card-title d-flex mb-0 align-items-center justify-content-between">
                        <h5 className="mb-0">Filter</h5>
                        <i className="fas fa-filter"></i>
                    </div>
                </div>
                <div className="card-body row gap-2">
                    {LIST_OF_FILTERS.map((filt, key) => (
                        <Select
                            key={key}
                            {...filt}
                            options={filters[filt.name]}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter
