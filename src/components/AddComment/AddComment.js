import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addComment, getPost} from "../../actions/post";
import ListGroup from "reactstrap/es/ListGroup";
import {ListGroupItem} from "reactstrap";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import Col from "reactstrap/es/Col";
import Button from "reactstrap/es/Button";

const AddComment = props => {
    const [text, setText] = useState({text: ''});

    const changeText = e => setText({text: e.target.value});

    const dispatch = useDispatch();
    const post = useSelector(state => state.post.post);
    const user = useSelector(state => state.authorization.user);

    useEffect(() => {
        dispatch(getPost(props.match.params.id))
    }, [dispatch, props.match.params.id]);

    return (
        <div>
            {!user.token && props.history.push('/')}
            <div className='d-flex'>
                <div className='mr-3'>
                    {post.image ?
                        <img style={{width: "200px"}} src={`http://localhost:8000/uploads/${post.image}`} alt={post.image} />
                        :
                        <img style={{width: "40px"}} src='https://www.pngitem.com/pimgs/m/34-349628_sms-chat-message-information-memo-whatsapp-whatsapp-message.png' alt='message' />
                    }
                </div>
                <div>
                    <span><b>date: </b>{post.date}</span>
                    <h2>{post.title}</h2>
                    {post.description && <p>{post.description}</p>}
                </div>
            </div>
            <h3 className='w-50 mt-5'>Add comment</h3>
            <Form className='w-50 border p-4 mb-3' onSubmit={e => {
                e.preventDefault();
                dispatch(addComment(props.match.params.id, text, user.token))
            }}>
                <FormGroup row>
                    <Label for='text' sm={2}>Text</Label>
                    <Col>
                        <Input value={text.text} onChange={changeText} id='text' name='text' placeholder='Enter text' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Button>Add comment</Button>
                </FormGroup>
            </Form>
            <h4>Comments</h4>
            <ListGroup>
                {post.comments && post.comments.map(e => (
                    <ListGroupItem key={e._id}>
                        <span><b>author:</b> {e.authorUsername}</span>
                        <h6>{e.text}</h6>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default AddComment;