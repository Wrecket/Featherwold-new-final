const toggler = document.querySelector(".navbar-toggler");
const fade = document.querySelector(".fade-wrap");
const show = document.querySelector(".show");
const navbar = document.querySelector("#navbarSupportedContent");
topbutton = document.getElementById("topBtn");

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

// top button 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
