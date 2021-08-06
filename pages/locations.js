import Head from 'next/head'
import Link from 'next/link'
import Wrap from '@components/Wrap'
import Header from '@components/Header'
import { PhoneIcon, MailIcon } from '@heroicons/react/outline'
import Footer from '@components/Footer'
import LocationsMap from '@components/LocationsMap'
import zipCodeDict from '../data/zipcode-dict.json'
import 'mapbox-gl/dist/mapbox-gl.css'
import { NextSeo } from 'next-seo'

export default function Locations({
  states,
  data,
  mapLocations,
  mapCornersLngLat,
}) {
  return (
    <>
      <NextSeo
        title="CVS Hope Clinical Trial Locations"
        description="The CVS Hope Trial is being conducted at approximately 15 study sites in the US."
        canonical={`${process.env.NEXT_PUBLIC_IMG_URL}/locations`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_IMG_URL}/locations`,
          title: 'CVS Hope Clinical Trial Locations',
          description:
            'The CVS Hope Trial is being conducted at approximately 15 study sites in the US.',
        }}
      />
      <div className="relative">
        <Header />

        <div className="mx-auto max-w-7xl w-full pt-16 lg:pt-48 px-4 sm:px-6">
          <h1 className=" tracking-tight font-extrabold text-gray-800">
            <span className="block text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl">
              CVS{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  ">
                Hope
              </span>
            </span>
            <span className="block text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
              Clinical Trial Locations
            </span>
          </h1>

          <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5">
            The CVS Hope Trial is being conducted at approximately 15 study
            sites in the US.
          </p>
          <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5">
            To learn more about the CVS Hope clinical trial, contact one of the
            locations listed below:
          </p>
          <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5">
            <strong>
              Travel support is available for people who do not live near a
              study site.
            </strong>{' '}
            <Link href="/#TravelSupport">
              <a className="text-indigo-600">See how Travel Support works</a>
            </Link>
            .
          </p>
        </div>

        <div id="map" className="pt-24">
          <LocationsMap
            mapLocations={mapLocations}
            mapCornersLngLat={mapCornersLngLat}
          />
        </div>

        <Wrap theme="light" id="locations">
          <div className="divide-y-2 divide-blue-gray-200">
            {states.map((state) => (
              <div
                className="py-12 lg:grid lg:grid-cols-3 lg:gap-8"
                key={state}
                id={state}
              >
                <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-container-header sm:text-4xl">
                  {state}
                </h2>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <dl className="space-y-6">
                    {data[state].locations.map((loc, i) => {
                      const contact = loc.LocationContactList.LocationContact[0]
                      return (
                        <div
                          key={loc.LocationFacility}
                          id={loc.LocationZip}
                          className="pt-6"
                        >
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            {loc.LocationCity}: {loc.LocationFacility}
                          </dt>
                          <dd className="text-base text-gray-600">
                            <div className="mt-2">
                              {loc.LocationCity}, {loc.LocationState},{' '}
                              {loc.LocationCountry}, {loc.LocationZip}
                            </div>
                            {loc.LocationStatus === 'Recruiting' ? (
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
                                      <a
                                        href={`mailto:${contact.LocationContactEMail}`}
                                      >
                                        {contact.LocationContactEMail}
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="mt-2 italic">
                                Not yet recruiting - check back soon!
                              </div>
                            )}
                          </dd>
                        </div>
                      )
                    })}
                  </dl>
                </div>
                <div className="mt-12">
                  <Link href="#map">
                    <a className="text-indigo-600">Back to Map</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
        <Footer />
      </div>
    </>
  )
}

const applyToArray = (func, array) => func.apply(Math, array)

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
  const mapLocations = []
  const latitudes = []
  const longitudes = []

  locations.forEach((loc) => {
    const geo = zipCodeDict[loc.LocationZip]

    mapLocations.push({
      ...loc,
      geo,
    })
    latitudes.push(geo[0])
    longitudes.push(geo[1])

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

  // getBounds taken from: https://github.com/visgl/react-map-gl/issues/1246#issuecomment-738032023
  const cornersLngLat = [
    [applyToArray(Math.min, longitudes), applyToArray(Math.min, latitudes)],
    [applyToArray(Math.max, longitudes), applyToArray(Math.max, latitudes)],
  ]

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
      mapLocations,
      mapCornersLngLat: cornersLngLat,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60 * 60 * 6, // In seconds
  }
}
