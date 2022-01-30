import { React, useEffect } from 'react';
import Home from './components/Home/Home';
import Watch from './components/Watch/Watch';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions/api';

const API_KEY = 'AIzaSyDwmS4ws-fmKEsrKsN_8tsSPbRJjtqX9YY';

function App() {

    function loadYoutubeApi() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";

        script.onload = () => {
            window.gapi.load('client', () => {
                window.gapi.client.setApiKey(API_KEY);
                window.gapi.client.load('youtube', 'v3', () => {
                    youtubeLibraryLoaded();
                });
            });
        };

        document.body.appendChild(script);
    }


    

    useEffect(() => {
        loadYoutubeApi()
    }
        , [])

    return (
        
            <Routes>
                <Route path="/watch" element={<Watch />} />
                <Route path="/" element={<Home />} />
            </Routes>
    );

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
}
export default connect(null, mapDispatchToProps)(App);