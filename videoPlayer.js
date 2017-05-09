(function( window, document) { 
    var video = document.getElementsByTagName('video')[0], 
		videoControls = document.getElementById('js-video-controls'),
        mute = document.getElementById('js-mute'),	 
		play = document.getElementById('js-play'),
		 
		progressContainer = document.getElementById("js-progress"), 
		progressHolder = document.getElementById("js-progress-box"), 
		playProgressBar = document.getElementById("js-play-progress"), 
		 
		fullScreenToggleButton = document.getElementById("js-full-screen"),         
        // Boolean that allows us to "remember" the current size of the video player.  
        isVideoFullScreen = false;
    
    var videoPlayer = { 
        init : function() { 
            // this is equal to the videoPlayer object. 
            var that = this;
            
            // Get rid of the default controls, because we'll use our own. 
            video.removeAttribute('controls'); 
            
            // When meta data is ready, show the controls 
            video.addEventListener('loadeddata', this.initializeControls, false);

            // When play, pause buttons are pressed. 
            this.handleButtonPresses();

            // When the full screen button is pressed... 
            fullScreenToggleButton.addEventListener("click", function() { 
                isVideoFullScreen ? that.fullScreenOff() : that.fullScreenOn(); 
            }, true);
        },

        initializeControls : function() { 
            // When all meta information has loaded, show controls 
            videoPlayer.showHideControls(); 
            videoPlayer.videoScrubbing();
            
            // Begin tracking video's progress.  
		    videoPlayer.trackPlayProgress();
        },

        showHideControls : function() { 
            // Shows and hides the video player. 
            video.addEventListener('mouseover', function() { 
                videoControls.style.opacity = 1; 
            }, false); 
            
            videoControls.addEventListener('mouseover', function() { 
                videoControls.style.opacity = 1; 
            }, false); 
            
            video.addEventListener('mouseout', function() { 
                videoControls.style.opacity = 0; 
            }, false); 
            
            videoControls.addEventListener('mouseout', function() { 
                videoControls.style.opacity = 0; 
            }, false); 
        },

        handleButtonPresses : function() {             
            // When the mute button is clicked, mute/unmute the video.
            $("video").prop('muted', false);
            mute.addEventListener('click', this.muteUnmute, false); 

            // When the muted button is pressed,  
            // switch to the "Sound On" symbol. 
            video.addEventListener('muted', function() { 
                mute.title = 'Sound On'; 
                mute.innerHTML = '<img class="sound-on" src="img/video-sound-on.svg">'; 
            }, false);          

            // When the video or play button is clicked, play/pause the video.
            video.addEventListener('click', this.playPause, false); 
            play.addEventListener('click', this.playPause, false);
            
            // When the play button is pressed,  
            // switch to the "Pause" symbol. 
            video.addEventListener('play', function() { 
                play.title = 'Pause'; 
                play.innerHTML = '<img class="pause" src="img/video-pause.svg">';
            
                // Begin tracking video's progress.  
                videoPlayer.trackPlayProgress();		 
            }, false); 
            
            
            // When the pause button is pressed,  
            // switch to the "Play" symbol. 
            video.addEventListener('pause', function() { 
                play.title = 'Play'; 
                play.innerHTML = '<img class="play" src="img/video-play.svg">';  
		 
                // Video was paused, stop tracking progress. 
                videoPlayer.stopTrackingPlayProgress();
            }, false); 
            
            
            // When the video has concluded, pause it. 
            video.addEventListener('ended', function() { 
                this.currentTime = 0; 
                this.pause(); 
            }, false); 
        },

        muteUnmute : function() {
            
            if ( !$("video").prop('muted')) {
                $("video").prop('muted', true);
                mute.title = 'Sound Off'; 
                mute.innerHTML = '<img class="sound-off" src="img/video-sound-off.svg">';
            }   
            else {
                $("video").prop('muted', false);
                mute.title = 'Sound On'; 
                mute.innerHTML = '<img class="sound-on" src="img/video-sound-on.svg">';
            }  
        },
        
        // $("video").click( function() {
        //         $(this).prop('muted', !$(this).prop('muted'));
        //     })

        playPause : function() { 
            if ( video.paused || video.ended ) {				 
                if ( video.ended ) { video.currentTime = 0; } 
                video.play(); 
            } 
            else { video.pause(); } 
        },

        fullScreenOn : function() { 
            isVideoFullScreen = true; 
            
            // Set new width according to window width 
            video.classList.add("full-screen-off");
            fullScreenToggleButton.innerHTML = '<img class="full-screen" src="img/video-full-screen.svg">';
            
            // Listen for escape key. If pressed, close fullscreen. 
            document.addEventListener('keydown', this.checkKeyCode, false);
        },
        
        fullScreenOff : function() { 
            isVideoFullScreen = false; 
            
            video.classList.remove("full-screen-off");

            fullScreenToggleButton.innerHTML = '<img class="reg-screen" src="img/video-reg-screen.svg">';
        },

        // Determines if the escape key was pressed. 
        checkKeyCode : function( e ) { 
            e = e || window.event; 
            if ( (e.keyCode || e.which) === 27 ) videoPlayer.fullScreenOff(); 
        },

        // Every 50 milliseconds, update the play progress.  
        trackPlayProgress : function() { 
            (function progressTrack() { 
                videoPlayer.updatePlayProgress(); 
                playProgressInterval = setTimeout(progressTrack, 50); 
            })(); 
        },

        updatePlayProgress : function(){ 
            playProgressBar.style.width = ( (video.currentTime / video.duration) * (progressHolder.offsetWidth) ) + "px"; 
        },

        // Video was stopped, so stop updating progress. 
        stopTrackingPlayProgress : function(){ 
            clearTimeout( playProgressInterval ); 
        },

        videoScrubbing : function() { 
            progressHolder.addEventListener("mousedown", function(){
                videoPlayer.stopTrackingPlayProgress(); 
                
                videoPlayer.playPause(); 
                
                document.onmousemove = function(e) { 
                    videoPlayer.setPlayProgress( e.pageX ); 
                    //console.log("On mouse move: " + playProgressBar.offsetWidth + "pageX = " + e.pageX );
                } 
                
                document.onmouseup = function(e) { 
                    document.onmouseup = null; 
                    document.onmousemove = null; 
                                        
                    video.play(); 
                    videoPlayer.setPlayProgress( e.pageX ); 
                    //console.log("On mouse up: " + playProgressBar.offsetWidth + "pageX = " + e.pageX );
                    videoPlayer.trackPlayProgress(); 
                } 
            }, true); 
        }, 
        
        setPlayProgress : function( clickX ) { 
            var newPercent = Math.max( 0, Math.min(1, (clickX - this.findPosX(progressHolder)) / progressHolder.offsetWidth) ); 
            //console.log("position x: " + this.findPosX(progressHolder));
            video.currentTime = newPercent * video.duration; 
            playProgressBar.style.width = newPercent * (progressHolder.offsetWidth)  + "px"; 
        }, 
        
        findPosX : function(progressHolder) { 
            var curleft = progressHolder.offsetLeft; 
            //console.log("progressHolder offsetleft " + progressHolder.offsetLeft);
            while( progressHolder = progressHolder.offsetParent ) { 
                //console.log("progressHolder offsetParent " + progressHolder.offsetParent);
                curleft += progressHolder.offsetLeft;
            } 
            return curleft; 
        }

    }; 
	
    if (video) {
        videoPlayer.init();
    }
		 
}( this, document ))