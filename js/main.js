// Scroll display =======================================================================================

const scrollToSection = document.querySelectorAll('.scroll');
const landing = document.querySelector('.landing');

window.addEventListener('scroll', () => {
	if (window.scrollY > 120) {
		scrollToSection[0].style.display = 'none';
	} else {
		scrollToSection[0].style.display = 'flex';
	}
});

scrollToSection.forEach(item => {
	item.addEventListener('click', () => {
		menuLinks.forEach(link => {
			if (item.href === link.firstElementChild.href) {
				link.click();
			}
		})
	})
});

let hk = document.querySelector('footer a.developer');
hk.addEventListener('click', function() {
	menuLinks.forEach(link => {
		if (hk.href === link.firstElementChild.href) {
			link.click();
		}
	})
})

// generalize this for all the links by one logic
// add this property when scrolling

// Links Target =========================================================================================

document.querySelectorAll('#about .social-media .icons a').forEach(link => link.target = '_blank');
// document.querySelector('#about a.resume').target = '_blank'
document.querySelectorAll('#projects a').forEach(link => link.target = '_blank');

// Links Target =========================================================================================

document.querySelector("footer span#date").innerHTML = new Date().getFullYear();

// Initialize Swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	autoplay: { delay: 2700 },
	loop: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
