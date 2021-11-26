import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import TeX from "@matejmazur/react-katex";

import { useDisclosure } from "@chakra-ui/hooks";
export const FeedbackTesting = ({ showFeedback }) => {
  const [showF, setShowF] = useState(false);

  useEffect(() => {
    setShowF(showFeedback);
  }, [showFeedback]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={showF} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Retroalimentación General</ModalHeader>
          <ModalCloseButton onClick={() => setShowF(false)} />
          <ModalBody style={{ fontSize: "20px" }}>
            <Text>Para resolver una ecuación cuadrática, cuya forma es</Text>
            <TeX
              math={"ax²+-bx+c=0 , a,b,c \\in \\R \\wedge a \\neq 0"}
              as="figcaption"
              style={{ textAlign: "center" }}
            />
            <Text>Se utiliza la formúla general</Text>
            <TeX
              math={"x = \\frac {-b \\pm \\sqrt {b^2 - 4ac}}{2a}"}
              as="figcaption"
              style={{ textAlign: "center" }}
            />
            <Text>Así el conjunto de solucion se define como:</Text>
            <TeX
              math={
                "S = \\{ x = \\frac {-b - \\sqrt {b^2 - 4ac}}{2a}, x = \\frac {-b + \\sqrt {b^2 - 4ac}}{2a} \\}  , si \\hspace{0.2cm}  b²-4ac > 0  "
              }
              as="figcaption"
              style={{ alignItems: "center" }}
            />
            <TeX
              math={
                "S = \\{ x = \\frac {-b }{2a} \\}  , si \\hspace{0.2cm}  b²-4ac = 0  "
              }
              as="figcaption"
              style={{ alignItems: "center" }}
            />
            <TeX
              math={"S = \\emptyset  , si \\hspace{0.2cm}  b²-4ac < 0  "}
              as="figcaption"
              style={{ alignItems: "center" }}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={() => setShowF(false)}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
