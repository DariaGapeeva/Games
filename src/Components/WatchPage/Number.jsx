import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import styled from "styled-components";
import circleImg from "../../img/circle.png";

// const DragPreviewImageStyled = styled(DragPreviewImage)`
//   width: 30px;
//   height: 30px;
//   background: red;
// `;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  line-height: 42px;
  text-align: center;
  border-radius: 50%;
  background: #343a40;
  border: 4px solid #343a40;
  color: lavender;
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  overflow: hidden;
  opacity: ${(props) => props.opacity};
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  cursor: move;
`;

const Number = ({ id, type, top, left }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: type, id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  const background = isDragging ? "lavender" : "rgb(52, 58, 64)";

  return (
    <>
      {/* <DragPreviewImageStyled connect={preview}></DragPreviewImageStyled> */}
      <Circle ref={drag} opacity={opacity} top={top} left={left}>
        {id}
      </Circle>
    </>
  );
};

export default Number;
