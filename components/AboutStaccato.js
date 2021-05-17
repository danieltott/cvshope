import Image from 'next/image'
import FeatureSection, { FeatureFigurePanel } from './FeatureSection'
import FloatyBox from './FloatyBox'
import Prose from './Prose'

export default function AboutStaccato({ theme }) {
  return (
    <FeatureSection
      title={
        <>
          What is <em>Staccato™</em> Granisetron
        </>
      }
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
            The <em>Staccato</em> granisetron uses the{' '}
            <a href="http://staccatoobt.com/">
              <em>Staccato</em> One Breath Technology™
            </a>{' '}
            (OBT™) to deliver granisetron, which has the advantages of bypassing
            the GI system and resulting in rapid drug delivery for a fast onset
            of effect and potential relief of CVS symptoms.
          </p>

          <p>
            The <em>Staccato</em> OBT system comprises the rapid vaporization of
            an excipient-free drug to form aerosol particles optimal for
            systemic delivery through inhalation. These aerosol particles are
            rapidly absorbed, resulting in peak plasma blood levels obtained in
            the first few minutes after administration.
          </p>
        </Prose>

        <FeatureFigurePanel>
          <FloatyBox caption="Rapid vaporization + Rapid absorption = Rapid onset of action">
            <Image
              src="/img/staccato-device.png"
              alt="staccato device"
              width={2717}
              height={1563}
            />
          </FloatyBox>
        </FeatureFigurePanel>
      </div>
    </FeatureSection>
  )
}
