import { withAuth } from "../components/Auth";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import { TutorTesting } from "../components/tutor/TutorTesting";
import { useEffect, useState } from "react";
import { FeedbackTesting } from "../components/tutor/Feedbacks/FeedbackTesting";

export default withAuth(function PracticePage() {
  const [tabIndex, setTabIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const [colorTab, setColorTab] = useState(["white", "white", "white"]);
  const HandleIndex = (e) => {
    e.preventDefault();
    setTabIndex((prev) => prev + 1);
  };
  return (
    <>
      <FeedbackTesting showFeedback={showFeedback} />
      <Tabs
        variant="soft-rounded"
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab style={{ background: colorTab[0] }}>Ejercicio 1</Tab>
          <Tab
            isDisabled={colorTab[0] === "white" ? true : false}
            style={{
              background: colorTab[1],
              marginLeft: "6px",
            }}
          >
            Ejercicio 2
          </Tab>
          <Tab
            isDisabled={colorTab[1] === "white" ? true : false}
            style={{
              background: colorTab[2],
              marginLeft: "6px",
            }}
          >
            Ejercicio 3
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TutorTesting
              id={0}
              setTabIndex={setTabIndex}
              setColorTab={setColorTab}
              setShowFeedback={setShowFeedback}
            />
          </TabPanel>
          <TabPanel>
            <TutorTesting
              id={1}
              setTabIndex={setTabIndex}
              setColorTab={setColorTab}
              setShowFeedback={setShowFeedback}
            />
          </TabPanel>
          <TabPanel>
            <TutorTesting
              id={2}
              setTabIndex={setTabIndex}
              setColorTab={setColorTab}
              setShowFeedback={setShowFeedback}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
});
