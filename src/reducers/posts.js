import {GET_POSTS_RES} from "../actions/posts";

const initPosts = {
    posts: []
};

const postsReducer = (state = initPosts, action) => {
    if(action.type === GET_POSTS_RES) return {...state, posts: action.data};
    return state;
};

export default postsReducer;