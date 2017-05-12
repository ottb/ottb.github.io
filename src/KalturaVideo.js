import React, { Component } from 'react';
import './styles.css';

class KalturaVideo extends Component {
  render() {
    return (
        <div id="js-kaltura-wrapper" className="kaltura-video__container">
            <iframe className="js-iframe--video kaltura-video__video" src="https://cdnapisec.kaltura.com/p/2207941/sp/220794100/embedIframeJs/uiconf_id/37372321/partner_id/2207941?iframeembed=true&playerId=kaltura_player_1479830519&entry_id=1_iw99z2di&flashvars[streamerType]=auto" width="296" height="167" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
        </div>
    );
  }
}

export default KalturaVideo;