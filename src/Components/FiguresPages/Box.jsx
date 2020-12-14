import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const BoxStylded = styled.div`
  width: 100px;
  height: 100px;
  margin: 30px 50px;
  background: url("${(props) => props.border}");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  
}
`;

const Box = ({ moveFigure, type, x, y, border }) => {
  const [{ isOver }, drop] = useDrop({
    accept: type,
    drop: () => moveFigure(x, y),

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div>
      <BoxStylded ref={drop} isOver={isOver} border={border}></BoxStylded>
    </div>
  );
};

export default Box;
