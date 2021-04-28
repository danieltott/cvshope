export default function Wrap({ children, className = '' }) {
  return (
    <div
      className={`relative bg-white pt-20 pb-16 sm:pb-24 sm:pt-32 lg:pt-40 lg:pb-32 ${className}`}
    >
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 ">{children}</div>
    </div>
  )
}
