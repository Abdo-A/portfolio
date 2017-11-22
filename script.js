$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


var audio_icon=document.getElementById("audio_icon");
var audio=document.getElementById("audio");
audio_icon.addEventListener("click",function(){
  if (audio.duration > 0 && !audio.paused)
  {audio.pause(); audio.currentTime=0;}
else
  audio.play();
});
