import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import { Provider } from 'react-redux';
import reduxStore from './store/store.js';

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
   <Provider store={reduxStore}>
     <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
   </Provider>,
    document.getElementById('app')
);
