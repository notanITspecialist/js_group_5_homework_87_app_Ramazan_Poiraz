import React from 'react';
import {Route, Switch} from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Container from "reactstrap/lib/Container";
import Registration from "./components/registration/registration";
import Login from "./components/Login/login";
import Posts from "./components/Posts/Posts";
import AddComment from "./components/AddComment/AddComment";
import AddPost from "./components/AddPost/AddPost";

function App() {
  return (
      <div>
          <NavBar/>
        <Container>
            <Switch>
                <Route path="/" exact component={Posts}/>
                <Route path="/post/:id" exact component={AddComment}/>
                <Route path="/addNewPost" exact component={AddPost}/>
                <Route path="/registration" exact component={Registration}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </Container>
      </div>
  );
}

export default App;
