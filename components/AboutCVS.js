import Image from 'next/image'
import FeatureSection, { FeatureFigurePanel } from './FeatureSection'
import FloatyBox from './FloatyBox'
import Prose from './Prose'

export default function AboutCVS({ theme }) {
  return (
    <FeatureSection
      title="What is Cyclic Vomiting Syndrome (CVS)?"
      theme={theme}
      id="AboutCVS"
    >
      <div className="splitgrid">
        <div>
          <Prose className="prose-lg">
            <p>
              Cyclic vomiting syndrome (CVS) is a chronic condition in which
              people have episodes of severe nausea and vomiting that alternate
              with periods during which they feel normal.
            </p>
          </Prose>
          <Prose>
            <ul>
              <li>
                CVS symptoms are often triggered by stress and frequently occur
                “out of the blue”
              </li>
              <li>
                Many people report that episodes occur early in the morning,
                with some people reporting a seasonal variation to their
                symptoms
              </li>
              <li>
                CVS can be divided into 4 phases: the prodromal phase, the
                emetic phase, the recovery phase, and the asymptomatic phase{' '}
              </li>
              <li>
                People with CVS might also have other medical conditions such as
                migraine, anxiety, or depression
              </li>
              <li>
                Many people with CVS are often misdiagnosed as having a stomach
                flu, food poisoning, or gastroparesis (slow emptying of the
                stomach)
              </li>
            </ul>

            <h3>
              If you have experienced each of the following, you might have CVS:
            </h3>
            <ul>
              <li>
                Episodes of vomiting that come on suddenly and last from 1-6
                days,
              </li>
              <li>
                At least 2 of these episodes in the past 6 months and at least 3
                episodes in the past year and,
              </li>
              <li>
                Absence of vomiting between episodes (other milder symptoms can
                be present between episodes)
              </li>
            </ul>
          </Prose>
        </div>
        <FeatureFigurePanel>
          <FloatyBox
            caption={
              <>
                <div>Illustration of CVS phases</div>
                <div class="text-sm">
                  Fleisher et al. (2005) <em>BMC Medicine</em>
                </div>
              </>
            }
          >
            <Image
              src="/img/cvs-phases.png"
              alt="CVS Cycle"
              width={1331}
              height={684}
              layout="responsive"
            />
          </FloatyBox>

          <Prose className="mt-8">
            <h3>For more information about CVS:</h3>
            <ul>
              <li>
                <a href="https://www.CVSAonline.org">
                  Cyclic Vomiting Syndrome Association
                </a>
              </li>
              <li>
                <a href="https://www.iffgd.org/upper-gi-disorders/cyclic-vomiting-syndrome-cvs.html">
                  International Foundation for Gastrointestinal Disorders
                </a>
              </li>
              <li>
                <a href="https://www.niddk.nih.gov/health-information/digestive-diseases/cyclic-vomiting-syndrome">
                  Cyclic Vomiting Syndrome Resources
                </a>{' '}
                from the{' '}
                <abbr title="National Institute of Diabetes and Digestive and Kidney Diseases">
                  NIDDK
                </abbr>
              </li>
            </ul>
          </Prose>
        </FeatureFigurePanel>
      </div>
    </FeatureSection>
  )
}
