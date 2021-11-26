import React, { useEffect, useState, useRef } from "react";
import { Flex, Stack, Button, Text, VStack, Grid } from "@chakra-ui/react";
import TeX from "@matejmazur/react-katex";
import styles from "./Step.module.css";
import { ColumnDragPanel } from "../DragDrop/ColumnDragPanel";
import { Hint } from "./Hint";
import { MovableItemEquation } from "../DragDrop/MovableItemEquation";
import {
  COLUMN1,
  COLUMN2,
  COLUMN3,
  CORRECT_BUTTOM_NAME,
  CORRECT_ANSWER_COLOR,
  INCORRECT_ANSWER_COLOR,
  BACKGROUND_COLOR_PANEL,
} from "../../../types";
import { useAction } from "../../../utils/action";
import ExerciseContext from "../../../context/exercise/exerciseContext";

export const StepEquations = ({
  step,
  setNumStep,
  nStep,
  setDisableState,
  totalSteps,
  setStepCorrect,
  setColor,
  setNextExercise,
}) => {
  const [items, setItems] = useState(null);
  const [answer, setAnswer] = useState(true);
  const [answerTwo, setAnswerTwo] = useState(true);
  const inputRef = useRef();
  const [alert, setAlert] = useState({});
  const [openAlert, setOpenAlert] = useState(false);
  const [testAlert, setTestAlert] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const exerciseContext = useContext(ExerciseContext);
  const { content } = exerciseContext;
  const startAction = useAction({});

  useEffect(() => {
    setItems(step.answers);
    setAlert({});
    setOpenAlert(false);
    setAnswer(true);
    setAnswerTwo(true);
    setTestAlert(false);
    setIsCorrect(false);
  }, [step]);

  const checkValues = () => {
    setAnswer(true);
    setAnswerTwo(true);
    if (items) {
      for (const item of items) {
        if (item.column === COLUMN3) {
          setAnswerTwo(false);
        }
        if (item.column === COLUMN2) {
          setAnswer(false);
        }
      }
    }
  };

  useEffect(() => {
    checkValues();
  }, [items]);

  const returnItemsForColumn = (columnName, valores, isCorrect) => {
    return valores
      .filter((item) => item.column === columnName)
      .map((item) => (
        <MovableItemEquation
          type={step.type}
          key={item.id}
          value={item.value}
          setItems={setItems}
          answer={answer}
          answerTwo={answerTwo}
          isCorrect={isCorrect}
        />
      ));
  };

  const checkLastStep = () => {
    if (nStep == totalSteps - 1) {
      setNextExercise(true);
      startAction({
        verbName: "completeContnet",
        contentID: content,
        result: 1,
      });
    }
  };

  const checkAnswers = (e) => {
    e.preventDefault();

    const answerLeft = checkCorrectAnswer(COLUMN2);
    const answerRigth = checkCorrectAnswer(COLUMN3);
    setOpenAlert(true);

    if (answerLeft.length === 0 || answerRigth.length === 0) {
      setAlert({
        status: "info",
        text: "Escoge una respuesta",
      });
    } else {
      if (step.n_step === nStep) {
        if (
          (answerLeft[0].id === step.correct_answer[0] &&
            answerRigth[0].id === step.correct_answer[1]) ||
          (answerLeft[0].id === step.correct_answer[1] &&
            answerRigth[0].id === step.correct_answer[0])
        ) {
          startAction({
            verbName: "tryStep",
            contentID: content,
            result: 1,
            stepID: step.n_step,
            extra: { response: { answerLeft, answerRigth } },
          });
          setStepCorrect((state) => [
            ...state,
            [answerLeft[0].value, answerRigth[0].value],
          ]);
          setColor((prev) => [
            ...prev.slice(0, nStep),
            CORRECT_ANSWER_COLOR,
            ...prev.slice(nStep + 1),
          ]);
          setNumStep((prevState) => prevState + 1);
          setDisableState((prevState) => [...prevState, true]);
          setAlert({
            status: "success",
            text: "Respuesta Correcta",
          });
          setIsCorrect(true);
          checkLastStep();
        } else {
          startAction({
            verbName: "tryStep",
            contentID: content,
            result: 0,
            stepID: step.n_step,
            extra: { response: { answerLeft, answerRigth } },
          });
          setColor((prev) => [
            ...prev.slice(0, nStep),
            INCORRECT_ANSWER_COLOR,
            ...prev.slice(nStep + 1),
          ]);
          setAlert({
            status: "error",
            text: "Respuesta Incorrecta",
          });
        }
      } else {
      }
    }
  };

  const checkCorrectAnswer = (column) => {
    return items.filter((item) => item.column === column);
  };

  return (
    <Stack>
      <Stack>
        <VStack
          style={{
            borderRadius: 10,
            backgroundColor: BACKGROUND_COLOR_PANEL,
            padding: 10,
            width: "100%",
          }}
        >
          <Stack direction={{ base: ["row", "column"], xl: ["column", "row"] }}>
            <Flex marginRight={{ xl: "250px" }} margin={{ base: "auto" }}>
              <Text
                display={{ base: "none", xl: "block" }}
                margin={{ base: "auto" }}
              >
                {step.left_text}
              </Text>

              <Flex>
                {step.input_labels && (
                  <TeX
                    style={{
                      fontSize: "12px",
                      margin: "auto",
                    }}
                    math={step.input_labels}
                    as="figcaption"
                  />
                )}
              </Flex>
              <Flex>
                <Flex>
                  <ColumnDragPanel
                    title={COLUMN2}
                    className={`${styles["column"]} ${styles["second-column"]}`}
                    style={{ padding: 10 }}
                  >
                    <div>
                      {items && returnItemsForColumn(COLUMN2, items, isCorrect)}
                    </div>
                  </ColumnDragPanel>
                  <Text
                    style={{
                      paddingTop: "25px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  >
                    =
                  </Text>
                  <ColumnDragPanel
                    title={COLUMN3}
                    className={`${styles["column"]} ${styles["second-column"]}`}
                  >
                    <div>
                      {items && returnItemsForColumn(COLUMN3, items, isCorrect)}
                    </div>
                  </ColumnDragPanel>
                </Flex>
              </Flex>
            </Flex>
            <Stack marginLeft={{ base: "0px", xl: "-180px" }}>
              <Grid
                display={{ xl: "none", base: "grid" }}
                style={{ margin: "10px" }}
                templateColumns="repeat(2, 1fr)"
                gap={6}
              >
                <Button colorScheme="blue" onClick={checkAnswers}>
                  {CORRECT_BUTTOM_NAME}
                </Button>

                <Hint hints={step.hints} nStep={nStep} />
              </Grid>

              <Stack display={{ xl: "block", base: "none" }}>
                <Flex>
                  <div style={{ paddingRight: "5px" }}>
                    <Button colorScheme="blue" onClick={checkAnswers}>
                      {CORRECT_BUTTOM_NAME}
                    </Button>
                  </div>
                  <div style={{ paddingRight: "5px" }}>
                    <Hint hints={step.hints} nStep={nStep} />
                  </div>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </VStack>
        <Flex style={{ marginTop: 30 }}>
          <div className={styles.container}>
            <ColumnDragPanel
              title={COLUMN1}
              className={`${styles["column"]} ${styles["first-column"]}`}
            >
              {items && returnItemsForColumn(COLUMN1, items, isCorrect)}
            </ColumnDragPanel>
          </div>
        </Flex>
      </Stack>
    </Stack>
  );
};
