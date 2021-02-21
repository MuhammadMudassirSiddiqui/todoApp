export const initialState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DOC":
      return {
        ...state,
        data: [...state.data, action.item],
      };

    case "REMOVE_DOC":
      return {
        ...state,
        data: state.data.filter((eachIndex) => eachIndex.id !== action.id),
      };
    default:
      return state;
  }
};
export default reducer;
