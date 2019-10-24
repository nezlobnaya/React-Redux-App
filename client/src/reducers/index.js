import { FETCH_ART_DATA_START, FETCH_ART_DATA_SUCCESS, FETCH_ART_DATA_FAILURE } from '../actions'

const initialState = {
    objects: [],
    isLoading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ART_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_ART_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                objects: action.payload
            }
        case FETCH_ART_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

