import Image from 'next/image'
import Prose from './Prose'

export default function AboutCvsHope() {
  return (
    <div className="space-y-8">
      <div className="text-base max-w-prose mx-auto lg:max-w-none text-center">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What is the CVS Hope Trial?
        </h2>
      </div>
      <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <Prose className="prose-lg">
          <p>
            The CVS Hope trial is the first of its kind to evaluate a medication
            designed specifically to treat CVS symptoms
          </p>
        </Prose>
      </div>
      <div className="splitgrid lg:items-start">
        <div className="relative z-10">
          <Prose className="mx-auto lg:max-w-none">
            <ul>
              <li>
                The CVS Hope Trial is being conducted at approximately 15 study
                sites in the US
              </li>
              <li>
                Reimbursement for travel to and from a study site is available
              </li>
            </ul>
          </Prose>
          {/* <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact sales
              </a>
            </div>
            <div className="rounded-md shadow ml-4">
              <a
                href="#"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
              >
                Learn more
              </a>
            </div>
          </div> */}
        </div>
        {/* <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-center"> */}
        <div className="mt-12 relative text-base max-w-prose  lg:mt-0 lg:max-w-none">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
            />
          </svg>
          <div className="relative mx-auto w-full rounded-lg  lg:max-w-md">
            <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/gld34Aism0w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
