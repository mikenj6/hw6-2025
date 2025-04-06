var video;
video = document.querySelector("#player1");

window.addEventListener("load", function(){
	console.log("Page opened Successfully");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("video is played");
	video.play();
	document.querySelector("#volume").textContent = video.volume *100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("video is paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("video is slowed");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("new playback speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("video is faster");
	video.playbackRate = video.playbackRate * 1.1;
	console.log("new playback speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("video is skipped 10 seconds");
	let potentialTime = video.currentTime + 10;
	
	if(potentialTime >= video.duration ){
		potentialTime = 0;
	}
	video.currentTime = potentialTime;
	console.log("The current time in the video is " + potentialTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("video mute toggled");
	if(video.muted == true){
		video.muted = false;
		this.textContent = "Mute";
	}
	else{
		video.muted = true;
		this.textContent = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log("volume adjusted");
	video.volume = this.value /100;
	console.log("volume is now " + video.volume)
	document.querySelector("#volume").textContent =  video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old school style added");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Old school style removed");
	video.classList.remove("oldSchool");
});


