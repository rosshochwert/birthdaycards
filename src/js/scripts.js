document.addEventListener("DOMContentLoaded", function() {

	// Wrap every letter in a span
	words = ["handwritten cards", "close friends", "thoughtfullness"]
	addAnimation(words[0])
	i = 1;
	function addAnimation(name){
		var textWrapper = document.querySelector('.ml6 .letters');
		textWrapper.textContent = name
		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime.timeline({loop: false})
		  .add({
		    targets: '.ml6 .letter',
		    translateY: ["1.1em", 0],
		    translateZ: 0,
		    duration: 750,
		    delay: (el, i) => 50 * i
		  }).add({
		    targets: '.ml6 .letter',
		    opacity: 0,
		    duration: 1250,
		    easing: "easeOutExpo",
		    delay: 1250
		  });


	}

	interval = setInterval(function(){
		addAnimation(words[i%words.length])
		i++
	},3500)
	

});