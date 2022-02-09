import { React, useEffect } from 'react';
import AppLayout from './components/AppLayout';
import Home from './components/Home/Home';
import Watch from './components/Watch/Watch';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions';
import { getAllPopularVideosRequested } from './store/actions/index';

const API_KEY = 'AIzaSyDwmS4ws-fmKEsrKsN_8tsSPbRJjtqX9YY';

function mapStateToProps(state) {
    return {
        state: state,
        videos: state.videos.videos
    }   //回傳出去
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllPopularVideosRequested, youtubeLibraryLoaded }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

function App({ state, videos }) {

    // function loadYoutubeApi() {
    //     const script = document.createElement("script");
    //     script.src = "https://apis.google.com/js/client.js";

    //     script.onload = () => {
    //         window.gapi.load('client', () => {
    //             window.gapi.client.setApiKey(API_KEY);
    //             window.gapi.client.load('youtube', 'v3', () => {
    //                 youtubeLibraryLoaded();
    //             });
    //         });
    //     };

    //     document.body.appendChild(script);
    // }

    const dispatch = useDispatch()

    useEffect(() => {
        // loadYoutubeApi()
        // getAllPopularVideosRequested();
        dispatch(getAllPopularVideosRequested());
        console.log(state, "state from app")
    }
        , [])

    return (
        <AppLayout>
            <Routes>
                <Route path="/watch" element={<Watch videos={videos} />} />
                <Route path="/" element={<Home state={state} videos={videos} />} />
            </Routes>
        </AppLayout>
    );

}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(App);