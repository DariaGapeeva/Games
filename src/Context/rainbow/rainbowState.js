import {
  rainbowReducer,
  RAINBOW_MOVE_TAPE,
  RAINBOW_MIX_TAPES,
} from "./rainbowReduser";
import { RainbowContext } from "./rainbowContext";
import { useReducer } from "react";

export const RainbowState = ({ children }) => {
  const initialState = {
    colors: [
      {
        id: "1",
        color: "red",
        column: "one",
        left: 0,
        height: 50,
        width: 200,
      },
      {
        id: "2",
        color: "orange",
        column: "one",
        left: 20,
        height: 50,
        width: 250,
      },
      {
        id: "3",
        color: "yellow",
        column: "one",
        left: 40,
        height: 50,
        width: 300,
      },
      {
        id: "4",
        color: "green",
        column: "one",
        left: 60,
        height: 50,
        width: 350,
      },
      {
        id: "5",
        color: "deepSkyBlue",
        column: "one",
        left: 80,
        height: 50,
        width: 400,
      },
      {
        id: "6",
        color: "blue",
        column: "one",
        left: 100,
        height: 50,
        width: 450,
      },
      {
        id: "7",
        color: "indigo",
        column: "one",
        left: 120,
        height: 50,
        width: 500,
      },
    ],
  };

  const sortState = {
    ...initialState,
    colors: initialState.colors.sort(() => Math.random() - 0.5),
  };

  const [state, dispatch] = useReducer(rainbowReducer, sortState);

  const moveTape = (sourceIndex, destinationIndex) => {
    dispatch({
      type: RAINBOW_MOVE_TAPE,
      sourceIndex,
      destinationIndex,
    });
  };

  const mixTapes = () => {
    dispatch({
      type: RAINBOW_MIX_TAPES,
    });
  };

  return (
    <RainbowContext.Provider
      value={{ colors: state.colors, moveTape, mixTapes }}
    >
      {children}
    </RainbowContext.Provider>
  );
};
