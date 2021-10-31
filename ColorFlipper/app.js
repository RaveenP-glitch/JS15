const colors = ["green", "red", "rgba(133,122,200)",
"#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");



function getRandomArbitrary() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
    //get random number between 0-3

   
    var randomNumber = getRandomArbitrary(0,4);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log("Color changed");

});