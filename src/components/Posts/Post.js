import React, {useState} from 'react';
import {Button, Card, Collapse, ListGroup, ListGroupItem} from "reactstrap";

const Post = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <ListGroupItem >
            <div className='d-flex mb-2'>
                <div className='mr-3'>
                    {props.image ?
                        <img style={{width: "120px"}} src={`http://localhost:8000/uploads/${props.image}`} alt={props.image} />
                        :
                        <img style={{width: "40px"}} src='https://www.pngitem.com/pimgs/m/34-349628_sms-chat-message-information-memo-whatsapp-whatsapp-message.png' alt='message' />
                    }
                </div>
                <div>
                    <span><b>date:</b> {props.date}  <b>by</b> {props.author}</span>
                    <h3>{props.title}</h3>
                    <span><b>comments:</b> {props.comments.length}</span>
                </div>
            </div>
            <>
                {props.user &&<Button color="primary" style={{ margin: '0 1rem 1rem 0' }} onClick={props.addComment}>Add comment</Button>}
                {props.comments[0] &&<Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Show comments</Button>}
                {props.comments[0] && (
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <ListGroup>
                                {props.comments.map(e => (
                                    <ListGroupItem key={e._id}>
                                        <span><b>author:</b> {e.authorUsername}</span>
                                        <h6>{e.text}</h6>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Card>
                    </Collapse>
                )}
            </>
        </ListGroupItem>
    );
};

export default Post;