// dark mode ============================================================================================

const holder = document.querySelector('header nav .holder');
const switcher = document.querySelector('header nav .holder .switch');
let darkMode = true; 

holder.addEventListener('click', function () {
    if (darkMode === true) {
        holder.style.background = '#888'
        switcher.style.transform = 'translateX(0)'
        document.documentElement.style.setProperty('--primary-color', '#df3719')
        document.documentElement.style.setProperty('--secondary-color', '#f1f1f1')
        document.documentElement.style.setProperty('--black', '#fff')
        document.documentElement.style.setProperty('--white', '#111')
        document.documentElement.style.setProperty('--primary-color-rgb', '223 55 25')
        document.documentElement.style.setProperty('--secondary-color-rgb', '241 241 241')
        darkMode = false; 
    } else {
        holder.style.background = '#03f303'
        switcher.style.transform = 'translateX(calc(100% - 2px))'
        document.documentElement.style.setProperty('--primary-color', '#08ddd8')
        document.documentElement.style.setProperty('--secondary-color', '#191919')
        document.documentElement.style.setProperty('--white', '#fff')
        document.documentElement.style.setProperty('--black', '#111')
        document.documentElement.style.setProperty('--primary-color-rgb', '8 221 216')
        document.documentElement.style.setProperty('--secondary-color-rgb', '25 25 25')
        
        darkMode = true;
    }
});

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

window.addEventListener('scroll',() => {
    if (window.scrollY > 120) {
        scrollToSection[0].style.display = 'none';
    } else {
        scrollToSection[0].style.display = 'flex';
    }
    if (window.scrollY > 780) {
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

let bool = true;
window.addEventListener('scroll', function () {
    if (this.scrollY >= 1390 && bool === true) {
        skillFilter[0].click()
        bool = false; 
    }
})

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
        let skillsOfTarget =document.querySelectorAll(`${this.dataset.skill} .skill`); 
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

// Projects Section =====================================================================================

const projects = document.querySelectorAll('.projects .project');

for (let i = 0; i < projects.length; i++) {
    projects[i].style.transform = (i % 2 === 0 ? 'translateX(-150px)' : 'translateX(150px)');
}

let projectScroll = true; 
window.addEventListener('scroll', function () { 
    let ProjectHeight = 2085;
    for (let i = 0; i < projects.length; i++) {  
        if (window.scrollY >= ProjectHeight && projectScroll === true) {
            projects[i].classList.add('project-show')
            ProjectHeight += projects[i].offsetHeight;
        }
    }
})

        






























