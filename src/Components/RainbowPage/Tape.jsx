import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Item = styled.div`
  margin-top: 5px;
`;

const ItemColor = styled.div`
  background: ${(props) => props.color};
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin: 0 auto;
  border-radius: 10px;
`;

const Tape = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index} key={props.id}>
      {(provided, snapshot) => (
        <Item
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {" "}
          <ItemColor
            color={props.color}
            height={props.height}
            width={props.width}
          />
        </Item>
      )}
    </Draggable>
  );
};

export default Tape;
