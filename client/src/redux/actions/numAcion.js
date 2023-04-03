import axios from 'axios';
import { axiosInstance, axiosInstanceDB } from '../../Network/axiosConfig';
import { done, start } from './Loader';

export const getNumInfo = (num) => async (dispatch) => {
  dispatch(start());
  console.log(num);

  // try {
  //   const res = await axiosInstance.get('',{
  //     params: {
  //       number: num,
  //     },
  //   });

  //   console.log(res);
  //   dispatch({
  //     type: 'GET_NUM',
  //     payload: res.data,
  //   });
  //   dispatch(done());
  // } catch (err) {
  //   console.log(err);
  //   dispatch(done());
  // }


  try {
    const res = await axiosInstanceDB.get(`searchnumder/${num}`);
    console.log(res.data);

    dispatch({
      type: 'GET_NUM',
      payload: res.data,
    });
    console.log(res.data)
    dispatch(done());
    // dispatch(setSearch(res.data));

  } catch (err) {
    console.log(err);
    dispatch(done());
  }
};

export const getAllSearch = () => async (dispatch) => {
  dispatch(start());
  try {
    const resp = await axiosInstanceDB.get('/searchnesult/numbers');
    dispatch({
      type: 'GET_SEARCHS',
      payload: resp.data,
    });
    console.log(resp.data);

    dispatch(done());
  } catch (err) {
    console.log(err);
    dispatch(done());
  }
};



export const setSearch = (data) => async (dispatch) => {
try {
  const res = await axiosInstanceDB.post('/searchnesult/post',{data});
  console.log(res.data);
  // dispatch({
  //   type: 'SET_SEARCH_NUM ',
  //   payload: res.data,
  // });
  dispatch(done());
} catch (err) {
  console.log(err);
  dispatch(done());
}

};
