export const RAINBOW_MOVE_TAPE = "RAINBOW_MOVE_TAPE";
export const RAINBOW_MIX_TAPES = "RAINBOW_MIX_TAPES";

const handlers = {
  [RAINBOW_MIX_TAPES]: (state) => {
    let newState = {
      ...state,
      colors: state.colors,
    };
    newState.colors.sort(() => Math.random() - 0.5);

    return newState;
  },
  [RAINBOW_MOVE_TAPE]: (state, { sourceIndex, destinationIndex }) => {
    let itemSource = state.colors.find((item, index) => index === sourceIndex);
    let newState = {
      ...state,
      colors: state.colors,
    };
    newState.colors.splice(sourceIndex, 1);
    newState.colors.splice(destinationIndex, 0, itemSource);

    return newState;
  },
  DEFAULT: (state) => state,
};

export const rainbowReducer = (state, action) => {
  const handle = handlers[action.type || handlers.DEFAULT];
  return handle(state, action);
};
