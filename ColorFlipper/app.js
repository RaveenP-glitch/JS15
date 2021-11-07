const colors = ["green", "red", "rgba(133,122,200)",
"#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


function getRandomArbitrary() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];

    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

   
    // var randomNumber = getRandomArbitrary(0,4);
    // document.body.style.backgroundColor = colors[randomNumber];
    // color.textContent = colors[randomNumber];
    // console.log("Color changed");

});


function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);

}

function displayTime(){
    setInterval(e => function(d = new Date()) {
        document.getElementById("showTime").innerHTML=(Date())
    }(), 1000);
    // document.getElementById("showTime").innerHTML = Date();
    
}