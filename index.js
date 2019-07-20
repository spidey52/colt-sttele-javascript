var h1 = document.querySelector("h1");
var body = document.querySelector("body");

console.log(body)

body.style.background = "#252525";
h1.style.color = "pink";

var isBlack = true;
setInterval( function()  {
    if (body.style.background == "rgb(27, 27, 27)" ){
        body.style.background = "red";
    } else {
        body.style.background = "rgb(27, 27, 27)" ;
        
    }
    isBlack = !isBlack;
}, 100);