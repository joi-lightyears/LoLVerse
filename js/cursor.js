const cursorElement = document.querySelector('.cursor');
const cursorTempElement = document.querySelector('.cursorTemp');
const handleMouseMove = (e) => {
    
    // console.log(cursorElement, cursorTempElement)
    cursorElement.style.cssText = cursorTempElement.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
};

window.addEventListener('mousemove', handleMouseMove);

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cursorElement.classList.add('cursor-hover');
        cursorTempElement.classList.add('cursorTemp-hover');
    });
    card.addEventListener('mouseleave', () => {
        cursorElement.classList.remove('cursor-hover');
        cursorTempElement.classList.remove('cursorTemp-hover');
    });
});

// const cardActive = document.querySelector('.slideActive');
// console.log(cardActive)
// // add hover event to card
// cardActive.addEventListener('mouseenter', () => {
//     cursorElement.classList.add('cursor-hover');
//     cursorTempElement.classList.add('cursorTemp-hover');
// });
// cardActive.addEventListener('mouseleave', () => {
//     cursorElement.classList.remove('cursor-hover');
//     cursorTempElement.classList.remove('cursorTemp-hover');
// });