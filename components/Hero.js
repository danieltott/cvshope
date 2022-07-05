import { ArrowNarrowDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className=" tracking-tight font-extrabold text-gray-800">
            <span className="block text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl">
              CVS{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  ">
                Hope
              </span>
            </span>
            <span className="block text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
              Clinical Trial
            </span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            The CVS Hope trial is the first of its kind to evaluate an
            investigational medication designed specifically to treat Cyclic
            Vomiting Syndrome
          </p>

          <p className="mt-3 max-w-md mx-auto text-xl font-semibold text-gray-800 sm:text-xl md:mt-5 md:max-w-3xl">
            Enrollment for the CVS Hope Clinical Trial has been completed.  We
            thank everyone who has participated or expressed interest in this
            important study!
          </p>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          className="absolute inset-0 w-full h-full"
          objectFit="cover"
          objectPosition="50% 82%"
          layout="fill"
          src="/img/hero.jpg"
          // width={2073}
          // height={1809}
          alt=""
        />
      </div>
    </div>
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
