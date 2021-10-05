import { useEffect, useState } from 'react'

import { MDBInput } from 'mdb-react-ui-kit'
import Select from './Select'

const AgeInput = ({ title, onChange, value = ' days', disabled }) => {
    const [age, setAge] = useState('')
    const [measure, setMeasure] = useState('days')

    useEffect(() => {
        if (value) {
            const tmp = value.split(' ')
            setAge(tmp[0])
            setMeasure(tmp[1])
        }
    }, [value])

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
                    value={measure}
                    startFromFirstOption
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

export default AgeInput
