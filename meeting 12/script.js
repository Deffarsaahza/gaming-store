function rotateGif(element) {
    element.style.transform ="translate(5px, 5px)";
    element.style.transform ="rotate(180deg)"
   }
   function rotateBack(element) {
    element.style.transform ="translate(0px, 0px)";
    element.style.transform ="rotate(0deg)"
   }

   function scrolling() {
    document.getElementById("div").style.color = "blue"; }

    function keypress() {
        var content = document.getElementById("div")
        content.innerHTML = "You pressed a key!"
        content.style.color = "red"
        }

        var btn = document.querySelector(".button");
btn.onclick = () => {
 alert("Hello World!");
};

var paragraph = document.querySelector(".p3");
paragraph.addEventListener("click", function(){
 paragraph.style.backgroundColor = "red";
})

var btn = document.querySelector(".p3");
btn.addEventListener("click", function() {
 alert("Hello World!");
});
btn.addEventListener("click", function() {
 console.log("Hello Programmer!");
});