import { BadgeCheckIcon } from '@heroicons/react/solid'
import { BanIcon } from '@heroicons/react/solid'

export default function CheckList({ features, check = true }) {
  return features.map((feature, i) => (
    <div key={i} className="flex mb-4">
      {check ? (
        <BadgeCheckIcon
          className="h-6 w-6 mr-2 flex-none text-green-500"
          aria-hidden="true"
        />
      ) : (
        <BanIcon
          className="h-6 w-6 mr-2 flex-none text-red-500"
          aria-hidden="true"
        />
      )}{' '}
      <div>{feature}</div>
    </div>
  ))
}
