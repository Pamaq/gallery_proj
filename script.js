const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = button //z buttona do  najblizszej data-carousel wybieramy wszystkie slajdy zeby wszystkie karuzele na stronie działały
			.closest("[data-carousel]")
			.querySelector("[data-slides]");

		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset; //rozsmarowujemy slajdy w array i offset do poruszania się po niej na boki
		if (newIndex < 0) newIndex = slides.children.length - 1; //zapętlanie obrazków
		if (newIndex >= slides.children.length) newIndex = 0; //od początku
		slides.children[newIndex].dataset.active = true; // aktywujemy wybrany obrazek
		delete activeSlide.dataset.active;
	});
});
