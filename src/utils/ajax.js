import axios from 'axios';
export const axiosGet = (url, params = {}, sucFn=()=>{}, failFn=()=>{}) => {
  axios.get(url, params)
    .then( (res) => {
      sucFn(res)
    })
    .catch((error) =>{
      failFn(error)
    });
};
