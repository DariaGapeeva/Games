import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Number from "./Number";
import { WatchTypes } from "../../ItemTypes";
import BoxNumber from "./BoxNumber";
import Button from "../Button";

const Container = styled.div`
  background: #343a40;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const CircleContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: lavender;
  position: relative;
`;

const ContainerNumbers = styled.div`
  width: 440px;
  height: 160px;
  margin: 20px auto 0;
  background: lavender;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #343a40;
`;
const ArrowSec = styled.div`
  position: absolute;
  width: 4px;
  height: 125px;
  top: 75px;
  left: 198px;
  background: #343a40;
  transition: all 0.3s ease 0s;
  transform: rotate(${(props) => props.degSecValue}deg);
  transform-origin: 50% 100%;
`;
const ArrowMin = styled.div`
  position: absolute;
  width: 6px;
  height: 100px;
  top: 95px;
  left: 197px;
  background: #343a40;
  transition: all 0.6s ease 0s;
  transform: rotate(${(props) => props.degMinValue}deg);
  transform-origin: 50% 100%;
`;

const ArrowHour = styled.div`
  position: absolute;
  width: 8px;
  height: 90px;
  top: 112px;
  left: 196px;
  background: #343a40;
  transition: all 0.6s ease 0s;
  transform: rotate(${(props) => props.degHourValue}deg);
  transform-origin: 50% 100%;
`;

const Watch = () => {
  const initialNumbers = [
    { id: 1, type: WatchTypes.WATCH_NUMBER, top: 460, left: 0 },
    { id: 2, type: WatchTypes.WATCH_NUMBER, top: 460, left: 70 },
    { id: 3, type: WatchTypes.WATCH_NUMBER, top: 460, left: 140 },
    { id: 4, type: WatchTypes.WATCH_NUMBER, top: 460, left: 210 },
    { id: 5, type: WatchTypes.WATCH_NUMBER, top: 460, left: 280 },
    { id: 6, type: WatchTypes.WATCH_NUMBER, top: 460, left: 350 },
    { id: 7, type: WatchTypes.WATCH_NUMBER, top: 530, left: 0 },
    { id: 8, type: WatchTypes.WATCH_NUMBER, top: 530, left: 70 },
    { id: 9, type: WatchTypes.WATCH_NUMBER, top: 530, left: 140 },
    { id: 10, type: WatchTypes.WATCH_NUMBER, top: 530, left: 210 },
    { id: 11, type: WatchTypes.WATCH_NUMBER, top: 530, left: 280 },
    { id: 12, type: WatchTypes.WATCH_NUMBER, top: 530, left: 350 },
  ];

  const initialTime = new Date();

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(() => new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const [numbers, setNumbers] = useState(initialNumbers);

  const moveFigure = (id, top, left) => {
    setNumbers(
      numbers.map((item) =>
        item.id === id ? { ...item, left: left, top: top } : item
      )
    );
  };
  const initialBoxes = [
    { id: 0, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 1, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 2, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 3, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 4, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 5, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 6, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 7, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 8, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 9, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 10, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
    { id: 11, type: WatchTypes.WATCH_NUMBER, moveFigure: moveFigure },
  ];
  let boxes = initialBoxes.map((item) => ({
    ...item,
    top: Math.round(
      200 -
        50 / 2 -
        (200 - 50 / 2 - 10) * Math.cos((item.id * 2 * Math.PI) / 12)
    ),
    left: Math.round(
      200 -
        50 / 2 +
        (200 - 50 / 2 - 10) * Math.sin((item.id * 2 * Math.PI) / 12)
    ),
  }));

  const onStart = () => {
    setNumbers(initialNumbers);
  };

  return (
    <div className="container">
      <h3 className="mt-3 mb-5">make the right watch</h3>
      <Container>
        <CircleContainer>
          {boxes.map((item, index) => (
            <BoxNumber
              key={item.id}
              type={item.type}
              top={item.top}
              left={item.left}
              moveFigure={item.moveFigure}
            />
          ))}
          {numbers.map((item, index) => (
            <Number
              key={item.id}
              id={item.id}
              type={item.type}
              moveFigure={item.moveFigure}
              top={item.top}
              left={item.left}
            />
          ))}
          <Center> </Center>
          <ArrowSec
            degSecValue={
              (time.getSeconds() +
                time.getMinutes() * 60 +
                time.getHours() * 60 * 60) *
              6
            }
          >
            {" "}
          </ArrowSec>
          <ArrowMin
            degMinValue={(time.getMinutes() + time.getHours() * 60) * 6}
          >
            {" "}
          </ArrowMin>
          <ArrowHour
            degHourValue={
              (time.getHours() +
                time.getMinutes() / 60 +
                time.getSeconds() / 3600) *
              30
            }
          >
            {" "}
          </ArrowHour>
        </CircleContainer>
      </Container>
      <ContainerNumbers></ContainerNumbers>
      <Button message="Start" onMix={onStart}></Button>
    </div>
  );
};

export default Watch;
