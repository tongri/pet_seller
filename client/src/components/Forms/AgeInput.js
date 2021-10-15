import { useEffect, useState } from 'react'

import { MDBInput } from 'mdb-react-ui-kit'
import Select from './Select'

const AgeInput = ({ title, onChange, value = ' days', disabled }) => {
    const [age, setAge] = useState({ age: 0, measure: '' })
    const [dataParsed, setDataParsed] = useState(false)

    const handleAge = (e) => {
        setAge((state) => ({ ...state, [e.target.name]: e.target.value }))
        setDataParsed(false)
    }

    useEffect(() => {
        if (value) {
            const tmp = value.split(' ')
            setAge((state) => ({ ...state, age: tmp[0], measure: tmp[1] }))
            setDataParsed(false)
        }
    }, [value])

    useEffect(() => {
        if (dataParsed) return
        onChange(`${age.age} ${age.measure}`)
        setDataParsed(true)
    }, [age, dataParsed, onChange])

    return (
        <div className="form m-0 p-0">
            <div className="d-flex gap-3">
                <MDBInput
                    type="number"
                    label={title}
                    min="0"
                    value={age.age}
                    onChange={handleAge}
                    disabled={disabled}
                    name="age"
                />

                <Select
                    name="measure"
                    options={['days', 'years']}
                    onChange={handleAge}
                    className="w-100"
                    value={age.measure}
                    startFromFirstOption
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

export default AgeInput
