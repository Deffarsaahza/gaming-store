function dayMode() {
    document.querySelector("body").style.color ="black";document.querySelector("body").style.backgroundColor = "white" }
   function nightMode() {
    document.querySelector("body").style.color ="white";document.querySelector("body").style.backgroundColor = "black"}

    var btnLike = document.querySelector("#green")
var btnDislike = document.querySelector("#red")
btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor
function likeColor() {
 if (btnDislike.classList.contains("red")) {
 btnDislike.classList.remove("red")
 }
 this.classList.toggle("green")
}
function dislikeColor() {
 if (btnLike.classList.contains("green")) {
 btnLike.classList.remove("green")
 }
 this.classList.toggle("red")
}