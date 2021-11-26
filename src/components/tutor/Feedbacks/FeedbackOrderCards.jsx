import React from "react";
import { Text, Container, Stack } from "@chakra-ui/react";
export const FeedbackOrderCards = () => {
   return (
      <Container
         style={{
            fontSize: "17px",
            fontFamily: "arial",
         }}
      >
         <Stack>
            <Text
               style={{
                  fontSize: "20px",
                  justifyContent: "center",
                  padding: "7px",
                  alignSelf: "center",
               }}
            >
               !Así se hace!
            </Text>
            <Text
               style={{
                  fontSize: "20px",
                  justifyContent: "center",
                  padding: "7px",
                  alignSelf: "center",
               }}
            >
               Felicidades por ordenar correctamente el ejercicio
            </Text>
         </Stack>
      </Container>
   );
};
