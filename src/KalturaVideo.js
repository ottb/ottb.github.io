import React, { Component } from 'react';
import './styles.css';

class KalturaVideo extends Component {
  render() {
    const wrapperStyle = {
        display: "none"
    };
    const videoStyle = {
        overflow: "hidden"
    };
    return (
        <div id="js-kaltura-wrapper" class="kaltura-video__container" style={ wrapperStyle }>
            <div class="kaltura-video__dummy"></div>
            <script src="https://cdnapisec.kaltura.com/p/2207941/sp/220794100/embedIframeJs/uiconf_id/37292221/partner_id/2207941"></script>
            <div id="kaltura_player_e30d2723-221d-4333-814f-d58fc8192b61" class="kWidgetIframeContainer kaltura-video__video" style={ videoStyle }>
            </div>
        </div>
    );
  }
}

export default KalturaVideo;