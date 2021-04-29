import FeatureSection, { FeatureFigurePanel } from './FeatureSection'
import CheckList from './CheckList'
import Prose from './Prose'

export default function WhoCanJoin({ theme }) {
  return (
    <FeatureSection title="Who can join the study?" theme={theme}>
      <div>
        <Prose className="prose-lg">
          <p>You may qualify to particpate in the CVS Hope study if you:</p>
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
    </FeatureSection>
  )
}
