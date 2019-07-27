import React from "react";
import YouTube from "react-youtube";

//https://www.youtube.com/watch?v=6vCKWxqyRf4
class ReactYoutubeExample extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
    const player = event.target;
    // this last bit doesn't work..hmm
    // somethign to do with a needed 'bind'
    // this.setState({
    //   playerObj: player
    // });
    event.target.seekTo(50); // 50s
    console.log(event.target);
  }

  videoOnPlay(event) {
    // access to player in all event handlers via event.target
    const player = event.target;
    console.log(player.getCurrentTime());
  }
  videoOnStateChange(event) {
    // access to player in all event handlers via event.target
    const player = event.target;
    console.log(player);
  }

  //   componentWillUnmount() {
  //     const { playerObj } = this.state;
  //     console.log(playerObj.getCurrentTime());
  //   }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const { videoId } = this.props;
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoOnStateChange}
      />
    );
  }
}

export default ReactYoutubeExample;
