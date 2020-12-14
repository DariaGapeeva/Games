import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

const FigureStylded = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  background: url("${(props) => props.figure}");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  opacity: ${(props) => props.opacity};
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  cursor: move;
`;

const Figure = ({ left, top, type, figure }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: type },
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult();
    //   if (item && dropResult) {
    //     alert(`You dropped success!`);
    //   }
    // },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;
  return (
    <FigureStylded
      ref={drag}
      opacity={opacity}
      left={left}
      top={top}
      figure={figure}
    />
  );
};

export default Figure;
