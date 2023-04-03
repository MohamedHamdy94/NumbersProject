export const start = (payload) => {
  return {
    type: 'START',
    payload:true
  };
};
//loader
export const done = (payload) => {
  return {
    type: 'DONE',
    payload:false
  };
}