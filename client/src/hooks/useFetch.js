import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import axios from '_axios'
import { getConfigByToken } from 'utils/config'

const useFetch = (URL) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [url, setUrl] = useState(URL)
    const token = useSelector((state) => state.users.token)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setIsError(false)

            try {
                const result = await axios.get(url, getConfigByToken(token))
                setData(result.data)
                console.log(result.data)
            } catch (err) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url, token])

    return [{ data, isLoading, isError }, setUrl]
}

export default useFetch
