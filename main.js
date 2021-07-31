
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