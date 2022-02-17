const initialState = {
    results: [],
    loading: false,
    error: null
}

export const searchQuery = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_TERM_REQUESTED':
            return {...state, loading: true, results: []}
        case 'SEARCH_TERM_SUCCESS':
            return {...state, loading: false, results: action.payload.results, error: null}
        case 'SEARCH_TERM_ERROR':
            return {...state, loading: false, error: action.error}
        default:
            return state
    }
}