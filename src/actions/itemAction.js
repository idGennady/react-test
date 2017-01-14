import items from '../data/items.json';
import fetch from 'node-fetch';

export const RECEIVE_ITEM = 'REQUEST_ITEM';

export const receiveItems = (json) => ({
    type: RECEIVE_ITEM,
    items: json.data
});

const fetchItem = () => dispatch => {
    return fetch(items)
        .then(response => response.json())
        .then(json => dispatch(receiveItems(json)))
};

