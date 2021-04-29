import Head from 'next/head'
import Hero from '@components/Hero'
import Wrap from '@components/Wrap'
import AboutCVS from '@components/AboutCVS'
import AboutStaccato from '@components/AboutStaccato'
import Prose from '@components/Prose'
import CheckList from '@components/CheckList'
import AboutCvsHope from '@components/AboutCvsHope'
import Header from '@components/Header'

export default function Home() {
  return (
    <div class="relative">
      <Head>
        <title>CVS Hope Clinical Trial</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Header />

      {/* <Wrap className="bg-gray-800"> */}
      <Hero />
      {/* </Wrap> */}

      {/* <Wrap className="bg-gray-50"> */}
      <AboutCVS />
      {/* </Wrap> */}

      {/* <Wrap> */}
      <AboutCvsHope />
      {/* </Wrap> */}

      <AboutStaccato />

      <Wrap>
        <div className="space-y-8">
          <h2 className="subhead mt-2 text-gray-900 text-center">
            Who can join the study?
          </h2>
          <div className="splitgrid">
            <div>
              <Prose className="prose-lg">
                <p>
                  You may qualify to particpate in the CVS Hope study if you:
                </p>
              </Prose>

              <CheckList
                features={[
                  'Are an adult between 18 and 60 years of age, inclusive at the time of signing the informed consent document.',
                  'Have received a diagnosis of cyclic vomiting syndrome (CVS) using the Rome IV diagnostic criteria.',
                  'Are otherwise healthy, as determined by the responsible physician, based on a medical evaluation including history, physical examination, vital signs, electrocardiograms (ECGs) and laboratory tests assessed at the screening visit',
                  'Have negative urine tests for selected drugs of abuse and alcohol breath test at Screening.',
                ]}
              />
            </div>
            <div>
              <Prose className="prose-lg">
                <p>
                  You may <em>not</em> qualify if you:
                </p>
              </Prose>
              <CheckList
                check={false}
                features={[
                  "Any significant medical or psychiatric condition that could, in the Investigator's opinion, compromise the subject's safety or interfere with the completion of this protocol.",
                  'Any condition, including the presence of laboratory abnormalities or pulmonary condition, which according to the Investigator places the subject at unacceptable risk if he/she were to participate in the study.',
                  "A diagnosis of any gastrointestinal disorder other than CVS that in the judgement of the Investigator could compromise the subject's safety or interfere with the interpretation of safety or efficacy data.",
                ]}
              />
            </div>
          </div>
          <Prose className="mt-8 text-center mx-auto">
            <em>
              This is a partial list of the criteria to see if you might qualify
              for the study. After contacting a study site, with your
              permission, they will ask you additional questions about your
              health, medical history, and medications that you might be taking.
            </em>
          </Prose>
        </div>
      </Wrap>

      <Wrap className="bg-indigo-700">
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
