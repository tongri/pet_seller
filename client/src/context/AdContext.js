import { createContext, useState } from 'react'
import { AD } from 'mocks/ad.mock'

export const AdContext = createContext()

export const AdProvider = ({ children }) => {
    const [form, setForm] = useState(AD)
    // const setState = (value) => setForm(value)

    const value = { state: form, setState: setForm }
    return <AdContext.Provider value={value}>{children}</AdContext.Provider>
}
