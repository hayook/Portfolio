// dark mode ============================================================================================

const darkIcon = '<i class="far fa-moon"></i>';
const lightIcon = '<i class="far fa-sun"></i>';
const iconContainer = document.querySelector('.dark-mode');
let dark = true;

iconContainer.addEventListener('click', () => {
    const theme = dark ? 'light' : 'dark';
    const icon = dark ? darkIcon : lightIcon;
    document.documentElement.setAttribute('theme', theme);
    iconContainer.innerHTML = icon;
    dark = !dark;
})

// Menu =======================================================================================

const menuIcon = document.querySelector('header nav .menu');
const theMenu = document.querySelector('header nav ul');
const menuLinks = document.querySelectorAll('header nav ul li');
const overlay = document.querySelector('.overlay');
let menuShow = false;

menuLinks.forEach(link => {
    link.onclick = () => {
        if (menuShow === true) {
            menuIcon.click();
        }
        menuLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    }
});

overlay.onclick = () => menuIcon.click();

menuIcon.addEventListener('click', function () {
    if (menuShow === false) {
        menuIcon.classList.add('animate-menu');
        theMenu.classList.add('show');
        overlay.style.display = 'block';
        menuShow = true;
    } else {
        menuIcon.classList.remove('animate-menu');
        theMenu.classList.remove('show');
        overlay.style.display = 'none';
        menuShow = false;
    }
});

// Scroll display =======================================================================================

const scrollToSection = document.querySelectorAll('.scroll');
const landing = document.querySelector('.landing');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        document.querySelector('header').classList.add('fix-header');
    } else {
        document.querySelector('header').classList.remove('fix-header');

    }
    if (window.scrollY > 120) {
        scrollToSection[0].style.display = 'none';
    } else {
        scrollToSection[0].style.display = 'flex';
    }
    if (window.scrollY > landing.offsetHeight + 120) {
        scrollToSection[1].style.display = 'none';
    } else {
        scrollToSection[1].style.display = 'flex';
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
hk.addEventListener('click', function () {
    menuLinks.forEach(link => {
        if (hk.href === link.firstElementChild.href) {
            link.click();
        }
    })
})

// generalize this for all the links by one logic
// add this property when scrolling

// Skill Seciton ========================================================================================

const skillFilter = document.querySelectorAll('#skills ul li');
const skillsCont = document.querySelectorAll('#skills .skills');
const skills = document.querySelectorAll('#skills .skills .skill');

skillFilter.forEach(item => {
    item.addEventListener('click', function () {
        skillFilter.forEach(item => {
            item.classList.remove('active')
        })
        skillsCont.forEach(cont => {
            cont.style.display = 'none';
            cont.classList.remove('animate-skills')
        })
        this.classList.add('active')

        let target = document.querySelector(this.dataset.skill);
        let skillsOfTarget = document.querySelectorAll(`${this.dataset.skill} .skill`);
        target.style.display = 'flex';
        target.classList.add('animate-skills')

        skillsOfTarget.forEach(skill => {
            skill.lastElementChild.firstElementChild.style.width = '0'
        })

        let animateTarget = setTimeout(function () {
            skillsOfTarget.forEach(skill => {
                skill.lastElementChild.firstElementChild.style.width = skill.lastElementChild.firstElementChild.dataset.prog

            })
        })
    })
});

skillFilter[0].click();

// Links Target =========================================================================================

document.querySelectorAll('#about .social-media .icons a').forEach(link => link.target = '_blank');
// document.querySelector('#about a.resume').target = '_blank'
document.querySelectorAll('#projects a').forEach(link => link.target = '_blank');