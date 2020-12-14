import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Figures from "./Figures";

const FiguresPages = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Figures />
    </DndProvider>
  );
};

export default FiguresPages;
