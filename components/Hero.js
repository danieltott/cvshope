import { ArrowNarrowDownIcon } from '@heroicons/react/solid'

export default function Hero() {
  return (
    <main className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className=" tracking-tight font-extrabold text-gray-900">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl">
              CVS{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-200 to-indigo-400 ">
                Hope
              </span>
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-4xl">
              Clinical Trial
            </span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            The CVS Hope trial is the first of its kind to evaluate a medication
            designed specifically to treat Cyclic Vomiting Syndrome symptoms
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Find a Trial Location
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More <ArrowNarrowDownIcon className="h-6 w-6 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1505027492977-1037f14c46fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
          alt=""
        />
      </div>
    </main>
  )
}
/*
<div className="sm:text-center md:max-w-2xl md:mx-auto ">
        <h1>
          <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-white">
            CVS
            <span className="text-indigo-400">Hope</span> Clinical Trial
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-2xl">
          The CVS Hope trial is the first of its kind to evaluate a medication
          designed specifically to treat Cyclic Vomiting Syndrome symptoms
        </p>
      </div>

      */
