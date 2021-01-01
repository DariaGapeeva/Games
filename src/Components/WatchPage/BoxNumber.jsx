import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const BoxNumberStyled = styled.div`
  background: ${(props) => props.backgroundColor};
  border: 4px solid #343a40;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

const BoxNumber = ({ type, top, left, moveFigure }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: type,
    drop: (item) => moveFigure(item.id, top, left),

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

  return (
    <BoxNumberStyled
      ref={drop}
      backgroundColor={backgroundColor}
      top={top}
      left={left}
    ></BoxNumberStyled>
  );
};

export default BoxNumber;
