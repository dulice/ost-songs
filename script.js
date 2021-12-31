const checkTag = document.querySelector(".check");
checkTag.addEventListener("change", () => {
	document.body.classList.toggle("change");
})

const menuButtonTag = document.querySelector(".menu-btn");
const firstLine = document.querySelector(".firstLine");
const secondLine = document.querySelector(".secondLine");
const thirdLine = document.querySelector(".thirdLine");
const showMenuTag = document.querySelector(".show-menu");
const sectionTag = document.querySelector("section");
const allPhoto = document.querySelector(".allPhoto")

menuButtonTag.addEventListener ("click", () => {
	
	const isOpened = menuButtonTag.classList.contains("click");
	if (isOpened) {
		menuButtonTag.classList.remove("click")
		firstLine.classList.remove("rotated-clockwise");
		secondLine.classList.remove("hide");
		thirdLine.classList.remove("rotated-anticlockwise");
		showMenuTag.style.display = "none";
		sectionTag.style.display = "block";
		allPhoto.style.display = "flex";
		 
	} else {
		menuButtonTag.classList.add("click")
		firstLine.classList.add("rotated-clockwise");
		secondLine.classList.add("hide");
		thirdLine.classList.add("rotated-anticlockwise");
		showMenuTag.style.display = "flex";
		sectionTag.style.display = "none";
		allPhoto.style.display = "none";
	}
	
})

const moviesTag = document.querySelector(".movies");
const movieDetailTag = document.querySelector(".movie-detail");
const movieTag = document.querySelector(".movie");
const photoTag = document.querySelector(".photo");
const movieShowTag = document.querySelector(".movie-show");
const sliderTag = document.querySelector(".slider");

// slider button 
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

rightBtn.addEventListener("click", () => {
	moviesTag.style.transform += 'translateX(-300px)';
	return;
})

leftBtn.addEventListener("click", () => {
	moviesTag.style.transform += 'translateX(300px)';
	return;
})

