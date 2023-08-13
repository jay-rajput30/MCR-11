export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return { ...state, payload };

    default:
      return state;
  }
};
