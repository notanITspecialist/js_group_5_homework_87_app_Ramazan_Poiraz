import {GET_POST_RES} from "../actions/post";

const initPost = {
  post: {}
};

const postReducer = (state = initPost, action) => {
   if(action.type === GET_POST_RES) return {...state, post: action.data};

   return state
};

export default postReducer