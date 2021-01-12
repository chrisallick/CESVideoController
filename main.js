$(document).ready(function() {
    $("body").keydown(function(e) {
        if(e.keyCode == 37) { // left
            $("video")[0].currentTime -= 20;
        } else if(e.keyCode == 39) { // right
            $("video")[0].currentTime += 20;
        } else if(e.keyCode == 38) { // up
            $("video")[0].playbackRate += .5;
        } else if(e.keyCode == 40) { // down
            $("video")[0].playbackRate -= .5;
        }
        e.preventDefault();
    });
});

