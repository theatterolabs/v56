$("play").click(function(){

       
        
        // Set the name of the "hidden" property and the change event for visibility
        var hidden, visibilityChange; 
        if (typeof document.hidden !== "undefined") {
          hidden = "hidden";
          visibilityChange = "visibilitychange";
        } else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
          hidden = "mozHidden";
          visibilityChange = "mozvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
          hidden = "webkitHidden";
          visibilityChange = "webkitvisibilitychange";
        }
        
        var audio = document.getElementById("audio");
	var contextDialogue = document.getElementById("contextScreenAudio");
	contextDialogue.play();
	
	
	contextDialogue.addEventListener('ended', (event) => {
    			document.getElementById('play').style.display = 'none';
			audio.play();
       			audio.volume = 0.07;
	});
		
	
        // If the page is hidden, pause the video;
        // if the page is shown, play the video
        function handleVisibilityChange() {
          if (document[hidden]) {
            audio.pause();
          } else {
            audio.play();
            audio.volume = 0.07;
          }
        }

        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
          alert("Your Browser Doesnt Support Background Audio Muting");
        } else {
          // Handle page visibility change   
          document.addEventListener(visibilityChange, handleVisibilityChange, false);
         
        }

    });