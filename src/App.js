import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from "react-router";
import SignIn from "./pages/Signin";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./pages/Home";
import PublicRoutes from "./components/PublicRoutes";

function App() {
  return (
    <Switch>
      <PublicRoutes path="/signin">
        <SignIn/>
      </PublicRoutes>
      <PrivateRoutes path="/">
        <Home/>
      </PrivateRoutes>
    </Switch>
  );
}

export default App;
