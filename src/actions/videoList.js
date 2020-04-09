// Will be dependent on some kind of submission, or key event
// 

var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: 'CHANGE_VIDEO_LIST',
  videos: videos
});

export default changeVideoList;


