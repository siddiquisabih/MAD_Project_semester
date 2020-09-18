import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux"
import Reducer from './reducer/reducer';


var midware = applyMiddleware(thunk)
var combine = combineReducers({
    Reducer
})

var Store = createStore(combine, midware)
Store.subscribe(() => {
    console.log("Store State", Store.getState())
})

export default Store;