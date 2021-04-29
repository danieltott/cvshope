import Image from 'next/image'
import FeatureSection, { FeatureFigurePanel } from './FeatureSection'
import FloatyBox from './FloatyBox'
import Prose from './Prose'

export default function AboutCvsHope() {
  return (
    <FeatureSection title="What is the CVS Hope Trial?">
      <FeatureFigurePanel left>
        <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.youtube-nocookie.com/embed/gld34Aism0w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </FeatureFigurePanel>

      <div className="relative z-10">
        <Prose className="prose-lg">
          <p>
            The CVS Hope trial is the first of its kind to evaluate a medication
            designed specifically to treat CVS symptoms
          </p>
        </Prose>
        <Prose>
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
      </div>
    </FeatureSection>
  )
}

/*
mt-12 relative text-base max-w-prose  lg:mt-0 lg:max-w-none
mt-12 relative text-base max-w-prose  lg:mt-0 lg:max-w-none


*/
