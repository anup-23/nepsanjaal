import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "../src/user/Signup";
import Signin from "./user/Signin";
import Menu from "./core/Menu";
import Profile from "./user/Profile";
import EditProfile from "./user/Profile/EditProfile";
import Users from "./user/Users";
import PrivateRoute from "./utils/PrivateRoute";
import FindPeople from "./user/FindPeople";
import NewPost from "./post/NewPost";
import SinglePost from "./post/SinglePost";
import EditPost from "./post/EditPost";

const MainRouter = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute exact path="/user/edit/:userId" component={EditProfile} />
        <PrivateRoute exact path="/user/:userId" component={Profile} />
        <PrivateRoute exact path="/findpeople" component={FindPeople} />
        <PrivateRoute exact path="/post/create" component={NewPost} />
        <PrivateRoute exact path="/post/edit/:postId" component={EditPost} />
        <Route exact path="/post/:postId" component={SinglePost} />
      </Switch>
    </>
  );
};

export default MainRouter;
