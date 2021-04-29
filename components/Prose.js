import { useContext } from 'react'
import { ThemeContext } from './Wrap'

const proseThemeDict = {
  blue: 'prose-blue',
  light: 'prose-light',
  dark: 'prose-dark',
  white: '',
}

export default function Prose({ children, className = '' }) {
  const containerTheme = useContext(ThemeContext)

  const proseTheme = proseThemeDict[containerTheme] || ''

  return <div className={`prose ${proseTheme} ${className}`}>{children}</div>
}
