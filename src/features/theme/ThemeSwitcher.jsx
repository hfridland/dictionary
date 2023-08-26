// import { useState } from 'react';
import moon from './icon-moon.svg'
import { useTheme } from './use-theme';

const ThemeSwitcher = () => {
    // const [theme, setTheme] = useState('light')
    // const theme = 'dark'
    // document.body.setAttribute('data-theme', theme);
    const [theme, toggleTheme] = useTheme()
    return (
        <div className='team-switcher' onClick={toggleTheme}>
            <div className='team-switcher-rectangle'>
                <div className='team-switcher-circle' />
            </div>
            <img src={moon} alt='moon' className={`filter_${theme}_color`} />
        </div>
    )
}

export default ThemeSwitcher