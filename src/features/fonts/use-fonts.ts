import { useDispatch, useSelector } from 'react-redux'
import { FontFace, setFonts } from './fonts-slice'
import { useEffect } from 'react'
import { RootState } from 'store'

export const useFonts = (): [
  FontFace,
  (fonts: FontFace) => {
    payload: FontFace
    type: '@@fonts/setFonts'
  }
] => {
  const dispatch = useDispatch()
  const fonts = useSelector((state: RootState) => state.fonts.fontFace)

  const mySetFonts = (fonts: FontFace) => dispatch(setFonts(fonts))

  useEffect(() => {
    document.body.setAttribute('data-font', fonts)
  }, [fonts])

  return [fonts, mySetFonts]
}
