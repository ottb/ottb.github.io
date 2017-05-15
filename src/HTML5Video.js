import React, { Component } from 'react';
import './styles.css';

class HTML5Video extends Component {
  render() {
		const videoStyle = {
        bottom: "80px"
    };
		// Obviously the media items below should be a property and not hard-coded.
		// Controls would move into a separate component as well.
    return (
      <div id="js-video-wrapper" className="video-wrapper" style={ videoStyle }>
				<video id="js-video" className="video" controls preload playsInline autoPlay loop poster="img/2016-ar-bg.png">
					<source src="video/ar-2016-video.mp4" type="video/mp4" />
					<source src="video/ar-2016-video.webm" type="video/webm" />
					Your browser does not support HTML5 video.
				</video>
				<div id="js-video-controls" className="video-controls">				
					<div id="js-mute"><img className="sound-on" alt="Mute" src="img/video-sound-on.svg"/></div>
					<div id="js-play"><img className="play" alt="Play" src="img/video-play.svg"/></div>
					<div id="js-full-screen"><img className="reg-screen" alt="Full Screen" src="img/video-reg-screen.svg"/></div>
					<div id="js-progress" className="progress-box">  
						<div id="js-progress-box" className="progress-bar-box">  
							<div id="js-play-progress" className="progress-bar"></div>
						</div>  
					</div>
				</div>
			</div>
    );
  }
}

export default HTML5Video;