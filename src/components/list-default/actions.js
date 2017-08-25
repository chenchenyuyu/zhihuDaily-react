// content actions
import { axiosGet } from '../../utils/ajax';
export const getContentListSuccess = (data) => {
  return {
    type: 'GET_CONTENT_LIST_SUCCESS',
    data,
  }
};

export function getContentData (url, params, successFn=()=>{}){
  return dispatch => {
    axiosGet(url, params, (data)=>{
      dispatch(getContentListSuccess(data.data));
      successFn();
    })
  }
}
