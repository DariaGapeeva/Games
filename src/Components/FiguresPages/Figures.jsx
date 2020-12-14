import React, { useState } from "react";
import styled from "styled-components";
import { ItemTypes } from "../../ItemTypes";
import Box from "./Box";
import Figure from "./Figure";

import trianglePic from "../../img/triangle.png";
import triangleBorder from "../../img/triangleborder.png";
import circlePic from "../../img/circle.png";
import circleBorder from "../../img/circleborder.png";
import squarePic from "../../img/square.png";
import squareBorder from "../../img/squareborder.png";
import ellipsePic from "../../img/ellipse.png";
import ellipseBorder from "../../img/ellipseborder.png";
import hexagonPic from "../../img/hexagon.png";
import hexagonBorder from "../../img/hexagonborder.png";
import starPic from "../../img/star.png";
import starBorder from "../../img/starborder.png";

import wood from "../../img/wood.png";

const BorderContainer = styled.div`
  margin: 220px auto 0;
  display: flex;
  background: url("${wood}");
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 20px;
  max-width: 800px;
  padding: 60px;
  position: relative;
`;

const FiguresPages = () => {
  const initialFigures = [
    { id: 1, top: -150, left: 0, figure: squarePic, type: ItemTypes.SQUARE },
    { id: 2, top: -150, left: 140, figure: circlePic, type: ItemTypes.CIRCLE },
    {
      id: 3,
      top: -150,
      left: 280,
      figure: trianglePic,
      type: ItemTypes.TRIANGLE,
    },
    {
      id: 4,
      top: -150,
      left: 420,
      figure: ellipsePic,
      type: ItemTypes.ELLIPSE,
    },
    { id: 5, top: -150, left: 560, figure: starPic, type: ItemTypes.STAR },
    {
      id: 6,
      top: -150,
      left: 700,
      figure: hexagonPic,
      type: ItemTypes.HEXAGON,
    },
  ];

  const [figures, setFigures] = useState(initialFigures);

  const moveFigure = (id) => {
    return (left, top) =>
      setFigures(
        figures.map((item) =>
          item.id === id ? { ...item, left: left, top: top } : item
        )
      );
  };

  const boxesBorder = [
    {
      id: 1,
      moveFigure: moveFigure(1),
      border: squareBorder,
      x: 120,
      y: 90,
      type: ItemTypes.SQUARE,
    },
    {
      id: 2,
      moveFigure: moveFigure(2),
      border: circleBorder,
      x: 350,
      y: 90,
      type: ItemTypes.CIRCLE,
    },
    {
      id: 3,
      moveFigure: moveFigure(3),
      border: triangleBorder,
      x: 578,
      y: 90,
      type: ItemTypes.TRIANGLE,
    },
    {
      id: 4,
      moveFigure: moveFigure(4),
      border: ellipseBorder,
      x: 121.5,
      y: 250,
      type: ItemTypes.ELLIPSE,
    },
    {
      id: 5,
      moveFigure: moveFigure(5),
      border: starBorder,
      x: 350,
      y: 250,
      type: ItemTypes.STAR,
    },
    {
      id: 6,
      moveFigure: moveFigure(6),
      border: hexagonBorder,
      x: 578,
      y: 250,
      type: ItemTypes.HEXAGON,
    },
  ];

  const onStart = () => {
    setFigures(initialFigures);
  };

  return (
    <div className="container">
      <BorderContainer>
        {figures.map((item) => (
          <Figure
            key={item.id}
            left={item.left}
            top={item.top}
            figure={item.figure}
            type={item.type}
          ></Figure>
        ))}

        {boxesBorder.map((item) => (
          <Box
            key={item.id}
            moveFigure={item.moveFigure}
            border={item.border}
            x={item.x}
            y={item.y}
            type={item.type}
          />
        ))}
      </BorderContainer>
      <div className="mt-4 text-center">
        <button className="btn btn-success " onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default FiguresPages;
