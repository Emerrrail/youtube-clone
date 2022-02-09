const initialState = {
    video: {}
}

export const videoSelected = (state = initialState, action) => {
    switch (action.type) {
        case 'VIDEO__SELECTED':
            return {
                ...state,
                video: action.payload.video,
            }
        default:
            return state;
    }
}