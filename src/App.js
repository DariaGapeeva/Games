import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import FiguresPage from "./Components/FiguresPages/FiguresPage";
import PuzzlesPage from "./Components/PuzzlesPage/PuzzlesPage";
import RainbowPage from "./Components/RainbowPage/RainbowPage";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import { RainbowState } from "./Context/rainbow/rainbowState";
import GameOfFifteenPage from "./Components/GameOfFifteen/GameOfFifteenPage";
import WatchPage from "./Components/WatchPage/WatchPage";

function App() {
  return (
    <RainbowState>
      <HashRouter>
        {/* <BrowserRouter> */}
        <Navbar></Navbar>
        <Switch>
          <Route path={"/"} exact component={PuzzlesPage} />
          <Route path={"/figures"} component={FiguresPage} />
          <Route path={"/rainbow"} component={RainbowPage} />
          <Route path={"/fifteen"} component={GameOfFifteenPage} />
          <Route path={"/watch"} component={WatchPage} />
        </Switch>
        {/* </BrowserRouter> */}
      </HashRouter>
    </RainbowState>
  );
}

export default App;
