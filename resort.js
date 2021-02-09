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
  let str = `${date}/${month}/${year}`;
  let ele = (document.getElementById(
    "div1"
  ).innerHTML = `Today's date is: ${str}`);

}
///create image
function myImg() {
  let Int = Math.floor(Math.random() * 5); /// generate random integer
  let str = "images/img" + Int + ".jpg"; /// add integer to image
  return str; ///return string
}

///call functions
myImg(); 
printFooter();