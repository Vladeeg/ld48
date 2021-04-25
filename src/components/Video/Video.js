import React from 'react';

class Video extends React.Component {
  render() {
    return <img src={this.props.src} />
  }
}

export default Video;
