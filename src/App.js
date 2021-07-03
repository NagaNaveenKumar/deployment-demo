import React from "react";
import Header from "./components/Header.js";
import HeaderTwo from "./components/HeaderTwo.js";
import HeaderThree from "./components/HeaderThree";
import Home from "./components/Home";
import About from "./components/About";
import Commity from "./components/Commity";
import Speakers from "./components/Speakers";
import CFP from "./components/CFP";
import Sponsor from "./components/Sponsor";
import Registration from "./components/Registration";
import Imp from "./components/Imp";
import Venue from "./components/Venue";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <header>
    <nav class="fixed-top">
    <Header/>
    <HeaderTwo/>
    <HeaderThree/>
    </nav>
    </header>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" exact component={About}/>
    <Route path="/commity" exact component={Commity}/>
    <Route path="/speakers" exact component={Speakers}/>
    <Route path="/cfp" exact component={CFP}/>
    <Route path="/sponsor" exact component={Sponsor}/>
    <Route path="/registration" exact component={Registration}/>
    <Route path="/imp" exact component={Imp}/>
    <Route path="/venue" exact component={Venue}/>
    <Route path="/awards" exact component={Awards}/>
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
