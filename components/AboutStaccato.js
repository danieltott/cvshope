/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```Staccato Granisetron
*/

import Image from 'next/image'
import Prose from './Prose'

export default function AboutStaccato() {
  return (
    <div className="space-y-8">
      <div className="text-base max-w-prose mx-auto lg:max-w-none text-center">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What is Staccato Granisetron
        </h2>
      </div>
      <div className="splitgrid lg:items-start">
        <div className="mt-12 relative text-base max-w-prose justify-self-start lg:mt-0 lg:max-w-none">
          <svg
            className="absolute top-0 left-0 -mt-20 -ml-20 lg:top-auto lg:left-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:ml-0 xl:top-0 xl:left-0 xl:-mt-20 xl:-ml-20"
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
          <div className="relative bg-white rounded-lg shadow-lg max-w-md">
            <div className="rounded-t-lg px-4 py-4 ">
              <Image
                src="/img/staccato-device.jpg"
                alt="staccato device"
                width={585}
                height={292}
              />
            </div>
            <div className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10">
              <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                <p className="text-white font-semibold sm:inline">
                  Rapid vaporization = Rapid absorption = Rapid onset of action
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <Prose className="mx-auto lg:max-w-none">
            <p>
              Granisetron is a drug that blocks the actions of chemicals in the
              body that can trigger nausea and vomiting.
            </p>

            <p>
              The Staccato Granisetron uses the{' '}
              <a href="http://staccatoobt.com/">Staccato OBT System</a> to
              deliver Granisetron, which has the advantages of bypassing the GI
              system and resulting in rapid drug delivery for a fast onset of
              effect and potential relief of CVS symptoms.
            </p>

            <p>
              The Staccato OBT system comprises the rapid vaporization of an
              excipient-free drug to form aerosol particles optimal for systemic
              delivery through inhalation. These aerosol particles are rapidly
              absorbed, resulting in peak plasma blood levels obtained in the
              first few minutes after administration. Immediate absorption of
              the drug results in rapid onset of action and therapeutic effect.
              The Staccato OBT system matches delivery characteristics and
              product attributes to patient needs for rapid and effective
              treatment of acute and intermittent conditions.
            </p>
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
      </div>
    </div>
  )
}
