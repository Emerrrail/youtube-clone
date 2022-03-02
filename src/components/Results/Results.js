import useMediaQuery from "../../helper-function/use-media-query";
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

function Results({ results, token, loading, currentPath }) {

    const dispatch = useDispatch();

    const hideSidebar = useMediaQuery('(max-width: 807px)');

    const shrinkImg = useMediaQuery('(max-width: 576px)');

    const uniqueResults = [...new Set(results)];

    const getQuery = () => {
        return getSearchParam(window.location, 'search_query')
    }

    const queryTerm = getQuery();

    useEffect(() => {

        dispatch(searchQueryRequested(queryTerm));


    }, [currentPath]);

    const bottomReachedCallback = () => {

        dispatch(searchQueryLoadMore(queryTerm, token));
    }


    return (
        <div className="results">
            {hideSidebar ?
                <ResultsContent results={uniqueResults} bottomReachedCallback={bottomReachedCallback} loading={loading} shrinkImg={shrinkImg} />
                :
                <div>
                    <Sidebar />
                    <ResultsContent results={uniqueResults} bottomReachedCallback={bottomReachedCallback} loading={loading} shrinkImg={shrinkImg} />
                </div>
            }

        </div>
    );
}

// export default Results;
