import FeatureSection, { FeatureFigurePanel } from './FeatureSection'
import CheckList from './CheckList'
import Prose from './Prose'

export default function WhoCanJoin({ theme }) {
  return (
    <FeatureSection
      title="Who can join the study?"
      theme={theme}
      id="WhoCanJoin"
    >
      <div className="splitgrid">
        <div>
          <Prose className="prose-lg">
            <p>
              You might qualify to participate in the CVS Hope study if you:
            </p>
          </Prose>

          <CheckList
            features={[
              'Are between 18 and 60 years of age',
              'Have received a diagnosis of cyclic vomiting syndrome (CVS)',
              'Are otherwise healthy',
            ]}
          />
        </div>
        <div>
          <Prose className="prose-lg">
            <p>
              You might <em>not</em> qualify if you:
            </p>
          </Prose>
          <CheckList
            check={false}
            features={[
              'Have a medical or psychiatric condition that would make it unsafe for you to participate',
              'Have a known hypersensitivity or allergy to granisetron or other drugs like granisetron',
            ]}
          />
        </div>
      </div>
    </FeatureSection>
  )
}
