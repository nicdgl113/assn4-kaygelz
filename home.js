"use strict";
//author:kaylee gelz
//date:feb9
//assn:4
 
///functions
function greeting(guestName = "guest") {
    let htmlStr = "<p>Welcome, " + guestName + "!</p>";
    let myMain = document.querySelector("main");
    myMain.innerHTML += htmlStr;
    
}
//call function
///greeting(); 
let guest = prompt("tell me your name please");
greeting(guest);

