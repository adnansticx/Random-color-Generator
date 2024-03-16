const getColor = () =>{
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);  
    document.body.style.backgroundColor = randomCode;
    // console.log(randomNumber, randomCode);
    // console.log(randomNumber);
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

// Event Call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

// init Call
getColor();