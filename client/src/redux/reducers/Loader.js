const INITIAL_STATE = {
  loader:false
};
export default function Loader(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loader: action.payload,
      };
      case 'DONE':
        return {
          ...state,
          loader: action.payload,
        };
    default:
      return state;
  }
}
