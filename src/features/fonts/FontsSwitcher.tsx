import { FontFace } from './fonts-slice'
import { useFonts } from './use-fonts'

const FontsSwitcher = () => {
  const [fonts, setFonts] = useFonts()

  return (
    <div className="fontSwitcher">
      <select
        className="select"
        value={fonts}
        onChange={(e) => setFonts(e.target.value as FontFace)}
      >
        <option value="serif">Serif</option>
        <option value="sans serif">Sans Serif</option>
        <option value="mono">Mono</option>
      </select>
      <div className="divider"></div>
    </div>
  )
}

export default FontsSwitcher
