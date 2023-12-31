import "../styles/modern-normalizer.css"
import "../styles/style.css";
import "../styles/components/header.css"
import "../styles/components/hero.css"
import "../styles/components/services.css"
import "../styles/components/testimonial.css"
import "../styles/components/faqs.css"
import "../styles/components/blog.css"
import "../styles/components/contact.css"
import "../styles/components/footer.css"
import '../styles/components/about.css'
import "../styles/utils.css"
import Masonry from "masonry-layout";


const grid = document.querySelector('.grid')



// var masonry = new Masonry(grid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     gutter: 0, // No gap between items
//     percentPosition: true
//   });

// query selectors

const openMenuBtn = document.querySelector('.open__menu');
const menu = document.querySelector('.nav__items');
const menuItem = document.querySelector('.nav__item');
const closeMenuBtn = document.querySelector('.close__menu');


// event listeners
openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);


// functions

function openMenu() {
    menu.style.right = '0';
    closeMenuBtn.style.display = 'block';
    openMenuBtn.style.display = 'none';
    menuItem.classList.add('animate');
}

function closeMenu() {
    menu.style.right = '-100%';
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'block';
    menuItem.classList.remove('animate')
}

// masonry grid
