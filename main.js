
///////////////////////////////////////////////////
//Switch Nav/Hamburger --- 
///////////////////////////////////////////////////
const nav = document.getElementById('navbar');
const mainnav = document.getElementById('mainnav');
const hamburger = document.getElementById('hamburger');

// GET MENU element and clone it//
const mobilemainnav = document.getElementById('mobilemainnav');
const clone_mainnav = mainnav.cloneNode(true);

// //Make Hamburger with 3 elements no pseudo element
// //
// const hamburgerBefore = window.getComputedStyle(
// 	document.querySelector('#hamburger'), ':before'
// )
// const hamburgerAfter = window.getComputedStyle(
// 	document.querySelector('#hamburger'), ':after'
// )

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');


console.log(line1);
console.log(line2);
console.log(line3);
console.log(mainnav);


// const minWidth = 480

// function resizeWindow(event){
//     const width = window.innerWidth;

//     if(width <= minWidth){
//         navbar.style.display = "none";
//         hamburger.style.display = "block";
//         console.log('if')
//     }else{
//         navbar.style.display = "flex";
//         hamburger.style.display = "none";
//         console.log('else')
//     }
// }

// // window.addEventListener('resize', resizeWindow);

///////////////////////////////////////////////////
//Control hamburger --- HW: show mobile ver. of nav
///////////////////////////////////////////////////
hamburger.addEventListener('click',showMobileNav);

function showMobileNav(event){
    //nav.style.display = "block";
    navbar.classList.toggle('.navClicked');
    //hamburger.style.display = "none";
    mainnav.classList.toggle('.mainnavClicked');
    mobilemainnav.classList.toggle('.mobilemainnavshow')
    // mobilemainnav.after(clone_mainnav);
    line1.classList.toggle('rotateA');
    line2.classList.toggle('rotateB');
    line3.classList.toggle('rotateC');
    // hamburgerBefore.classList.add('.closeBefore');
    // hamburgerAfter.classList.add('.closeAfter');
}






// Header
//     nav
//         logo
//         hamburger
//         menu 

//my problems 20220930
// main-nav position (after I changed the hierarchy it got messed up)
// hide hamburger menu in the beginning (display none is not working)
// hamburger menu's line2 doesn't rotate
// have to make main-nav to stack vertical when it's clicked



console.log(mobilemainnav);
console.log(clone_mainnav);


        