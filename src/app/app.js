const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
burger.onclick = () => {
    header.classList.toggle('active')
}

addEventListener('scroll', () => {
    if (window.pageYOffset > 10) {
        alert('scrolling')
    }
})