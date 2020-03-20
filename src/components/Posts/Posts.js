import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../actions/posts";
import Post from "./Post";
import {ListGroup} from "reactstrap";

const Posts = props => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts.posts);
    const user = useSelector(state => state.authorization.user);

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    const postsList = posts.map(e => (
       <Post
           key={e._id}
           _id={e._id}
           author={e.author.username}
           date={e.date}
           title={e.title}
           comments={e.comments}
           user={!!user.token}
           image={e.image.length > 8 ? e.image : false}
           addComment={() => props.history.push('/post/'+e._id)}
       />
    ));

    return (
        <div>
            <ListGroup>
                {postsList}
            </ListGroup>
        </div>
    );
};

export default Posts;