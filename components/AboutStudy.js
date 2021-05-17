import { FeatureHeader } from '@components/FeatureSection'
import Prose from '@components/Prose'
import {
  ClipboardCheckIcon,
  HomeIcon,
  BadgeCheckIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline'
import Wrap from '@components/Wrap'

const transferFeatures = [
  {
    id: 1,
    name: 'Screening Visit: See if the study is a good fit for you',
    details: (
      <Prose>
        <ul>
          <li>
            The study will be explained to you to see if you would like to
            participate (provide informed consent)
          </li>

          <li>
            We will collect basic information about you (age, sex, height,
            weight)
          </li>

          <li>
            We will ask questions about your medical history and any medications
            you are taking or have taken recently
          </li>

          <li>
            We will conduct medical tests (blood tests, urine tests, heart
            tests, physical exam) to see if you are healthy enough to
            participate in the study
          </li>
        </ul>
      </Prose>
    ),

    icon: ClipboardListIcon,
  },
  {
    id: 2,
    name: 'Visit 2: Health Followup and First Dose',
    details: (
      <Prose>
        <ul>
          <li>
            We will ask some of the same questions about your health to see if
            the study is still a good fit for you
          </li>

          <li>
            You will be assigned to receive either 1 mg granisetron, 3 mg
            granisetron, or placebo (a device with no granisetron in it). What
            you receive will be randomly assigned by a computerized system and
            neither you nor the investigator will know what you were assigned to
            receive until the study is over
          </li>

          <li>
            You will be shown how to use the Staccato device and you will take
            one dose at the clinic. For the next two hours, we will do heart
            tests and ask you how you feel
          </li>

          <li>
            We will show you how to use the electronic diary (eDiary) and how to
            record any side effects that you might experience or medications
            that you might take during the home treatment period
          </li>
        </ul>
      </Prose>
    ),

    icon: ClipboardCheckIcon,
  },
  {
    id: 3,
    name: 'Home Treatment Period',
    details: (
      <Prose>
        <p>
          The main purpose of this part of the study is to see if the study
          medication that you were assigned helps with a CVS episode
        </p>

        <p>
          After we know that your ECG (a test that measures and records the
          electrical activity of your heart) results from Visit 2 look good, you
          will be provided with the study medication for the Home Treatment
          Period.
        </p>

        <p>
          For the next 12 weeks, if you feel a CVS episode coming on, we will
          ask you to:
        </p>
        <ul>
          <li>Answer questions on the eDiary before taking study medication</li>
          <li>
            Use one dose of your study medication per day for up to 5 days
          </li>
          <li>
            Contact the study site to let them know that you used a dose of
            study medication
          </li>
          <li>Answer questions on the eDiary after taking study medication</li>
        </ul>
      </Prose>
    ),
    icon: HomeIcon,
  },
  {
    id: 4,
    name: 'Post-dose Visit',
    details: (
      <Prose>
        <p>
          The main purpose of this visit is to look at safety after using the
          study medication
        </p>
        <ul>
          <li>
            We will ask you to return to the study site 3-5 days after you use
            the study medication to treat a CVS episode
          </li>
          <li>
            We will do blood tests, heart tests, and a physical exam, and ask
            you about your health and any medications that you might have taken
            during the home treatment period
          </li>
          <li>
            Your participation will be over at the end of this visit (unless you
            have any side effects that require additional monitoring or
            treatment)
          </li>
        </ul>
      </Prose>
    ),
    icon: BadgeCheckIcon,
  },
]

export default function AboutStudy({ theme }) {
  return (
    <Wrap theme={theme} id="AboutStudy">
      <div className="space-y-8 max-w-screen-md mx-auto">
        <FeatureHeader>What Happens During the Study?</FeatureHeader>

        <Prose className="prose-lg">
          <h3>
            This study has 4 parts: 3 visits and 1 at home treatment period
          </h3>
        </Prose>
        <div className="mt-10 grid grid-cols-1 gap-8">
          {transferFeatures.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.name}
                  </h3>
                  <div className="mt-5 text-base text-gray-500">
                    {feature.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* {transferFeatures.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                {item.name}
              </p>

              <div className="mt-2 ml-16 text-base text-gray-500">
                {item.details}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </Wrap>
  )
}
