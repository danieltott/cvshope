export default function Wrap({ children, bg, className = '' }) {
  let bgClass

  switch (bg) {
    case 'blue':
      bgClass = 'bg-gradient-to-r from-purple-800 to-indigo-700'
      break

    case 'light':
      bgClass = 'bg-gray-50'
      break

    case 'dark':
      bgClass = 'bg-gray-900'
      break

    default:
      bgClass = 'bg-white'
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
