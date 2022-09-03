const navbar = document.querySelector(".navlinks")
const closeMenu = document.querySelector(".ri-close-fill")
const openMenu = document.querySelector(".ri-menu-line")
console.log(closeMenu)
function navopen(){
    navbar.style.top = "30%"
    closeMenu.style.display = "block"
    openMenu.style.display = "none"
}

function navclose(){
    navbar.style.top = "-30%"
    closeMenu.style.display = "none"
    openMenu.style.display = "block"
}