import Wrap from '@components/Wrap'
import Prose from '@components/Prose'
import Dots from '@components/Dots'

export default function FeatureSection({ title, children }) {
  return (
    <Wrap>
      <div className="space-y-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="splitgrid lg:items-start">{children}</div>
      </div>
    </Wrap>
  )
}

export function FeatureFigurePanel({ children, left }) {
  return (
    <div
      className={`mt-12 relative text-base max-w-prose  lg:mt-0 lg:max-w-none`}
    >
      {/* <Dots left={left} /> */}
      {children}
    </div>
  )
}
