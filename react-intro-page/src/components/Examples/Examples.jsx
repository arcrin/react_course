import TabButton from "../Tabs/TabButton.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import Section from "../Section/Section.jsx";
import { EXAMPLES } from "../../data.js";
import { useState } from "react";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();
  function handleSelect(selectedTab) {
    setSelectedTab(selectedTab);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTab) {
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTab].code}
          </code>
        </pre>
      </>
    )
  }

  let tabButtons = (
    <>
      <TabButton onClick={() => handleSelect("components")}
        isSelected={(selectedTab === "components") ? true : false}>
        Components
      </TabButton>
      <TabButton onClick={() => handleSelect("jsx")}
        isSelected={(selectedTab === "jsx") ? true : false}>
        JSX
      </TabButton>
      <TabButton onClick={() => handleSelect("props")}
        isSelected={(selectedTab === "props") ? true : false}>
        Props
      </TabButton>
      <TabButton onClick={() => handleSelect("state")}
        isSelected={(selectedTab === "state") ? true : false}>
        State
      </TabButton>
    </>
  )

  return (
    <Section title={"Example"} id="examples">
      <Tabs buttons={tabButtons}>
        {tabContent}
      </Tabs>
    </Section>
  );
}