import React, { useState } from "react";
import { render } from "react-dom";
require("babel-core/register");
require("babel-polyfill");
import "../style.css";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Chat from "../components/Chat";
import Conversation from "../components/Conversation";
import Profil from "../components/Profil";
import Home from "../components/Home";
import {useQuery,useQueryClient,QueryClient, QueryClientProvider} from 'react-query'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
  withRouter,
  useLocation,
} from "react-router-dom";
const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState({});
  return (
    <Switch>
      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/login">
        <Login setUser={setUser} />
      </Route>

      <Route exact path="/home">
      <QueryClientProvider client={queryClient}>
        <Home user={user} />
        </QueryClientProvider>
      </Route>

      <Route exact path="/conversation">
        <Conversation user={user} />
      </Route>

      <Route exact path="/chat">
        <Chat user={user} />
      </Route>

      <Route exact path="/profil">
        <Profil user={user} />
      </Route>

      <Route
        path="/"
        component={() => {
          return <>Nothing to see here</>;
        }}
      />
    </Switch>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.querySelector(".app")
);
