import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const SellStyled = styled.div`
  width: 80px;
  heihgt: 80px;
  border: 2px solid #808080;
  color: #808080;
  background: #e0ffff;
  text-align: center;
  line-height: 80px;
  font-size: 32px;
  font-weight: 700;
  opacity: ${(props) => props.opacity};
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  cursor: move;
  z-index: 2;
  display: ${(props) => props.display};
`;

const Sell = ({ pic, source, type, top, left, display }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: type, source },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <SellStyled
      ref={drag}
      opacity={opacity}
      top={top}
      left={left}
      display={display}
    >
      {pic}
    </SellStyled>
  );
};

export default Sell;
