import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// Main action creator
var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return function(dispatch) {

    return searchYouTube({YOUTUBE_API_KEY, q}, (data) => {

      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));

    });
  };

};

export default handleVideoSearch;
