export const reducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "FILTER":
      switch (action.payload) {
     case "RemoveFilter":
      return {...state }
        case "InStock":
          return { ...state, InStock: !state.InStock };
        case "OutStock":
          return {
            ...state,
            OutStock: !state.OutStock
          };
        default:
          console.log("inner switch is acting up...");
          break;
      }
      break;
    default:
      console.log("something is wrong with reducer function");
      break;
  }
};