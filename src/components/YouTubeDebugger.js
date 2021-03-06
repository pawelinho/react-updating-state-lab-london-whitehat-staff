// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } },
    };
  }

  handleClick = () => {
    this.setState({
      settings: {
          ...this.state.settings,
          bitrate: 12
        }

    });
  };


  handleClick2 = () => {
    this.setState({
      settings: {
          bitrate:8,
          video: {
          resolution: '720p'}
        }

    });
  };

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleClick}></button>
        <button className='resolution' onClick={this.handleClick2}></button>
      </div>
    );
  }
}

export default YouTubeDebugger;
