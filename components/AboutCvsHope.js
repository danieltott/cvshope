import FeatureSection, { FeatureFigurePanel } from './FeatureSection'
import Prose from './Prose'

export default function AboutCvsHope({ theme }) {
  return (
    <FeatureSection
      title="What is the CVS Hope Trial?"
      theme={theme}
      id="AboutCvsHope"
    >
      <div className="splitgrid">
        <FeatureFigurePanel left>
          <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.youtube-nocookie.com/embed/UeDFhQXqQEE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </FeatureFigurePanel>

        <Prose className="prose-xl">
          <p>
            The CVS Hope trial is the first of its kind to evaluate a medication
            designed specifically to treat CVS symptoms
          </p>
          <p>
            The main purpose of this study is to see if <em>Staccato</em>{' '}
            granisetron can help with CVS and whether <em>Staccato</em>{' '}
            granisetron is safe in people who have CVS
          </p>

          <p>
            This study will also help us determine what dose(s) of{' '}
            <em>Staccato</em> granisetron might be best for CVS
          </p>
        </Prose>
      </div>
    </FeatureSection>
  )
}

/*
mt-12 relative text-base max-w-prose  lg:mt-0 lg:max-w-none
mt-12 relative text-base max-w-prose  lg:mt-0 lg:max-w-none


*/
