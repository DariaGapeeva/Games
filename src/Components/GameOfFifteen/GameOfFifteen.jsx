import React, { useState } from "react";
import styled from "styled-components";
import Sell from "./Sell";
import BoxSell from "./BoxSell";
import Button from "../Button";
import { FifteenTypes } from "./../../ItemTypes";
import { calculate } from "./../../commonFunctions";

const Container = styled.div`
  width: 100%;
  background: #343a40;
  padding: 100px;
`;

const BoxContainer = styled.div`
  width: 324px;
  height: 340px;
  margin: 0 auto;
  border: 2px solid #808080;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const BoxSellsContainer = styled.div`
  width: 324px;
  height: 340px;
  margin: 0 auto;
  border: 2px solid #808080;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: -2px;
  left: -2px;
`;

const GameOfFifteen = () => {
  const pictures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const initialSells = [
    {
      id: 1,
      type: FifteenTypes.FIFTEEN,
      top: 2,
      left: 0,
      display: "block",
    },
    {
      id: 2,
      type: FifteenTypes.FIFTEEN,
      top: 2,
      left: 80,
      display: "block",
    },
    {
      id: 3,
      type: FifteenTypes.FIFTEEN,
      top: 2,
      left: 160,
      display: "block",
    },
    {
      id: 4,
      type: FifteenTypes.FIFTEEN,
      top: 2,
      left: 240,
      display: "block",
    },
    {
      id: 5,
      type: FifteenTypes.FIFTEEN,
      top: 85,
      left: 0,
      display: "block",
    },
    {
      id: 6,
      type: FifteenTypes.FIFTEEN,
      top: 85,
      left: 80,
      display: "block",
    },
    {
      id: 7,
      type: FifteenTypes.FIFTEEN,
      top: 85,
      left: 160,
      display: "block",
    },
    {
      id: 8,
      type: FifteenTypes.FIFTEEN,
      top: 85,
      left: 240,
      display: "block",
    },
    {
      id: 9,
      type: FifteenTypes.FIFTEEN,
      top: 168,
      left: 0,
      display: "block",
    },
    {
      id: 10,
      type: FifteenTypes.FIFTEEN,
      top: 168,
      left: 80,
      display: "block",
    },
    {
      id: 11,
      type: FifteenTypes.FIFTEEN,
      top: 168,
      left: 160,
      display: "block",
    },
    {
      id: 12,
      type: FifteenTypes.FIFTEEN,
      top: 168,
      left: 240,
      display: "block",
    },
    {
      id: 13,
      type: FifteenTypes.FIFTEEN,
      top: 251,
      left: 0,
      display: "block",
    },
    {
      id: 14,
      type: FifteenTypes.FIFTEEN,
      top: 251,
      left: 80,
      display: "block",
    },
    {
      id: 15,
      type: FifteenTypes.FIFTEEN,
      top: 251,
      left: 160,
      display: "block",
    },
    {
      id: 16,
      type: FifteenTypes.FIFTEEN,
      top: 251,
      left: 240,
      display: "none",
    },
  ];

  const [sells, setSells] = useState(() => calculate(pictures, initialSells));

  const boxSells = [
    { id: 1, type: FifteenTypes.FIFTEEN },
    { id: 2, type: FifteenTypes.FIFTEEN },
    { id: 3, type: FifteenTypes.FIFTEEN },
    { id: 4, type: FifteenTypes.FIFTEEN },
    { id: 5, type: FifteenTypes.FIFTEEN },
    { id: 6, type: FifteenTypes.FIFTEEN },
    { id: 7, type: FifteenTypes.FIFTEEN },
    { id: 8, type: FifteenTypes.FIFTEEN },
    { id: 9, type: FifteenTypes.FIFTEEN },
    { id: 10, type: FifteenTypes.FIFTEEN },
    { id: 11, type: FifteenTypes.FIFTEEN },
    { id: 12, type: FifteenTypes.FIFTEEN },
    { id: 13, type: FifteenTypes.FIFTEEN },
    { id: 14, type: FifteenTypes.FIFTEEN },
    { id: 15, type: FifteenTypes.FIFTEEN },
    { id: 16, type: FifteenTypes.FIFTEEN },
  ];

  function reverceItem(array, destination, source, valueTop, valueLeft) {
    let newArray = [...array];
    let emptySell = newArray.find((item, index) => index === destination);
    let sourceSell = newArray.find((item, index) => index === source);
    emptySell.top -= valueTop;
    emptySell.left -= valueLeft;
    sourceSell.top += valueTop;
    sourceSell.left += valueLeft;
    newArray.splice(destination, 1, sourceSell);
    newArray.splice(source, 1, emptySell);
    return newArray;
  }

  function move(destination, source) {
    if (destination - source === 4) {
      setSells((prev) => reverceItem(prev, destination, source, 83, 0));
    }
    if (destination - source === -4) {
      setSells((prev) => reverceItem(prev, destination, source, -83, 0));
    }

    if (destination - source === 1) {
      setSells((prev) => reverceItem(prev, destination, source, 0, 80));
    }
    if (destination - source === -1) {
      setSells((prev) => reverceItem(prev, destination, source, 0, -80));
    }
  }

  const onMix = () => {
    setSells(() => calculate(pictures, initialSells));
  };
  return (
    <div className="container">
      <h3 className="mt-3 mb-5">arrange the numbers in order </h3>
      <Container>
        <BoxContainer>
          {sells.map((item, index) => (
            <Sell
              key={item.id}
              pic={item.pic}
              type={item.type}
              top={item.top}
              left={item.left}
              source={index}
              display={item.display}
            />
          ))}

          <BoxSellsContainer>
            {boxSells.map((item, index) => (
              <BoxSell
                key={item.id}
                type={item.type}
                destination={index}
                move={move}
              />
            ))}
          </BoxSellsContainer>
        </BoxContainer>
      </Container>
      <Button message={"Mix"} onMix={onMix} />
    </div>
  );
};

export default GameOfFifteen;
