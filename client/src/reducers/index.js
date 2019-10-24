import { FETCH_ART_DATA_START, FETCH_ART_DATA_SUCCESS, FETCH_ART_DATA_FAILURE } from '../actions'

const initialState = {
    objects: [],
    isLoading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

