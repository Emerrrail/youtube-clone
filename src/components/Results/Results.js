import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getSearchParam } from '../../helper-function/url';
import { searchQueryRequested } from '../../store/actions/index';
import { searchQueryLoadMore } from '../../store/actions/index';
import ResultsContent from './ResultsContent';
import Sidebar from '../Home/Sidebar';


function mapStateToProps(state) {
    return {
        results: state.searchQuery.results,
        token: state.searchQuery.nextPageToken,
        loading: state.searchQuery.loading
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

function Results({ results, token, loading, currentPath }) {

    const dispatch = useDispatch();

    const getQuery = () => {
        return getSearchParam(window.location, 'search_query')
    }

    const queryTerm = getQuery();

    useEffect(() => {

        dispatch(searchQueryRequested(queryTerm));


    }, [currentPath]);

    const bottomReachedCallback = () => {
        console.log("on bottom reached callback.")
        dispatch(searchQueryLoadMore(queryTerm, token));
    }


    return (
        <div className="results">
            <Sidebar />
            <ResultsContent results={results} bottomReachedCallback={bottomReachedCallback} loading={loading} />
        </div>
    );
}

// export default Results;
