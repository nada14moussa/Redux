import Reducer from '../reducer';
import {createStore}from 'redux';

export default createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__())