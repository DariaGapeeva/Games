import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

const SquareStyled = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  width: 100px;
  height: 100px;
  background: url("${(props) => props.pic}");
  cursor: move;
  opacity: ${(props) => props.opacity};
  z-index: 2;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Square = ({ type, pic, top, right, id }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: type, id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;
  return (
    <SquareStyled
      ref={drag}
      pic={pic}
      top={top}
      right={right}
      opacity={opacity}
    ></SquareStyled>
  );
};

export default Square;
