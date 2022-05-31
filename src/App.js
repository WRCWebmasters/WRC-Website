import React from "react";

import "./App.css";
import "./resources/fonts/fonts.css";
import "./resources/page.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutRouter from "./pages/routes/AboutRouter";
import PeopleRouter from "./pages/routes/PeopleRouter";
import ResourcesRouter from "./pages/routes/ResourcesRouter";
import OperatingRouter from "./pages/routes/OperatingRouter";

import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Main from "./pages/Main.js";

function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  return (
    <>
      <Router>
        <div
          style={{
            position: "fixed",
            zIndex: 20,
          }}
        >
          <Switch>
            <Route exact path="/">
              <Banner
                text="Click here to read our stance on the Black Lives Matter movement."
                link="/"
              />
              <Header />
            </Route>
            <Route path="/">
              <Header color="muted-gold" />
            </Route>
          </Switch>
        </div>
        <div style={{ width: "300px", height: "75px" }} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about/:type">
            <AboutRouter />
          </Route>
          <Route path="/people/:type">
            <PeopleRouter />
          </Route>
          <Route path="/resources/:type">
            <ResourcesRouter />
          </Route>
          <Route path="/operating/:type">
            <OperatingRouter />
          </Route>
          <Route path="/general/:type">
            <p>Page not found</p>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
