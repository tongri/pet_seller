import { STORAGE_VIEWED } from 'consts/storage'

const addAd = (id) => {
    const store = sessionStorage.getItem(STORAGE_VIEWED) || ''
    const list = store.split(',').filter((el) => el !== '')

    if (!list.includes(id)) {
        list.push(id)
        sessionStorage.setItem(STORAGE_VIEWED, list)
    }
}

export const clearAds = () => sessionStorage.setItem(STORAGE_VIEWED, [])

export default addAd
