export default function Wrap({ children, bg, className = '' }) {
  let bgClass

  switch (bg) {
    case 'blue':
      bgClass = 'container-blue'
      break

    case 'light':
      bgClass = 'container-light'
      break

    case 'dark':
      bgClass = 'container-dark'
      break

    default:
      bgClass = 'container-white'
      break
  }

  return (
    <div
      className={`relative pt-20 pb-16 sm:pb-24 sm:pt-32 lg:pt-40 lg:pb-32 ${bgClass} ${className}`}
    >
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 ">{children}</div>
    </div>
  )
}
