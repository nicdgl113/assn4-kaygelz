//
//author:kaylee gelz
//date:feb.9
//assn:4

"use strict";
///functions

function printFooter() {
  let myDate = new Date();
  let date = myDate.getDate();
  let month = myDate.getMonth();
  let year = myDate.getFullYear();
  let htmlStr = "Today is:" + (month+1) + "/" + date +"/" + year;
  let myFooter = document.querySelector("footer");
  myFooter.innerHTML = htmlStr;

}
///create image
function randomImage() {
  let int = Math.random() * 3;
  int = Math.floor(int);
  let imgStr = "images/img" + int + ".jpg";
  return imgStr;
}

///call functions
randomImage(); 
printFooter();