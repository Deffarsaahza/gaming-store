var close = document.querySelectorAll(".close");
for(let i = 0; i < close.length; i++) {
 close[i].addEventListener("click", function(e){
 e.target.parentElement.style.display =
 "none";
 e.preventDefault()
 });
};












function send() {
    alert("Jawaban Berhasil Dikirim!")
   }













   var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
 var span = document.createElement("span");
 span.innerHTML = "x";
 myList[i].appendChild(span).
 setAttribute("class", "close");
}
var close = document.
getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++) {
 close[i].onclick = function() {
 var div = this.parentElement;
 div.style.display = "none"
 }
}
function newElement() {
    // Create new list with the inputed value
    var li = document.createElement("li");
    var inputValue = document.
    getElementById("myInput").value;
   
    // Check the inputed value
    if(inputValue === "" || inputValue === "") {
    alert("Data tidak boleh kosong!");
    } else {
    document.getElementById("myUL").
    appendChild(li).setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
    }
   
    // Clear text on the search bar
    document.getElementById("myInput").value = "";
    // Create button close
    var span = document.createElement("SPAN");
    span.innerHTML = "x";
    li.appendChild(span).setAttribute("class","close");
   
    // Delete list
    for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none"
    }
    }
   }