
///////////////////////////////////////////////////
//Switch Nav/Hamburger --- 
///////////////////////////////////////////////////
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

//Make Hamburger with 3 elements no pseudo element
//
const hamburgerBefore = window.getComputedStyle(
	document.querySelector('#hamburger'), ':before'
)
const hamburgerAfter = window.getComputedStyle(
	document.querySelector('#hamburger'), ':after'
)

console.log(hamburgerBefore);
console.log(hamburgerAfter);

const minWidth = 480

function resizeWindow(event){
    const width = window.innerWidth;
    console.log(width);

    if(width <= minWidth){
        nav.style.display = "none";
        hamburger.style.display = "block";
    }else{
        nav.style.display = "flex";
        hamburger.style.display = "none";
    }
}

window.addEventListener('resize', resizeWindow);

///////////////////////////////////////////////////
//Control hamburger --- HW: show mobile ver. of nav
///////////////////////////////////////////////////
hamburger.addEventListener('click',showMobileNav);

function showMobileNav(event){
    nav.style.display = "block";
    nav.classList.add('.navClicked');
    hamburger.style.display = "none";
    // hamburgerBefore.classList.add('.closeBefore');
    // hamburgerAfter.classList.add('.closeAfter');
}




// Header
//     nav
//         logo
//         hamburger
//         menu 
        