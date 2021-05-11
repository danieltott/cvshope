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

export default function Home() {
  return (
    <div class="relative">
      <Head>
        <title>CVS Hope Clinical Trial</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Header />

      <Hero />

      <AboutCVS theme="dark" />

      <AboutStaccato theme="light" />

      <AboutCvsHope />

      <AboutStudy />

      <WhoCanJoin />

      <Wrap theme="blue">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to Participate in the Trial?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            The CVS Hope Trial is being conducted at approximately 15 study
            sites in the US.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Find a Trial Location
          </a>
        </div>
      </Wrap>

      <Wrap>
        <h2 className="subhead mt-2 text-gray-900">Who is Alexza</h2>
        <Prose className="prose-lg mt-4">
          <p>
            The CVS Hope Trial is sponsored and funded by{' '}
            <a href="https://www.alexza.com/">Alexza Pharmaceuticals</a>. Alexza
            Pharmaceuticals is a technologically advanced, forward-thinking and
            innovative company based in Mountain View, California. We are
            focused on the research and development of novel, proprietary
            products for the acute treatment of underserved medical needs.
          </p>
          <p>
            Alexza has developed the{' '}
            <a href="http://staccatoobt.com/">
              Staccato One Breath Technology (OBT)
            </a>
            system, which is a hand-held inhaler designed to deliver a pure drug
            aerosol to the deep lung, providing rapid systemic delivery and
            therapeutic onset, in a simple, non-invasive manner. For CVS, this
            drug delivery technology has the advantages of bypassing the GI
            system and resulting in rapid drug delivery for a fast onset of
            effect and potential relief of CVS symptoms.
          </p>
        </Prose>
      </Wrap>
    </div>
  )
}
