import React, { useState } from "react";
import styled from "styled-components";
import { PuzzlesTypes } from "../../ItemTypes";
import Square from "./Square";
import Puzzle from "./Puzzle";
import Button from "../Button";

import Pic1 from "../../img/puzzles/cat/cat1.png";
import Pic2 from "../../img/puzzles/cat/cat2.png";
import Pic3 from "../../img/puzzles/cat/cat3.png";
import Pic4 from "../../img/puzzles/cat/cat4.png";
import Pic5 from "../../img/puzzles/cat/cat5.png";
import Pic6 from "../../img/puzzles/cat/cat6.png";
import Pic7 from "../../img/puzzles/cat/cat7.png";
import Pic8 from "../../img/puzzles/cat/cat8.png";
import Pic9 from "../../img/puzzles/cat/cat9.png";
import { calculate } from "./../../commonFunctions";

const Container = styled.div`
  display: flex;
  height: 500px;
`;

const ContainerLeft = styled.div`
  width: 50%;
  height: 100%;
  background: #343a40;
  position: relative;

  border: 1px solid grey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContainerRight = styled.div`
  width: 50%;
  height: 100%;
  background: #343a40;
  position: relative;
  border: 1px solid grey;
`;

const ContainerPuzzlesLeft = styled.div`
  width: 300px;
  height: 300px;
  margin: 100px 50px 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const ContainerPuzzlesRight = styled.div`
  width: 300px;
  height: 300px;
  margin: 100px auto 0 50px;
  display: flex;
  flex-wrap: wrap;
`;

const Puzzles = () => {
  const pictures = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9];

  const initialSquares = [
    { id: 1, type: PuzzlesTypes.TYPE, top: 100, right: 250 },
    { id: 2, type: PuzzlesTypes.TYPE, top: 100, right: 150 },
    { id: 3, type: PuzzlesTypes.TYPE, top: 100, right: 50 },
    { id: 4, type: PuzzlesTypes.TYPE, top: 200, right: 250 },
    { id: 5, type: PuzzlesTypes.TYPE, top: 200, right: 150 },
    { id: 6, type: PuzzlesTypes.TYPE, top: 200, right: 50 },
    { id: 7, type: PuzzlesTypes.TYPE, top: 300, right: 250 },
    { id: 8, type: PuzzlesTypes.TYPE, top: 300, right: 150 },
    {
      id: 9,
      type: PuzzlesTypes.TYPE,
      top: 300,
      right: 50,
    },
  ];

  const [squares, setSquares] = useState(() =>
    calculate(pictures, initialSquares)
  );

  const moveFigure = (id, left, top) => {
    setSquares(
      squares.map((item) =>
        item.id === id ? { ...item, right: left, top: top } : item
      )
    );
  };
  const frames = [
    {
      id: 1,
      type: PuzzlesTypes.TYPE,
      x: -152,
      y: 100,
      xBack: 250,
      yBack: 100,
      moveFigure: moveFigure,
      top: 100,
      left: 50,
    },
    {
      id: 2,
      type: PuzzlesTypes.TYPE,
      x: -252,
      y: 100,
      xBack: 150,
      yBack: 100,
      moveFigure: moveFigure,
      top: 100,
      left: 150,
    },
    {
      id: 3,
      type: PuzzlesTypes.TYPE,
      x: -352,
      y: 100,
      xBack: 50,
      yBack: 100,
      moveFigure: moveFigure,
      top: 100,
      left: 250,
    },
    {
      id: 4,
      type: PuzzlesTypes.TYPE,
      x: -152,
      y: 200,
      xBack: 250,
      yBack: 200,
      moveFigure: moveFigure,
      top: 200,
      left: 50,
    },
    {
      id: 5,
      type: PuzzlesTypes.TYPE,
      x: -252,
      y: 200,
      xBack: 150,
      yBack: 200,
      moveFigure: moveFigure,
      top: 200,
      left: 150,
    },
    {
      id: 6,
      type: PuzzlesTypes.TYPE,
      x: -352,
      y: 200,
      xBack: 50,
      yBack: 200,
      moveFigure: moveFigure,
      top: 200,
      left: 250,
    },
    {
      id: 7,
      type: PuzzlesTypes.TYPE,
      x: -152,
      y: 300,
      xBack: 250,
      yBack: 300,
      moveFigure: moveFigure,
      top: 300,
      left: 50,
    },
    {
      id: 8,
      type: PuzzlesTypes.TYPE,
      x: -252,
      y: 300,
      xBack: 150,
      yBack: 300,
      moveFigure: moveFigure,
      top: 300,
      left: 150,
    },
    {
      id: 9,
      type: PuzzlesTypes.TYPE,
      x: -352,
      y: 300,
      xBack: 50,
      yBack: 300,
      moveFigure: moveFigure,
      top: 300,
      left: 250,
    },
  ];

  const onMix = () => {
    setSquares(() => calculate(pictures, initialSquares));
  };

  return (
    <div className="container">
      <h3 className="mt-3 mb-5">make the right picture</h3>
      <Container>
        <ContainerLeft>
          {squares.map((item) => (
            <Square
              key={item.id}
              type={item.type}
              pic={item.pic}
              top={item.top}
              right={item.right}
              id={item.id}
            />
          ))}
          <ContainerPuzzlesLeft>
            {frames.map((item) => (
              <Puzzle
                key={item.id}
                type={item.type}
                moveFigure={item.moveFigure}
                x={item.xBack}
                y={item.yBack}
              />
            ))}
          </ContainerPuzzlesLeft>
        </ContainerLeft>
        <ContainerRight>
          <ContainerPuzzlesRight>
            {frames.map((item) => (
              <Puzzle
                key={item.id}
                type={item.type}
                moveFigure={item.moveFigure}
                x={item.x}
                y={item.y}
              />
            ))}
          </ContainerPuzzlesRight>
        </ContainerRight>
      </Container>
      <Button message={"Mix"} onMix={onMix} />
    </div>
  );
};

export default Puzzles;
