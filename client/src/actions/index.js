import axios from 'axios';

export const FETCH_ART_DATA_START = 'FETCH_ART_DATA_START'
export const FETCH_ART_DATA_SUCCESS = 'FETCH_ART_DATA_SUCCESS'
export const FETCH_ART_DATA_FAILURE = 'FETCH_ART_DATA_FAILURE'

export function fetchData() {
    return dispatch => {
        dispatch({ type: FETCH_ART_DATA_START })
        axios.get('https://api.harvardartmuseums.org/object?classification=Fragments&sort=random&hasimage=1&apikey=44448ae0-f675-11e9-b330-79a4d45fba64')
             .then(res => {
               console.log('Response', res)
                dispatch({ type: FETCH_ART_DATA_SUCCESS, payload: res.data.records })
             })
             .catch(err => {
                dispatch({ type: FETCH_ART_DATA_FAILURE, payload: err.response })
             })
    }
}

