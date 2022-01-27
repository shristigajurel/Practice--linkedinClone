import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectUser, logout, login } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  //use selector is from react redux. selectUser helps is
  //selectUser helps us to pull the information
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      //to detect if we are looged in to keep us logging in
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
        //if user auth is there then the user is logged in
      } else {
        //the user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />

      {/* if there is no user render the login page else render resr of the app */}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
