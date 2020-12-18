import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import GameOfFifteen from "./GameOfFifteen";

const GameOfFifteenPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GameOfFifteen />
    </DndProvider>
  );
};

export default GameOfFifteenPage;
