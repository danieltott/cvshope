/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  QuestionMarkCircleIcon,
  LocationMarkerIcon,
  UserGroupIcon,
  StatusOnlineIcon,
  SparklesIcon,
  ClipboardListIcon,
  MapIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const features = [
  {
    name: 'What is CVS?',
    href: 'AboutCVS',
    description: 'Learn more about Cyclic vomiting syndrome (CVS).',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: (
      <>
        What is <em>Staccato</em> Granisetron?
      </>
    ),
    href: 'AboutStaccato',
    description: 'Learn about the medication being tested in this trial.',
    icon: StatusOnlineIcon,
  },
  {
    name: 'What is the CVS Hope Trial?',
    href: 'AboutCvsHope',
    description: 'Find details about the CVS Hope Clinical Trial.',
    icon: SparklesIcon,
  },
  {
    name: 'What Happens During the Study?',
    href: 'AboutStudy',
    description: 'Learn what happens throughout the study.',
    icon: ClipboardListIcon,
  },
  {
    name: 'Who can join the study?',
    href: 'WhoCanJoin',
    description: 'See if you could be a good fit for the study.',
    icon: UserGroupIcon,
  },
  {
    name: 'What if there are no study sites near me?',
    href: 'TravelSupport',
    description:
      'Travel support is available for people who do not live near a study site.',
    icon: MapIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const menuButtonRef = useRef()
  const smallButtonRef = useRef()

  return (
    <div className=" bg-gray-50 z-20 sticky top-0">
      <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
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
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group
                  as="nav"
                  className="hidden md:flex space-x-10"
                ></Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          ref={menuButtonRef}
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          )}
                        >
                          <span>Learn More</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute -ml-4 mt-3 transform z-20 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {features.map((item) => (
                                  <Link key={item.name} href={`/#${item.href}`}>
                                    <a
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                      onClick={() => {
                                        menuButtonRef.current?.click()
                                      }}
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                              <Link href="/locations#top">
                                <a className="px-5 py-5 bg-indigo-600 text-white space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 hover:bg-indigo-700">
                                  <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium">
                                    <LocationMarkerIcon
                                      className="flex-shrink-0 h-6 w-6"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">
                                      Find a Trial Location
                                    </span>
                                  </span>
                                </a>
                              </Link>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Link href="/locations#top">
                    <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium btn-primary-bg">
                      Find a Trial Location
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-20 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
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
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span ref={smallButtonRef} className="sr-only">
                            Close menu
                          </span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div
                      className="mt-6"
                      onClick={() => {
                        smallButtonRef.current.click()
                      }}
                    >
                      <nav className="grid gap-y-8">
                        {features.map((item) => (
                          <Link key={item.name} href={`/#${item.href}`}>
                            <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {item.name}
                              </span>
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div>
                      <Link href="/locations#top">
                        <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                          Find a Trial Location
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
