const gdpr = document.querySelector('#gdprBanner');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const body = document.querySelector("body");
let gdprTick;

window.onload = function() {
    if (gdprTick === true) {
        gdpr.style.display = 'none';
    }
}

window.onload = function() {
	no.addEventListener('click', function() {
        gdpr.style.display = 'none';
        gdprTick = false
    });
    
    yes.addEventListener('click', function() {
        gdpr.style.display = 'none';
        gdprTick = true
	});
};