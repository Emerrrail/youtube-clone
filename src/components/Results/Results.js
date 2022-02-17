import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getSearchParam } from '../../helper-function/url';
import { searchTermRequested } from '../../store/actions/index';
import ResultsContent from './ResultsContent';
import Sidebar from '../Home/Sidebar';

function mapStateToProps(state) {
    return {
        state: state,
        results: state.searchQuery.results
    }   //回傳出去
}

export default connect(mapStateToProps)(Results);


// const useReactPath = () => {
//     const [path, setPath] = useState(window.location.href);
//     const listenToPopstate = () => {
//       const winPath = window.location.href;
//       console.log("on location change");
//       setPath(winPath);
//     };
//     useEffect(() => {
//       window.addEventListener("popstate", listenToPopstate);
//       console.log("add Listener.");
//       return () => {
//         window.removeEventListener("popstate", listenToPopstate);
//       };
//     }, []);
//     return path;
//   };

function Results({ results, currentPath }) {
    // const [currentPath, setCurrentPath] = useState(window.location.href);

    // const path = useReactPath();

    const dispatch = useDispatch();

    const getQuery = () => {
        return getSearchParam(window.location, 'search_query')
    }

    const queryTerm = getQuery();

    useEffect(() => {

        // const queryTerm = getQuery();
        dispatch(searchTermRequested(queryTerm));
        console.log('result rerender')

        return;

    }, [currentPath])


    return (
        <div className="results">
            <Sidebar />
            <ResultsContent results={results} />
        </div>
    );
}

// export default Results;