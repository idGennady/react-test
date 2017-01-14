import { RECEIVE_ITEM } from '../actions/itemAction';

const itemReducer = (state = {items: []}, action) => {
    switch (action.type){
        case RECEIVE_ITEM: return {...state, items: action.items };
        default: return state;
    }
};

export default itemReducer;