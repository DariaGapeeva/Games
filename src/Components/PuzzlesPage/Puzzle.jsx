import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";

const PuzzleStyled = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid grey;
  background-color: ${(props) => props.backgroundColor};
`;

const Puzzle = ({ type, moveFigure, x, y }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: type,
    drop: (item) => moveFigure(item.id, x, y),

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let backgroundColor = "lavender";
  if (isActive) {
    backgroundColor = "pink";
  }
  return <PuzzleStyled ref={drop} backgroundColor={backgroundColor} />;
};

export default Puzzle;
