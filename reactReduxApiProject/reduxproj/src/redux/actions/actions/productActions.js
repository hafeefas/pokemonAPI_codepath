import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) =>{
    return{
        //always return an object {} which has a type and a payload
        //type is key, ActionTypes.SET_PRODCUTS is the type of action
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

//payload is the additional information that's sent to the reducers
//to update the application state
//when an action is dispatched, it usually has a type and an optional
//payload. The type is the action being performed and the payload carries
//the data relevant to that action