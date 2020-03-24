import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            const updtedRes = action.result * 2
            return updatedObject(state, {results: state.results.concat({id: new Date(), value: updtedRes })})
        case actionTypes.DELETE_RESULT:
            // const id =2;
            // const newArray = [...state.results]
            // newArray.splice(id, 1)
            const uptdArray = state.results.filter(result => result.id !== action.resultElId )
            return updatedObject(state, {results: uptdArray})

    }
    return state
}

 export default reducer;