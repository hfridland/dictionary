import logo from './logo.svg'
import FontsSwitcher from '../../features/fonts/FontsSwitcher'
import ThemeSwitcher from '../../features/theme/ThemeSwitcher'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo_color" />
      <div className="right">
        <FontsSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
