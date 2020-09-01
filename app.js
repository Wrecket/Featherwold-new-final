const toggler = document.querySelector(".navbar-toggler");
const fade = document.querySelector(".fade-wrap");
const show = document.querySelector(".show");
const navbar = document.querySelector("#navbarSupportedContent");

fade.addEventListener("click", function(){
	if (navbar.classList.contains("show")) {
		navbar.classList.remove("show")
	}
})

window.addEventListener("click", function(){
	setTimeout(() => {
		if (navbar.classList.contains("show")) {
			fade.style.opacity ="0.2";
		}	
	}, 400); 
})

window.addEventListener("click", function(){
	setTimeout(() => {
		if (!navbar.classList.contains("show")) {
			fade.style.opacity ="1";
		}	
	}, 400); 
})



// toggler.addEventListener('touchstart', function (){
// 	fade.style.opacity = "0.2";
// })

// toggler.addEventListener('touchcancel', function (){
// 	fade.style.opacity = "1";
// })