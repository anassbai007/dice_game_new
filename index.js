var list = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"]
var user1 = Math.floor(Math.random()*6)
var user2 = Math.floor(Math.random()*6)
document.getElementById("image1").src = "images/"+list[user1]+".png"
document.getElementById("image2").src = "images/"+list[user2]+".png"
if (user1 > user2){
    document.querySelector(".container h1").textContent = "Player 1 WIN";

}
if (user1 < user2){
    document.querySelector(".container h1").textContent = "Player 2 WIN";

}
if (user1 === user2){
    document.querySelector(".container h1").textContent = "You are equal";

}