 var exploret = document.getElementsByClassName("explorebox")[0];
 var expl = document.getElementsByClassName("expl")[0];

   expl.addEventListener("click", ()=>{
        exploret.classList.toggle("activeexplore");
    expl.classList.toggle("rotateactive");
   })

var nav1 = document.getElementsByClassName("nav1out")[0];
var body = document.getElementsByTagName("body")[0];
var menut = document.getElementsByClassName("menu")[0];
var delet = document.getElementsByClassName("delete")[0];

delet.addEventListener("click", ()=>{
       nav1.classList.remove("nav1active")
       body.classList.remove("activatebody");
       header.classList.remove("activatehead")
}); 
   document.onclick = function(e){
       if(!nav1.contains(e.target) && !menut.contains(e.target)){
        nav1.classList.remove("nav1active");
    body.classList.remove("activatebody");
    header.classList.remove("activatehead");
    head1.classList.remove("activehead1");
       } 
        if(!exploret.contains(e.target) && !expl.contains(e.target)){
      exploret.classList.remove("activeexplore");
    expl.classList.remove("rotateactive");
  }
   } 
 let header = document.querySelector(".header");
 let head1 = document.getElementsByClassName("header")[0];
function menu(){
    nav1.classList.toggle("nav1active");
    body.classList.toggle("activatebody");
    header.classList.toggle("activatehead");
    head1.classList.toggle("activehead1");
}

   window.onscroll = function() {scrollfunction()};

   function scrollfunction(){
    if(document.body.scrollTop>40 || document.documentElement.scrollTop>40){
        var head = document.getElementsByClassName("header")[0];
        head.classList.add("activeheader");

    } else{
        var head = document.getElementsByClassName("header")[0];
        head.classList.remove("activeheader");
    }
   }

  //footer 

  function foot1(){
    var heading = document.getElementsByClassName("linksfooter")[0];
    heading.classList.toggle("headingactive2");
    var rotatef = document.getElementsByClassName("rotatef")[0];
    rotatef.classList.toggle("rotatefoot1");
  }
  function foot2(){
    var heading = document.getElementsByClassName("linksfooter")[1];
    heading.classList.toggle("headingactive2")
    var rotatef = document.getElementsByClassName("rotatef")[1];
    rotatef.classList.toggle("rotatefoot2");
  }
  function foot3(){
    var heading = document.getElementsByClassName("linksfooter")[2];
    heading.classList.toggle("headingactive3");
    var rotatef = document.getElementsByClassName("rotatef")[2];
    rotatef.classList.toggle("rotatefoot3");
  }
  function foot4(){
    var heading = document.getElementsByClassName("linksfooter")[3];
    heading.classList.toggle("headingactive4");
    var rotatef = document.getElementsByClassName("rotatef")[3];
    rotatef.classList.toggle("rotatefoot4");
  }
  function foot5(){
    var heading = document.getElementsByClassName("linksfooter")[4];
    heading.classList.toggle("headingactive5");
    var rotatef = document.getElementsByClassName("rotatef")[4];
    rotatef.classList.toggle("rotatefoot5");
  }
    const loading = document.getElementsByClassName("loading")[0];
    var body = document.getElementsByTagName("body")[0];
   window.addEventListener("load",()=> {
          loading.style.display="none";
         body.classList.toggle("activescroll")
   });
// slider

// const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const carousels = document.querySelector(".carousels");
const carouselSec8 = document.querySelector(".carouselsec8");  // slider for section no 8
const carouselSec9 = document.querySelector(".sec9s")  // slider for section no 9
const cardWidthsec9 = carouselSec9.querySelector(".incardsec9").offsetWidth; // slider for section no 9
const cardWidthf = carouselSec8.querySelector(".incard").offsetWidth // slider for section no 8
const cardwidth = carousels.querySelector(".insidecard").offsetWidth
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper .svg");
const btnarr = document.querySelectorAll(".slidersec8 .svg")
const arrow = document.querySelectorAll(".slider .svg");
const  arrowsec9 = document.querySelectorAll(".slidersec9 .svg");

arrowsec9.forEach(sec9 =>{   // slider for section no 9
     sec9.addEventListener("click", ()=>{
        carouselSec9.scrollLeft += sec9.id =="leftbtnsec9"? -cardWidthsec9 : cardWidthsec9;
     });
});
 
arrowBtns.forEach(btn => {  // slider for section no 1
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
arrow.forEach(element => {   // slider for section no 6
    element.addEventListener("click", () => {
        carousels.scrollLeft += element.id == "leftbtn" ? -cardwidth : cardwidth;
    });
});

btnarr.forEach(slider =>{  // slider for section no 8
     slider.addEventListener("click", ()=>{
        carouselSec8.scrollLeft += slider.id == "leftbtnsec8" ? -cardWidthf : cardWidthf;
     });
});








