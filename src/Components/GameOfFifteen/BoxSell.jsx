import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";

const BoxSellStyled = styled.div`
  width: 80px;
  heihgt: 80px;
  border: 2px solid #808080;
  text-align: center;
  line-height: 80px;
  font-size: 32px;
  font-weight: 700;
  background-color: ${(props) => props.backgroundColor};
`;

const BoxSell = ({ type, destination, move }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: type,
    drop: (item) => move(destination, item.source),

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "#343a40";
  if (isActive) {
    backgroundColor = "#343a40";
  }

  return <BoxSellStyled ref={drop} backgroundColor={backgroundColor} />;
};

export default BoxSell;
