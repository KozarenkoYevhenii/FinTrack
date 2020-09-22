import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Charts from "./components/Charts/Charts";
import { Route, Redirect } from "react-router-dom";
import Categories from "./components/Categories/Categories";
// import NewCategory from "./components/NewCategory/NewCategory";
// import NewIncome from "./components/NewIncome/NewIncome";
// import NewCharge from "./components/NewCharge/NewCharge";
// import NewCategoryIncome from "./components/NewCategory/NewCategoryIncome";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navbar />
        <div className="content">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/FinTrack">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/charts" component={Charts} />
          <Route path="/categories" component={Categories} />
        </div>
      </div>
    </div>
  );
}

export default App;
