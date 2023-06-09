const initialState = {
    resume: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_RESUME':
        return {
          ...state,
          resume: action.payload
        };
      case 'UPDATE_RESUME':
        return {
          ...state,
          resume: action.payload
        };
      default:
        return state;
    }
  };
  
  