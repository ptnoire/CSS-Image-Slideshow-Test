const par = document.querySelector('#theContent');
const images = document.querySelectorAll('.christmas');
const maxLength = images.length;
let curSlide = 0;

const next = function (img) {
    curSlide = img
    activate(curSlide)
    console.log(curSlide)
}

const activate = function (slide) {
    images.forEach((img, i) => img.style.transform = `translateX(${100 * (i - slide)}%)`)
}

const reactivate = function() {
    images.forEach(img => img.classList.remove('vanish'));
}

const reset = function() {
    images.forEach(img => img.classList.add('vanish'));
    reactivate()
    console.log('reset worked')
}

activate(curSlide);
par.addEventListener('click', e => {
    images.forEach(img => img.classList.remove('before'))
    e.target.classList.add('before')
    next(e.target.dataset.pos)
});

par.addEventListener('mouseout', _ => {
    setTimeout(() => reset(), 3000)
});

// Ok need to put current image in the middle of the page, so we can go left and right. Then implement the hover feature, then implement a reset - dec 11th 2022