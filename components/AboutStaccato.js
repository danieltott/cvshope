import Image from 'next/image'
import FeatureSection, { FeatureFigurePanel } from './FeatureSection'
import FloatyBox from './FloatyBox'
import Prose from './Prose'

export default function AboutStaccato({ theme }) {
  return (
    <FeatureSection
      title="What is Staccato Granisetron?"
      theme={theme}
      id="AboutStaccato"
    >
      <div className="splitgrid">
        <Prose>
          <p>
            Granisetron is a drug that blocks the actions of chemicals in the
            body that can trigger nausea and vomiting.
          </p>

          <p>
            The Staccato Granisetron uses the{' '}
            <a href="http://staccatoobt.com/">Staccato OBT System</a> to deliver
            Granisetron, which has the advantages of bypassing the GI system and
            resulting in rapid drug delivery for a fast onset of effect and
            potential relief of CVS symptoms.
          </p>

          <p>
            The Staccato OBT system comprises the rapid vaporization of an
            excipient-free drug to form aerosol particles optimal for systemic
            delivery through inhalation. These aerosol particles are rapidly
            absorbed, resulting in peak plasma blood levels obtained in the
            first few minutes after administration. Immediate absorption of the
            drug results in rapid onset of action and therapeutic effect. The
            Staccato OBT system matches delivery characteristics and product
            attributes to patient needs for rapid and effective treatment of
            acute and intermittent conditions.
          </p>
        </Prose>

        <FeatureFigurePanel>
          <FloatyBox caption="Rapid vaporization + Rapid absorption = Rapid onset of action">
            <Image
              src="/img/staccato-device.jpg"
              alt="staccato device"
              width={585}
              height={292}
            />
          </FloatyBox>
        </FeatureFigurePanel>
      </div>
    </FeatureSection>
  )
}
