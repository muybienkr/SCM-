'use strict';

let lastScrollY=window.scrollY;
const header=document.getElementById('header');

window.addEventListener('scroll',() => {
  if(window.scrollY>lastScrollY){
    header.style.top='-120px';
  }else{
    header.style.top=0;
  }
  lastScrollY=window.scrollY;
});