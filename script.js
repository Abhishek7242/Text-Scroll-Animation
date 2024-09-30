let section = document.querySelector('section')
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    section.style.clipPath= 'circle('+ scrollPosition * 2 +'px at left center )'
})