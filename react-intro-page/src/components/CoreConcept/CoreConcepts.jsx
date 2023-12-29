import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section.jsx";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <ul >
        {
          CORE_CONCEPTS.map(
            (coreConcept, index) => {
              return <CoreConcept key={index} {...coreConcept} />
            }
          )
        }
      </ul>
    </Section>
  )
}