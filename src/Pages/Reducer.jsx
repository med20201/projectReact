import initialState from './../Components/Assets/all_product'

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
      };
    
    default:
      return state;
  }
};


export default Reducer;
