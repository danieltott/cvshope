export default function Wrap({ children, theme, className = '' }) {
  let themeClass

  switch (theme) {
    case 'blue':
      themeClass = 'container-blue'
      break

    case 'light':
      themeClass = 'container-light'
      break

    case 'dark':
      themeClass = 'container-dark'
      break

    default:
      themeClass = 'container-white'
      break
  }

  return (
    <div
      className={`relative pt-20 pb-16 sm:pb-24 sm:pt-32 lg:pt-40 lg:pb-32 ${themeClass} ${className}`}
    >
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 ">{children}</div>
    </div>
  )
}
