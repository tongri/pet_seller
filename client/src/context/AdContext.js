import { createContext, useState } from 'react'
import { AD } from 'mocks/ad.mock'

import {
    updateContactRequest,
    createPetRequest,
    updatePetRequest,
    retrievePetRequest,
} from 'api/ads.api'

import { convertToFormData, convertNullToEmpty, convertFiles } from 'utils/cuAd'
import { getConfigByToken } from 'utils/config'
import { removeEmptyFields } from 'utils/contact'

export const AdContext = createContext()

export const AdProvider = ({ children }) => {
    const [form, setForm] = useState(AD)

    const create = async ({ id, token }) => {
        const data = convertToFormData({
            ...form,
            files: Object.values(form.files).filter((file) => file !== ''),
            owner: id,
        })

        try {
            const pet = createPetRequest({
                data,
                config: getConfigByToken(token),
            })
            const contact = updateContactRequest({
                id,
                data: removeEmptyFields(form.contacts),
                config: getConfigByToken(token),
            })

            await Promise.all([pet, contact])
        } catch {}
    }

    const update = async ({ id, token }) => {
        const { owner, contacts, ...ad } = form

        const data = convertToFormData({
            ...ad,
            files: Object.values(ad.files).filter(
                (el) => el !== '' && el instanceof File
            ),
        })

        try {
            await updatePetRequest({
                id: id,
                data,
                config: getConfigByToken(token),
            })
        } catch {}
    }

    const read = async ({ id, token }) => {
        try {
            const result = await retrievePetRequest({
                id,
                config: getConfigByToken(token),
            })

            setForm(convertFiles(convertNullToEmpty(result.data)))
        } catch {}
    }

    const value = { state: form, setState: setForm, create, update, read }
    return <AdContext.Provider value={value}>{children}</AdContext.Provider>
}
