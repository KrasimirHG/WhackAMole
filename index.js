window.onload = function() {
	const images = document.querySelectorAll("img");
	let lastImage;
	const scoreB = document.querySelector("#result");
	let score = 0;
	let remTime = 30;
	const dispTime = document.querySelector("#rem-time");

	function randomImage(images) {
		const idx = Math.floor(Math.random() * images.length);
		const image = images[idx];
		if (image === lastImage) {
			return randomImage(images);
		}
		lastImage = image;
		return image;
	}

	function randomTime(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	function whack() {
		let image = randomImage(images);
		let time = randomTime(200, 500);
		if (remTime > 0) {
			image.style.display = "block";
			setTimeout(() => (image.style.display = "none"), time);
			whack();
		}
	}

	function bam(e) {
		score++;
		scoreB.textContent = score;
		setTimeout(remTime--, 1000);
		dispTime.textContent = remTime;
	}

	function start() {
		score = 0;
		remTime = 30;
		whack();
	}

	images.forEach((img) => img.addEventListener("click", bam));
	document.querySelector("button").addEventListener("click", start);
};
