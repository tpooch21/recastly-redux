import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var initialState = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var reduxStore = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
);


export default reduxStore;