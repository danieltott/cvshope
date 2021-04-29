export default function Prose({ children, className = '' }) {
  return <div className={`prose ${className}`}>{children}</div>
}
