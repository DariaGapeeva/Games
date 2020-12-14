import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Puzzles from "./Puzzles";

const PuzzlesPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Puzzles />
    </DndProvider>
  );
};

export default PuzzlesPage;
