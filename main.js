
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




