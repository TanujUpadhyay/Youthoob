const initialSate = [];

export const reducer = (state = initialSate, action) => {
  if (action.type === "add") {
    return action.payload;
  }
  return state;
};
