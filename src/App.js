import jpgImg from './assets/under-construction-pic.png';
import { React, useEffect, useState } from 'react';
import AppLayout from './components/AppLayout';
import Home from './components/Home/Home';
import Watch from './components/Watch/Watch';
import Results from './components/Results/Results';
import Explore from './components/other-pages/Explore';
import Subscriptions from './components/other-pages/Subscriptions';
import Library from './components/other-pages/Library';
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';

// const API_KEY = 'AIzaSyDwmS4ws-fmKEsrKsN_8tsSPbRJjtqX9YY';

function mapStateToProps(state) {
    return {
        state: state,
    }
}

export default connect(mapStateToProps)(App)

function App({ state }) {

    useEffect(() => {

        console.log(state, "state from app")
    }
        , [state])

    const [currentPath, setCurrentPath] = useState('');

    const img = jpgImg;


    return (
        <AppLayout setCurrentPath={setCurrentPath}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/results" element={<Results currentPath={currentPath} />} />
                <Route path="/explore" element={<Explore img={img} />} />
                <Route path="/feed/subscriptions" element={<Subscriptions img={img} />} />
                <Route path="/feed/library" element={<Library img={img} />} />
            </Routes>
        </AppLayout>
    );

}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(App);

// export default App;