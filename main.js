
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
var showBrowserTime = document.querySelector('#copyright p:nth-child(2)');
var showBcnTime = document.querySelector('#copyright p:nth-child(3)');

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
    
    // formatHour(hour);
    // formatMinutes(minutes);
    // formatSeconds(seconds);

    // if you use return function, you have to assign the value to a new variable. 
    // otherwise, the returned value won't be saved and lost.

    // var hourFm = formatHour(hour);
    // var minutesFm = formatMinutes(minutes);
    // var secondsFm = formatSeconds(seconds);

    console.log(hour, minutes, seconds);


    var copyright = '©︎ Arisa Yasuo ' + year ;
    showCopyright.textContent = copyright;
    showBrowserTime.textContent = 'Browser time ' +formatHour(hour) + ':' + formatMinutes(minutes) + ':' + formatSeconds(seconds);
}


// Show BarcelonaTime
function showFixedDateTime(){
    // var dateFixed = new Date().toLocaleString({ timeZone: 'Europe/Madrid' });
    // //var dateFixed = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
    // var year2 = new Date(dateFixed).getFullYear();
    // var hour2 = new Date(dateFixed).getHours();
    // var minutes2 = new Date(dateFixed).getMinutes();
    // var seconds2 = new Date(dateFixed).getSeconds();

    // console.log(dateFixed);

  //Difference from GMT to BCN time
  var difference = 1;
  
  //browser time
  var browser = (new Date()).getTime();

  //グリニッジ標準時を求める
  var gmt = browser + (new Date()).getTimezoneOffset()*60*1000;

  //時差を加減して、日付データに戻す
  var bcnNow = new Date(gmt+difference*60*60*1000);

  var hour2 = bcnNow.getHours();
  var minutes2 = bcnNow.getMinutes();
  var seconds2 = bcnNow.getSeconds();

  console.log(hour2, minutes2, seconds2);




    function formatHour(hour2){
        return hour2 = hour2 < 10 ? '0' + hour2 : hour2;
    }

    function formatMinutes(minutes2){
        return minutes2 = minutes2 < 10 ? '0' + minutes2 : minutes2;
    }

    function formatSeconds(seconds2){
        return seconds2 = seconds2 < 10 ? '0' + seconds2 : seconds2;
    }

    var bcnTime = 'BCN time ' + formatHour(hour2) + ':' + formatMinutes(minutes2) + ':' + formatSeconds(seconds2);
    showBcnTime.textContent = bcnTime;
}



// showDateTime();
// setInterval('showDateTime()',1000);

function loop(){
    //this will call it as fast as possible. (as fast as screen refresh rate) 1000ms/60 (mac)
    window.requestAnimationFrame(loop);
    showDateTime();
    showFixedDateTime();

}

loop();

// homework show my time and users time BCN Somewhere where user is(browser time)






        