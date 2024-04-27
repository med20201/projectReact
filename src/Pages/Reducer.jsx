import initialState from './../Components/Assets/all_product'

const Reducer = (state = initialState.products, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    
    default:
      return state;
  }
};


export default Reducer;
