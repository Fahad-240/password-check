let userPassword = prompt("Password")
let correctPassword = ("saylani123")

if(!userPassword){
    alert("Please Enter your pasword")
}else if(userPassword === correctPassword){
    alert("Correct! Your password your Matched")
}else{
    alert("Incorrect Password")
}
