let menuButton = document.querySelector('.menu--button');
menuButton.addEventListener('click',()=>{
    let menuNav = document.querySelector('.menu--nav');
    if(menuNav.classList.contains('menu--opened') == true) {
        menuNav.classList.remove('menu--opened')
    }else {
        menuNav.classList.add('menu--opened');
    }
})