import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from './theme-slice'
import { useEffect } from 'react'
import { RootState } from 'store'
import { Theme } from './theme-slice'

export const useTheme = (): [
  Theme,
  () => {
    payload: Theme
    type: '@@theme/setTheme'
  }
] => {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.theme)

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return [theme, toggleTheme]
}
