export default function Prose({ children, className = '' }) {
  return (
    <div className={`prose prose-indigo text-gray-500 ${className}`}>
      {children}
    </div>
  )
}
