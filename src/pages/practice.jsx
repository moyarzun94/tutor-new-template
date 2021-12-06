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

  const [colorTab, setColorTab] = useState([
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);
  const HandleIndex = (e) => {
    e.preventDefault();
    setTabIndex((prev) => prev + 1);
  };
  return (
    <>
      <FeedbackTesting showFeedback={showFeedback} />
      <Tabs
        variant="unstyled"
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab
            style={{
              background:
                tabIndex === 0
                  ? " #8da5f5 "
                  : colorTab[0] === "white"
                  ? "white"
                  : " #8df5ad",
              marginLeft: "6px",
            }}
          >
            Ejercicio 1
          </Tab>
          <Tab
            isDisabled={colorTab[0] === "white" ? true : false}
            style={{
              background:
                tabIndex === 1
                  ? " #8da5f5 "
                  : colorTab[1] === "white"
                  ? "white"
                  : " #8df5ad",
              marginLeft: "6px",
            }}
          >
            Ejercicio 2
          </Tab>
          <Tab
            isDisabled={colorTab[1] === "white" ? true : false}
            style={{
              background:
                tabIndex === 2
                  ? " #8da5f5 "
                  : colorTab[2] === "white"
                  ? "white"
                  : " #8df5ad",
              marginLeft: "6px",
            }}
          >
            Ejercicio 3
          </Tab>

          <Tab
            isDisabled={colorTab[2] === "white" ? true : false}
            style={{
              background:
                tabIndex === 3
                  ? " #8da5f5 "
                  : colorTab[3] === "white"
                  ? "white"
                  : " #8df5ad",
              marginLeft: "6px",
            }}
          >
            Ejercicio 4
          </Tab>

          <Tab
            isDisabled={colorTab[3] === "white" ? true : false}
            style={{
              background:
                tabIndex === 4
                  ? " #8da5f5 "
                  : colorTab[4] === "white"
                  ? "white"
                  : " #8df5ad",
              marginLeft: "6px",
            }}
          >
            Ejercicio 5
          </Tab>

          <Tab
            isDisabled={colorTab[4] === "white" ? true : false}
            style={{
              background:
                tabIndex === 5
                  ? " #8da5f5 "
                  : colorTab[5] === "white"
                  ? "white"
                  : " #8df5ad",
              marginLeft: "6px",
            }}
          >
            Ejercicio 6
          </Tab>

          <Tab
            isDisabled={colorTab[5] === "white" ? true : false}
            style={{
              background:
                tabIndex === 6
                  ? " #8da5f5 "
                  : colorTab[6] === "white"
                  ? "white"
                  : " #8df5ad",
              marginLeft: "6px",
            }}
          >
            Ejercicio 7
          </Tab>

          <Tab
            isDisabled={colorTab[6] === "white" ? true : false}
            style={{
              background:
                tabIndex === 7
                  ? " #8da5f5 "
                  : colorTab[7] === "white"
                  ? "white"
                  : " #8df5ad",
              marginLeft: "6px",
            }}
          >
            Ejercicio 8
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
          <TabPanel>
            <TutorTesting
              id={3}
              setTabIndex={setTabIndex}
              setColorTab={setColorTab}
              setShowFeedback={setShowFeedback}
            />
          </TabPanel>
          <TabPanel>
            <TutorTesting
              id={4}
              setTabIndex={setTabIndex}
              setColorTab={setColorTab}
              setShowFeedback={setShowFeedback}
            />
          </TabPanel>
          <TabPanel>
            <TutorTesting
              id={5}
              setTabIndex={setTabIndex}
              setColorTab={setColorTab}
              setShowFeedback={setShowFeedback}
            />
          </TabPanel>
          <TabPanel>
            <TutorTesting
              id={6}
              setTabIndex={setTabIndex}
              setColorTab={setColorTab}
              setShowFeedback={setShowFeedback}
            />
          </TabPanel>
          <TabPanel>
            <TutorTesting
              id={7}
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
