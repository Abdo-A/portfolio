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

  document.getElementById("ima").style.animation="opac1 2s 4.8s forwards";

  document.getElementById("desc").style.animation="opac1 2s 5.8s forwards";
  
  setTimeout(function(){document.getElementById("learn").style.display="block";},14500);

setTimeout(function(){
  headeranimations();
  setInterval(headeranimations,14500);
},7500);

  function headeranimations() {
    var fh= document.getElementsByClassName("fh")[0];
    var sh= document.getElementsByClassName("sh")[0];
    fh.style.animation="opac0 0.5s 1s forwards";
    setTimeout(function(){fh.style.animation="opac1 1.5s forwards";fh.innerHTML="Software";},1500);
    setTimeout(function(){sh.style.animation="opac0 0.5s forwards";},2000);
    setTimeout(function(){sh.style.animation="opac1 1.5s forwards";sh.innerHTML="Developer";},2500);
    setTimeout(function(){fh.style.animation="opac0 0.5s forwards";},6000);
    setTimeout(function(){fh.style.animation="opac1 1.5s forwards";fh.innerHTML="Front End";},6500);
    setTimeout(function(){sh.style.animation="opac0 0.5s forwards";},7000);
    setTimeout(function(){sh.style.animation="opac1 1.5s forwards";sh.innerHTML="Specialist";},7500);
    setTimeout(function(){fh.style.animation="opac0 0.5s forwards";},11000);
    setTimeout(function(){fh.style.animation="opac1 1.5s forwards";fh.innerHTML="Web";},11500);
    setTimeout(function(){sh.style.animation="opac0 0.5s forwards";},12000);
    setTimeout(function(){sh.style.animation="opac1 1.5s forwards";sh.innerHTML="Engineer";},12500);
}