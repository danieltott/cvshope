import React from 'react'

export const ThemeContext = React.createContext()

const containerThemeDict = {
  blue: 'container-blue',
  light: 'container-light',
  dark: 'container-dark',
  white: 'container-white',
}

export default function Wrap({ children, theme = 'white', className = '' }) {
  const themeClass = containerThemeDict[theme] || containerThemeDict.white

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`relative pt-20 pb-16 sm:pb-24 sm:pt-32 lg:pt-40 lg:pb-32 ${themeClass} ${className}`}
      >
        <div className=" mx-auto max-w-7xl px-4 sm:px-6 ">{children}</div>
      </div>
    </ThemeContext.Provider>
  )
}
