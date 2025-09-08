import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadSearch } from '../../../features/search/search-slide'
import { AppDispatch } from 'store'

interface UseSearchRet {
  style: {}
  focusHandler: () => void
  blurHandler: () => void
  keyUpHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void // KeyboardEventHandler<HTMLInputElement> // (e: KeyboardEvent) => void
  searchHandler: () => void
  searchString: string
  setSearchString: React.Dispatch<React.SetStateAction<string>>
  error: boolean
}

export const useSearch = (): UseSearchRet => {
  const [searchString, setSearchString] = useState<string>('')
  const [style, setStyle] = useState({})
  const [error, setError] = useState<boolean>(false)
  const [startSearch, setStartSearch] = useState<boolean>(false)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (startSearch) {
      dispatch(loadSearch(searchString))
      setStartSearch(false)
    }
    // eslint-disable-next-line
  }, [startSearch, dispatch])

  const focusHandler = () => {
    setStyle({ border: 'solid 1px #a445ed' })
    setError(false)
  }

  const blurHandler = () => {
    if (searchString.length > 0) {
      setStyle({})
    } else {
      setStyle({ border: 'solid 1px #ff5252' })
      setError(true)
    }
  }

  const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler()
    }
  }

  const searchHandler = () => {
    if (searchString.length === 0) return
    setStartSearch(true)
  }

  return {
    style,
    focusHandler,
    blurHandler,
    keyUpHandler,
    searchHandler,
    searchString,
    setSearchString,
    error,
  }
}
