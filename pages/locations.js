import Head from 'next/head'
import Hero from '@components/Hero'
import Wrap from '@components/Wrap'
import AboutCVS from '@components/AboutCVS'
import AboutStaccato from '@components/AboutStaccato'
import Prose from '@components/Prose'
import AboutCvsHope from '@components/AboutCvsHope'
import Header from '@components/Header'
import WhoCanJoin from '@components/WhoCanJoin'
import AboutStudy from '@components/AboutStudy'
import { LocationModalButton } from '@components/LocationModal'
import {
  PhoneIcon,
  MailIcon,
  IdentificationIcon,
} from '@heroicons/react/outline'

export default function Locations({ states, data }) {
  return (
    <div className="relative">
      <Head>
        <title>CVS Hope Clinical Trial Locations</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Header />

      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <h1 className=" tracking-tight font-extrabold text-gray-800">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl">
            CVS{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  ">
              Hope
            </span>
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-4xl">
            Clinical Trial Locations
          </span>
        </h1>

        <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5">
          The CVS Hope Trial is being conducted at approximately 15 study sites
          in the US.
        </p>
        <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5">
          To learn more about the CVS Hope clinical trial, contact one of the
          locations listed below:
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md btn-primary-bg md:py-4 md:text-lg md:px-10"
            >
              Find a Trial Location
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <Wrap theme="light">
        <div className="divide-y-2 divide-blue-gray-200">
          {states.map((state) => (
            <div className="py-12 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-container-header sm:text-4xl">
                {state}
              </h2>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {data[state].locations.map((loc) => {
                    const contact = loc.LocationContactList.LocationContact[0]
                    return (
                      <div key={loc.LocationFacility}>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {loc.LocationCity}: {loc.LocationFacility}
                        </dt>
                        <dd className="text-base text-gray-600">
                          <div className="mt-2">
                            {loc.LocationCity}, {loc.LocationState},{' '}
                            {loc.LocationCountry}, {loc.LocationZip}
                          </div>

                          <div className="mt-2">
                            <div className="text-base">
                              <p>Contact: {contact.LocationContactName}</p>
                            </div>

                            <div className="mt-3 flex">
                              <div className="flex-shrink-0">
                                <PhoneIcon
                                  className="h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-3 text-base">
                                <p>
                                  {contact.LocationContactPhone}{' '}
                                  {contact.LocationContactPhoneExt &&
                                    ` ext ${contact.LocationContactPhoneExt}`}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 flex">
                              <div className="flex-shrink-0">
                                <MailIcon
                                  className="h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-3 text-base">
                                <p>
                                  <a href="mailto:{contact.LocationContactEMail}">
                                    {contact.LocationContactEMail}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://clinicaltrials.gov/api/query/full_studies?expr=%22NCT04645953%22&min_rnk=1&max_rnk=&fmt=json'
  )
  const json = await res.json()

  const locations =
    json?.FullStudiesResponse?.FullStudies?.[0]?.Study?.ProtocolSection
      ?.ContactsLocationsModule?.LocationList?.Location

  const states = []
  const data = {}

  locations.forEach((loc) => {
    if (states.indexOf(loc.LocationState) === -1) {
      states.push(loc.LocationState)
      data[loc.LocationState] = {
        state: loc.LocationState,
        locations: [loc],
      }
    } else {
      data[loc.LocationState].locations.push(loc)
    }
  })

  states.sort()

  states.forEach((state) => {
    data[state].locations.sort(function (a, b) {
      var cityA = a.LocationCity.toUpperCase() // ignore upper and lowercase
      var cityB = b.LocationCity.toUpperCase() // ignore upper and lowercase
      if (cityA < cityB) {
        return -1
      }
      if (cityA > cityB) {
        return 1
      }

      // names must be equal
      return 0
    })
  })

  return {
    props: {
      states,
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}
