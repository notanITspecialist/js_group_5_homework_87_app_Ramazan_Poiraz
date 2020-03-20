import axios from "axios";

export const GET_POST_RES = 'GET_POST_RES';



const getPostRes = data => ({type: GET_POST_RES, data});



export const getPost = id => async dispatch => {
  const data = await axios.get('http://localhost:8000/posts/'+id);

  dispatch(getPostRes(data.data))
};

export const addComment = (id, comment, token) => async dispatch => {
  console.log(id, comment);
  await axios.post('http://localhost:8000/posts/comment/'+id, comment, {headers: {'Authorization': "Token "+token}});
  dispatch(getPost(id));
};