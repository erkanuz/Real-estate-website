const aboutItems = document.querySelectorAll('.about_ac_it')

aboutItems.forEach((item)=> {
    const aboutHeader = item.querySelector('.about_ac_hd')

    aboutHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.about-open')

        toggleItem(item)

        if(openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const aboutContent = item.querySelector('.about_ac_content')

    if(item.classList.contains('about-open')) {
        aboutContent.removeAttribute('style')
        item.classList.remove('about-open')
    } else {
        aboutContent.style.height = aboutContent.scrollHeight + 'px'
        item.classList.add('about-open')
    }
}

/*==== Header ====*/

function scrollHeight() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeight)

/*===== darkmode =======*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'darkmode'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains('iconTheme') ? 'fa-moon' : 'fa-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==== Animate the about picture ====*/

let elem = document.getElementById('about-card');
let rect = elem.getBoundingClientRect();

function transformation(event) {
    let x = event.clientX;
    let y = event.clientY;
    makeTransformation(x , y);
}

function makeTransformation(x , y) {
    let x1 = x-(rect.x+(rect.width/2));
    let y1 = x-(rect.y+(rect.height/2));
    elem.style.transform = `translateZ(10px) rotateX(${x1/5}deg) rotateY(${y1/8}deg)`;
}

function stablecard() {
    elem.style.transform = `translateZ(0px) rotateX(0deg) rotateY(0deg)`;
}

/*==== Swiper ====*/

let swiperResidences = new Swiper(".residences_container", {
    spaceBetween: 32, grabCursor: true,
    loop: true, slidesPreView: 'auto',
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullters: true
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
});