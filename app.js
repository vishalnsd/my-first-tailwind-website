const menubtn = document.getElementById('menu')
const sidemenu = document.getElementById('sidemenu')
const Allclass = sidemenu.classList
const close = document.getElementById('close')

menu.addEventListener('click', () => {
    sidemenu.classList.toggle('hidden')
})

close.addEventListener('click', () => {
    sidemenu.classList.toggle('hidden')
})