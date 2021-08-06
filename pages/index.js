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
import Footer from '@components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { NextSeo } from 'next-seo'
import TravelSupport from '@components/TravelSupport'
import { locationCount } from 'data/data'

export default function Home() {
  const router = useRouter()
  const contentRef = useRef()
  useEffect(() => {
    // const sectionID = router?.asPath.split('#')[1]
    // const section = document.getElementById(sectionID)
    // console.log({ sectionID, section })
    // if (section) {
    //   section.focus()
    // }
    contentRef.current.focus()
  }, [router?.asPath])
  return (
    <>
      <NextSeo
        title="CVS Hope Clinical Trial"
        description="The CVS Hope trial is the first of its kind to evaluate an investigational medication designed specifically to treat Cyclic Vomiting Syndrome"
        canonical={process.env.NEXT_PUBLIC_IMG_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_IMG_URL,
          title: 'CVS Hope Clinical Trial',
          description:
            'The CVS Hope trial is the first of its kind to evaluate an investigational medication designed specifically to treat Cyclic Vomiting Syndrome',
        }}
      />
      <div className="relative">
        <Header />

        <Hero />

        <AboutCVS theme="dark" />

        <AboutStaccato theme="light" />

        <AboutCvsHope />

        <AboutStudy />

        <WhoCanJoin />

        <TravelSupport theme="light" />

        <Wrap theme="blue">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold text-white sm:text-4xl"
              ref={contentRef}
            >
              <span className="block">Ready to Participate in the Trial?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              The CVS Hope Trial is being conducted at approximately{' '}
              {locationCount} study sites in the US.
            </p>
            <Link href="/locations#top">
              <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                Find a Trial Location
              </a>
            </Link>
          </div>
        </Wrap>

        <Wrap>
          <h2 className="subhead mt-2 text-gray-900">Who is Alexza</h2>
          <Prose className="prose-lg mt-4">
            <p>
              The CVS Hope Trial is sponsored and funded by{' '}
              <a href="https://www.alexza.com/">Alexza Pharmaceuticals</a>.
              Alexza Pharmaceuticals is a technologically advanced,
              forward-thinking and innovative company based in Mountain View,
              California. We are focused on the research and development of
              novel, proprietary products for the acute treatment of underserved
              medical needs.
            </p>
            <p>
              Alexza has developed the{' '}
              <a href="http://staccatoobt.com/">
                <em>Staccato</em> One Breath Technology™
              </a>{' '}
              (OBT™) system, which is a hand-held inhaler designed to deliver a
              pure drug aerosol to the deep lung, providing rapid systemic
              delivery and therapeutic onset, in a simple, non-invasive manner.
            </p>
          </Prose>
        </Wrap>
        <Footer />
      </div>
    </>
  )
}
