import Image from 'next/image'
import Prose from './Prose'

export default function AboutCVS() {
  return (
    <div className="space-y-8">
      <div className="text-base max-w-prose mx-auto lg:max-w-none text-center">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What is Cyclic Vomiting Syndrome (CVS)
        </h2>
      </div>
      <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <Prose className="prose-lg">
          <p>
            Cyclic vomiting syndrome (CVS) is a chronic condition in which
            people have episodes of severe nausea and vomiting that alternate
            with periods during which they feel normal
          </p>
        </Prose>
      </div>
      <div className="splitgrid lg:items-start">
        <div className="relative z-10">
          <Prose className="mx-auto lg:max-w-none">
            <ul>
              <li>
                CVS symptoms are often triggered by stress and frequently occur
                “out of the blue”
              </li>
              <li>
                Many people report that episodes occur early in the morning,
                with some people reporting a seasonal variation to their
                symptoms
              </li>
              <li>
                CVS can be divided into 4 phases: the prodromal phase, the
                emetic phase, the recovery phase, and the asymptomatic phase{' '}
              </li>
              <li>
                People with CVS might also have other medical conditions such as
                migraine, anxiety, or depression
              </li>
              <li>
                Many people with CVS are often misdiagnosed as having a stomach
                flu, food poisoning, or gastroparesis (slow emptying of the
                stomach)
              </li>
            </ul>

            <h3>
              If you have experienced each of the following, you might have CVS:
            </h3>
            <ul>
              <li>
                Episodes of vomiting that come on suddenly and last from 1-6
                days,
              </li>
              <li>
                At least 2 of these episodes in the past 6 months and at least 3
                episodes in the past year and,
              </li>
              <li>
                Absence of vomiting between episodes (other milder symptoms can
                be present between episodes)
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
        <div className="mt-12 relative text-base max-w-prose justify-self-end lg:mt-0 lg:max-w-none">
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
          <div className="relative bg-white rounded-lg shadow-lg">
            <div className="rounded-t-lg px-4 py-4 ">
              <Image
                src="/img/cvs.jpg"
                alt="CVS Cycle"
                width={468}
                height={238}
              />
            </div>
            <div className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10">
              <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                <p className="text-white font-semibold sm:inline">
                  Illustration of CVS cycles
                </p>
              </span>
            </div>
          </div>

          <Prose className="mt-8 text-right">
            <h3>For more information about CVS:</h3>
            <ul>
              <li>
                <a href="https://www.CVSAonline.org">
                  Cyclic Vomiting Syndrome Association
                </a>
              </li>
              <li>
                <a href="https://www.iffgd.org/upper-gi-disorders/cyclic-vomiting-syndrome-cvs.html">
                  International Foundation for Gastrointestinal Disorders
                </a>
              </li>
            </ul>
          </Prose>
        </div>
      </div>
    </div>
  )
}
