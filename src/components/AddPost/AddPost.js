import React, {useState} from 'react';
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import Input from "reactstrap/lib/Input";
import {useSelector} from "react-redux";
import {addPost} from "../../actions/posts";
import Button from "reactstrap/es/Button";

const AddPost = props => {
    const initialAddPost = {
        title: '',
        description: '',
        image: ''
    };

    const [newPost, setNewPost] = useState(initialAddPost);

    const changeForm = e => setNewPost({...newPost, [e.target.name]: e.target.value});

    const changeFileForm = e => {
        setNewPost({...newPost, [e.target.name]: e.target.files[0]})
    };

    const addNewPostClick = e => {
        e.preventDefault();
        const data = new FormData();

        Object.keys(initialAddPost).forEach(e => {
            data.append(e, newPost[e])
        });

        addPost(data, user.token, props.history);
    };

    const user = useSelector(state => state.authorization.user);

    return (
        <Form onSubmit={addNewPostClick}>
            {!user.token && props.history.push('/')}
            <FormGroup row>
                <Label sm={2} for='title'>Title</Label>
                <Row>
                    <Input value={newPost.title} onChange={changeForm} name='title' id='title'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='description'>description</Label>
                <Row>
                    <Input required={!newPost.image} value={newPost.description} onChange={changeForm} name='description' id='description'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='image'>image</Label>
                <Row>
                    <Input required={!newPost.description} onChange={changeFileForm} name='image' type='file' id='image'/>
                </Row>
            </FormGroup>
            <FormGroup>
                <Button>Add post</Button>
            </FormGroup>
        </Form>
    );
};

export default AddPost;