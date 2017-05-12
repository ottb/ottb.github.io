import React, { Component } from 'react';
import './styles.css';

class KalturaVideo extends Component {
  render() {
    var videoFrameStyle = {
        overflow: "hidden"
    };
    var videoStyle = {
        border: "0px",
        maxWidth: "100%",
        maxHeight: "100%",
        width: "100%",
        height: "100%"
    };
    return (
        <div id="js-kaltura-wrapper" className="kaltura-video__container">
            <div className="kaltura-video__dummy"></div>
            <div className="kWidgetIframeContainer kaltura-video__video" style={videoFrameStyle}>
                <iframe className="mwEmbedKalturaIframe" style={videoStyle} src="https://cdnapisec.kaltura.com/p/2207941/sp/220794100/embedIframeJs/uiconf_id/37372321/partner_id/2207941?iframeembed=true&playerId=kaltura_player_1479830519&entry_id=1_iw99z2di&flashvars[streamerType]=auto" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
            </div>
        </div>
    );
  }
}

export default KalturaVideo;