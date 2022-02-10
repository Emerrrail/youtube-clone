const initialState = {
    result: [],
    loading: false,
    error: null
}

export const searchTerm = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_TERM_REQUESTED':
            return {...state, loading: true}
        case 'SEARCH_TERM_SUCCESS':
            return {...state, loading: false, result: action.payload.result, error: null}
        case 'SEARCH_TERM_ERROR':
            return {...state, loading: false, error: action.error}
        default:
            return state
    }
}