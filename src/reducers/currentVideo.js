import Redux from 'redux';

// Will determine what the current video is in the action object
// Action object will look something like:
//      { type: 'CHANGE_CURRENT_VIDEO', 
//        currentVideo: {data}
//      }
// If type is CURRENT_VIDEO, will change state.currentVideo

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
