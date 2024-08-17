const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_-=+{}[];:',.<>/?!~`";
const reqlength = 12;
const passwordBox = document.querySelector("#password");

const allChar = upperCase + lowerCase + number + symbol;

function generate(){
    var password = "";

    //Atleast one of each 
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    //now any value remaining
    while(reqlength > password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordBox.value = password;
}

document.querySelector("button").addEventListener("click",generate);

document.querySelector(".display img").addEventListener("click",async()=>{
    const text = passwordBox.value;
    await navigator.clipboard.writeText(text);
    alert("Copied");
})