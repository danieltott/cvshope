import FeatureSection from './FeatureSection'
import Prose from './Prose'

export default function TravelSupport({ theme }) {
  return (
    <FeatureSection
      title="What if there are no study sites near me?"
      titleAlign="text-left"
      theme={theme}
      id="TravelSupport"
    >
      <Prose className="prose-lg">
        <p>
          Travel support is available for people who do not live near a study
          site
        </p>
      </Prose>

      <Prose>
        <p>
          The study sponsor has implemented a program designed to assist
          participants to attend study visits. A clinical research support
          company who has experience working with participants in clinical
          trials will assist you with all travel-related needs and
          reimbursements for this study.
        </p>

        <p>
          How does it work? The travel support company will be working with you
          and your study site representative to make necessary travel
          arrangements. Your confidentiality will be maintained at all times.
        </p>

        <p>
          The following travel expenses may be arranged or reimbursed for your
          traveling needs, as applicable:
        </p>

        <ul>
          <li>
            Reimbursement for use of personal vehicle or ground transportation
            such as Uber, Lyft, or taxi
          </li>
          <li>Reimbursement for reasonable meal expenses</li>
          <li>Other travel-related expenses (parking expenses, tolls)</li>
          <li>Hotel accommodations (requires sponsor approval)</li>
          <li>Air travel (requires sponsor approval)</li>
        </ul>
      </Prose>
    </FeatureSection>
  )
}
