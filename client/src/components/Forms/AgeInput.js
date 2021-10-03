import { useEffect, useState } from 'react'

import { MDBInput } from 'mdb-react-ui-kit'
import Select from './Select'

const AgeInput = ({ title, onChange, disabled }) => {
    const [age, setAge] = useState('')
    const [measure, setMeasure] = useState('days')

    // eslint-disable-next-line
    useEffect(() => onChange(`${age} ${measure}`), [age, measure])

    return (
        <div className="form m-0 p-0">
            <div className="d-flex gap-3">
                <MDBInput
                    type="number"
                    label={title}
                    min="0"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    disabled={disabled}
                />

                <Select
                    name="measure"
                    options={['days', 'years']}
                    onChange={(e) => setMeasure(e.target.value)}
                    className="w-100"
                    startFromFirstOption
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

export default AgeInput
