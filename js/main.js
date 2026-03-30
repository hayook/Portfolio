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

document.querySelector("footer span#date").innerHTML = `2021-${new Date().getFullYear()}`;
document.querySelector("#about span#desc-age").innerHTML = new Date().getFullYear() - 2002;
document.querySelector("#about span#desc-experience").innerHTML = Math.trunc(new Date().getFullYear() - 2021);

// Project Showcase Logic ===============================================================================

// Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const projectObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project').forEach(project => {
    projectObserver.observe(project);
});

// 3D Tilt Effect on Images
const tiltContainers = document.querySelectorAll('.tilt-container');

tiltContainers.forEach(container => {
    const element = container.querySelector('.tilt-element');
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        // Calculate mouse position relative to center of container
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Adjust divisor to make tilt more or less extreme
        const rotateX = -(y / 25);
        const rotateY = (x / 25);

        element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        // Reset on mouse leave
        element.style.transform = `rotateX(0deg) rotateY(0deg)`;
        element.style.transition = `transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)`;
    });

    container.addEventListener('mouseenter', () => {
        // Remove transition while moving for instant tracking
        element.style.transition = `none`;
    });
});
