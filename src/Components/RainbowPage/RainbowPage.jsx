import React, { useContext } from "react";
import styled from "styled-components";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { RainbowContext } from "../../Context/rainbow/rainbowContext";
import Tape from "./Tape";
import Button from "../Button";

const Rainbow = styled.div`
  background: #343a40;
  padding: 50px;
  width: 100%;
`;

const RainbowPage = () => {
  const { colors, moveTape, mixTapes } = useContext(RainbowContext);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      moveTape(source.index, destination.index);
    }
  };

  const onMix = () => {
    mixTapes();
  };
  return (
    <div className="container">
      <h3 className="mt-3 mb-5">make the rainbow pyramid</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"one"}>
          {(provided, snapshot) => (
            <Rainbow
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {colors.map((item, index) => (
                <Tape
                  key={item.id}
                  id={item.id}
                  index={index}
                  color={item.color}
                  height={item.height}
                  width={item.width}
                ></Tape>
              ))}
              {provided.placeholder}
            </Rainbow>
          )}
        </Droppable>
      </DragDropContext>

      <Button message={"Mix"} onMix={onMix} />
    </div>
  );
};

export default RainbowPage;
