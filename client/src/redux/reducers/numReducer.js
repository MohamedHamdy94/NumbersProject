const INITIAL_STATE = {
  number: {},
  searchResult: []
};
export default function NumbersInfo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_NUM':
      return {
        ...state,
        number: action.payload,
      };
    case 'GET_SEARCHS':
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      return state;
  }
}

