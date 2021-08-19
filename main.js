
// Modal 
const modalBtn = document.querySelector('.modal-btn')
const modal_backGround = document.querySelector('.modal-backGround')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', () => {
    modal_backGround.classList.add('bg-active')
    modal.classList.add('bg-active')

})

modalClose.addEventListener('click', function () {
    modal_backGround.classList.remove('bg-active')
    modal.classList.remove('bg-active')
})

// Modal2 and slide in
const modal2Button = document.querySelector('.modal2-btn')
const modal2 = document.querySelector('.modal2')
const modalBackGround2 = document.querySelector('.modal-backGround2')

modal2Button.addEventListener('click', () => {
    modal2.classList.add('slide-left')
    modalBackGround2.classList.add('modal2BackgroundActive')

})

modalBackGround2.addEventListener('click', () => {
    modal2.classList.remove('slide-left')
    modalBackGround2.classList.remove('modal2BackgroundActive')
})




// Hover Over Card

const cardParent = document.querySelector('.cardParent')
const hoverOver = document.querySelector('.hoverOver')
const hoverOverActivate = document.querySelector('.hoverOverActivate')

cardParent.addEventListener('mouseover', () => {
    cardParent.classList.add('scaleActivate')
    hoverOver.classList.add('hoverOverActivate')
})

cardParent.addEventListener('mouseout', () => {
    cardParent.classList.remove('scaleActivate')
    hoverOver.classList.remove('hoverOverActivate')
})



//<<<<<<<<<< return undefined >>>>>>>>>>>>>>//
console.log('array');
console.log();
let log = console.log;
list = [1, 2, 3, 4, 5, 6];

let mapped = list.map((item) => { return item + 1 })

log(mapped)

let list_two = [1, 2, 3, 4, 5, 6];
let itemsForEached = [];
list_two.forEach(num => itemsForEached.push(num * 0))
log(itemsForEached)//  [0, 0, 0, 0, 0, 0]

