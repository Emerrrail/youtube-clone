import { React, useEffect } from 'react';
import AppLayout from './components/AppLayout';
import Home from './components/Home/Home';
import Watch from './components/Watch/Watch';
import Result from './components/Result/Result';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions';
import { getAllPopularVideosRequested } from './store/actions/index';

// const API_KEY = 'AIzaSyDwmS4ws-fmKEsrKsN_8tsSPbRJjtqX9YY';

function mapStateToProps(state) {
    return {
        state: state,
        videos: state.videos.videos,
        searchResult: state.searchTerm.result
    }   //回傳出去
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getAllPopularVideosRequested }, dispatch);
// }

export default connect(mapStateToProps)(App)

function App({ state, videos, searchResult }) {

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

    useEffect(() => {
        // loadYoutubeApi()
        // dispatch(getAllPopularVideosRequested());
        console.log(state, "state from app")
    }
        , [state])

    return (
        <AppLayout>
            <Routes>
                <Route path="/watch" element={<Watch videos={videos} />} />
                <Route path="/result" element={<Result searchResult={searchResult} />} />
                <Route path="/" element={<Home state={state} videos={videos} />} />
            </Routes>
        </AppLayout>
    );

}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(App);

// export default App;