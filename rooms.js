//
//author:kaylee gelz
//date:feb 9
//assn:4

"use strict";


var myLink = document.getElementById("button");
  function checkout() {
  var room1 = prompt("What is the room first room rate?"); // room rate 1
  var room2 = prompt("What is the second room rate?"); /// room rate 2
  var myArray = ["room1", "room2"]; ///array containg room rates
  var gst1 = room1 * 0.05; ///calculate gst
  var pst1 = room1 * 0.08; ///calculate pst
  var gst2 = room2 * 0.05; ///calculate gst
  var pst2 = room2 * 0.05; ///calculate pst
  var total1 = room1 + gst1 + pst1; ///calculate total
  var total2 = room2 + gst2 + pst2; ///calculate total
  let str1 = `Room Rate: $${room1} GST: $${gst1} PST: $${pst1} Total: $${total1}`; ///string
  let str2 = `Room Rate: $${room2} GST: $${gst2} PST: $${pst2} Total: $${total2}`; ///string
  let Total = total1 + total2;
  let str3 = `The total balance is$${Total}`;
  let ele = document.querySelector("main");
  // append the result to the current content in main
  let htmlString = `${str1}  ${str2} ${str3}`;
  ele.innerHTML += htmlString;
  }

   myLink.addEventListener ('click', checkout);


  ///event handling delegation
  let ele = document.querySelector('table');
  ele.addEventListener ('click' )
  



///click event listener


///function calls
checkout();




