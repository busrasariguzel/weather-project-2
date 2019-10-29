function clickFunction(){
let input = prompt("Please enter your city and the temperature type");
input = input.split(' ')
let result = weather(input[0],input[1])
document.getElementById("result").innerText = result
}