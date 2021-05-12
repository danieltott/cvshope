const navigation = [
  {
    name: 'Clinical Trial NCT04645953',
    href: 'https://www.clinicaltrials.gov/ct2/show/NCT04645953',
  },
  {
    name: 'Alexza Pharmaceuticals',
    href: 'https://www.alexza.com/',
  },
  {
    name: 'Staccato OBT',
    href: 'http://staccatoobt.com/',
  },
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} ALEXZA®
          </p>
        </div>
      </div>
    </footer>
  )
}
