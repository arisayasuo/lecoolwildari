
const burgerMenu = document.querySelector('.burger-menu');
const menuBar = document.querySelector('.menu-bar')
burgerMenu.addEventListener('click', () => {
	menuBar.classList.toggle('toggleMenu');
})



// ///////////////////////////////////////////////////
// //Switch Nav/Hamburger --- 
// ///////////////////////////////////////////////////
// const nav = document.getElementById('navbar');
// const mainnav = document.getElementById('mainnav');
// const hamburger = document.getElementById('hamburger');

// // GET MENU element and clone it//
// const mobilemainnav = document.getElementById('mobilemainnav');
// const clone_mainnav = mainnav.cloneNode(true);

// // //Make Hamburger with 3 elements no pseudo element
// // //
// // const hamburgerBefore = window.getComputedStyle(
// // 	document.querySelector('#hamburger'), ':before'
// // )
// // const hamburgerAfter = window.getComputedStyle(
// // 	document.querySelector('#hamburger'), ':after'
// // )

// const line1 = document.getElementById('line1');
// const line2 = document.getElementById('line2');
// const line3 = document.getElementById('line3');


// console.log(line1);
// console.log(line2);
// console.log(line3);
// console.log(mainnav);


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
// hamburger.addEventListener('click',showMobileNav);

// function showMobileNav(event){
//     //nav.style.display = "block";
//     //hamburger.style.display = "none";
//     mainnav.classList.toggle('mainnavClicked');
//     mobilemainnav.classList.toggle('mobilemainnavshow')
//     // mobilemainnav.after(clone_mainnav);
//     line1.classList.toggle('rotateA');
//     line2.classList.toggle('rotateB');
//     line3.classList.toggle('rotateC');
//     // hamburgerBefore.classList.add('.closeBefore');
//     // hamburgerAfter.classList.add('.closeAfter');
// }






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



// console.log(mobilemainnav);
// console.log(clone_mainnav);


// function ShowNowYear() {
//     var now = new Date();
//     var year = now.getFullYear();
//     document.write(year);   
//  }

//  function ShowNowTime(){
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     document.write(hour + ':' + minute + ':' + second);
//  }


var showCopyright = document.querySelector('#copyright p');

function showDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    function formatHour(hour){
        return hour = hour < 10 ? '0' + hour : hour;
    }
    
    function formatMinutes(minutes){
        return minutes = minutes < 10 ? '0' + minutes : minutes;
    }

    function formatSeconds(seconds){
        return seconds = seconds < 10 ? '0' + seconds : seconds;
    }

    formatHour(hour);
    formatMinutes(minutes);
    formatSeconds(seconds);

    console.log(hour, minutes, seconds);


    var copyright = '©︎ Arisa Yasuo' + '\n' + year + '\n' + hour + ':' + minutes + ':' + seconds;
    showCopyright.textContent = copyright;
}


// showDateTime();
setInterval('showDateTime()',1000);






        