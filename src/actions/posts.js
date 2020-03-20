import axios from "axios";

export const GET_POSTS_RES = "GET_POSTS_RES";



const getPostsRes = data => ({type: GET_POSTS_RES, data});



export const getPosts = () => async dispatch => {
  const data = await axios.get("http://localhost:8000/posts");

  dispatch(getPostsRes(data.data));
};

export const addPost = async (data, token, history) => {
  await axios.post('http://localhost:8000/posts', data, {headers: {'Authorization': "Token "+token}});
  history.push('/')
};