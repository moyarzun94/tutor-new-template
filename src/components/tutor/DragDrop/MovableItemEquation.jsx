import React, { useState } from "react";
import styles from "./MovableItem.module.css";
import { useDrag } from "react-dnd";
import TeX from "@matejmazur/react-katex";
import { useEffect } from "react";
import { BOX, COLUMN1, COLUMN2, COLUMN3 } from "../../../types";

const style = {
   border: "1px dashed gray",
   padding: "0.5rem 1rem",
   marginBottom: ".5rem",
   backgroundColor: "white",
   cursor: "move",
};

export const MovableItemEquation = ({
   value,
   setItems,
   answer,
   answerTwo,
   isCorrect,
}) => {
   const [isCorrecto, setIsCorrect] = useState(true);

   useEffect(() => {
      setIsCorrect(!isCorrect);
   }, [isCorrect]);
   const changeItemColumn = (currentItem, columnName) => {
      setItems((prevState) => {
         return prevState.map((e) => {
            return {
               ...e,
               column: e.value === currentItem.value ? columnName : e.column,
            };
         });
      });
   };
   const [{ isDragging }, drag] = useDrag({
      canDrag: () => isCorrecto,
      item: { value },
      type: BOX,
      end: (item, monitor) => {
         const dropResult = monitor.getDropResult();
         if (dropResult && dropResult.name.title === COLUMN1) {
            changeItemColumn(item, COLUMN1);
         }
         if (dropResult && dropResult.name.title === COLUMN2 && answer) {
            changeItemColumn(item, COLUMN2);
         }
         if (dropResult && dropResult.name.title === COLUMN3 && answerTwo) {
            changeItemColumn(item, COLUMN3);
         }
      },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   });

   const opacity = isDragging ? 0.2 : 1;

   return (
      <div ref={drag} className={styles["movable-item"]} style={{ style }}>
         <TeX
            math={value}
            as="figcaption"
            style={{ alignItems: "center", fontSize: "12px" }}
         />
      </div>
   );
};
