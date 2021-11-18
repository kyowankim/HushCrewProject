import React from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      // height: '425',
      // width: '700',

      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        rel: 0
      },
    };
    const {videoId} = this.props;
    return <YouTube videoId={videoId} opts={opts} light={false}/>;
  }
}

export default YoutubeVideo;
