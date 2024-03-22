import MoonIcon from './assets/icon-moon.svg?react';
import SunIcon from './assets/icon-sun.svg?react';
import React, { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';


export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false)

  const themeText = isDark ? "Light" : "Dark"
  const ThemeIcon = isDark ? SunIcon : MoonIcon

  useEffect(() => {
    localStorage.getItem('theme') === 'dark' ? setDark(true) : setDark(false)
  }, [])

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light")
  }, [isDark])

  const themeSwitchHandler = () => {
    setDark(!isDark)
    !isDark ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
  }
  return (
    <div className={styles.switcher} onClick={() => themeSwitchHandler()}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
