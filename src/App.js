import "./App.css";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecomVideos from "./components/RecomVideos";
import Tags from "./components/Tags";

function App() {
    return (
        <div className="app">

            <Header>
                <Tags />
            </Header>
            <div className="app__page">
                <Sidebar className="app__sidebar"/>
                <RecomVideos />
            </div>

        </div>
    );
}

export default App;