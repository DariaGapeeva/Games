import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Watch from "./Watch";

const WatchPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Watch />
    </DndProvider>
  );
};

export default WatchPage;
