import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import FiguresPage from "./Components/FiguresPages/FiguresPage";
import PuzzlesPage from "./Components/PuzzlesPage/PuzzlesPage";
import RainbowPage from "./Components/RainbowPage/RainbowPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import { RainbowState } from "./Context/rainbow/rainbowState";

function App() {
  return (
    <RainbowState>
      <HashRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path={"/"} exact component={PuzzlesPage} />
          <Route path={"/figures"} component={FiguresPage} />
          <Route path={"/rainbow"} component={RainbowPage} />
        </Switch>
      </HashRouter>
    </RainbowState>
  );
}

export default App;
