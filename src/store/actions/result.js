import * as actionTypes from './actionTypes' 

export const save_result = (result) => {
    //const updatedResult = result * 2
    return {
        type: actionTypes.STORE_RESULT,
        result:  result//updatedResult
    }
}

export const store_result = (result) => {
    return (dispatch, getState) => {

        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter)
            dispatch(save_result(result))
        }, 2000)
    }
}

export const delete_result = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
}