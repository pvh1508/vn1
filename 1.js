//function myFunction1(){
  //  document.getElementById("o1").classList.toggle("newClassName");
 //   document.getElementById("o2").classList.toggle("newClassName");
 // }
$(document).ready(function(){
    $(".hamburger1").click(function(){
      $(".wrapper").toggleClass("active")
    })
});
//
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
