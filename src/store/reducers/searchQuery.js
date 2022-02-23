import { SEARCH_QUERY_REQUESTED } from "../actions"
import { SEARCH_QUERY_LOAD_MORE } from "../actions"

const initialState = {
    loading: false,
    results: [],
    nextPageToken: '',
    error: null
}

export const searchQuery = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_QUERY_REQUESTED:
            return {
                ...state, 
                loading: true, 
                results: [], 
                nextPageToken: ''
            }
        case 'SEARCH_QUERY_SUCCESS':
            return {
                ...state,
                loading: false, 
                results: action.payload.results, 
                nextPageToken: action.payload.nextPageToken,
                error: null
            }
        case 'SEARCH_QUERY_ERROR':
            return {
                ...state, 
                loading: false, 
                error: action.payload.error
            }
        case SEARCH_QUERY_LOAD_MORE:
            return {
                ...state, 
                loading: true
            }
        case 'SEARCH_QUERY_LOAD_MORE_SUCCESS':
            const newResults = action.payload.results
            const { results } = state;
            return {
                ...state,
                loading: false,
                results: [...results, ...newResults],
                nextPageToken: action.payload.nextPageToken
            }
        case 'SEARCH_QUERY_LOAD_MORE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}