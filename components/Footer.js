import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  company: [
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
  ],
  legal: [
    { name: 'Privacy policy', href: 'https://www.alexza.com/privacy-policy/' },
    { name: 'Terms of use', href: 'https://www.alexza.com/terms-of-use/' },
    { name: 'Disclaimer', href: 'https://www.alexza.com/disclaimer/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <a className="tracking-tight  text-gray-800">
                <span className="font-extrabold text-2xl">
                  CVS{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  ">
                    Hope
                  </span>
                </span>
              </a>
            </Link>
            <p className="text-gray-500 text-base">
              The CVS Hope trial is the first of its kind to evaluate a
              medication designed specifically to treat Cyclic Vomiting Syndrome
              symptoms.
            </p>
          </div>
          <div className="mt-12 flex text-right xl:mt-0 xl:col-span-2 justify-end">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  More Info
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} ALEXZA®
          </p>
        </div>
      </div>
    </footer>
  )
}
