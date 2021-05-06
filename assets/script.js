var hamBurger = document.querySelector('.ham-burger')
var closeBtn= document.getElementById('closeBtn')
var navList = document.getElementById('nav-list')

console.log(closeBtn);

hamBurger.addEventListener('click',function(){
    navList.classList.toggle('nav-list-show')
    closeBtn.classList.remove('close-btn-none')
    closeBtn.classList.add('close-btn-show')

})
closeBtn.addEventListener('click',function(){
    closeBtn.classList.add('close-btn-none')
    navList.classList.remove('nav-list-show')
})