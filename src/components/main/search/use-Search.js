import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { loadSearch } from "../../../features/search/search-slide"

export const useSearch = () => {
    const [searchString, setSearchString] = useState('')
    const [style, setStyle] = useState({})
    const [error, setError] = useState(false)
    const [startSearch, setStartSearch] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (startSearch) {
            dispatch(loadSearch(searchString))
            setStartSearch(false)
        }
    // eslint-disable-next-line
    }, [startSearch, dispatch])

    const focusHandler = () => {
        setStyle({border: 'solid 1px #a445ed'})
        setError(false)
    }

    const blurHandler = () => {
        if (searchString.length > 0) {
            setStyle({})
        } else {
            setStyle({border: 'solid 1px #ff5252'})
            setError(true)
        }
    }

    const keyUpHandler = e => {
        if (e.key === 'Enter') {
            searchHandler()
        }
    }

    const searchHandler = () => {
        if (searchString.length === 0) return
        setStartSearch(true)
    }

    return {style, focusHandler, blurHandler, keyUpHandler, searchHandler, searchString, setSearchString, error}
}
