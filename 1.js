function myFunction1(){
    document.getElementById("o1").classList.toggle("newClassName");
    document.getElementById("o2").classList.toggle("newClassName");
  }
$(document).ready(function(){
    $(".hamburger1").click(function(){
      $(".wrapper").toggleClass("active")
    })
});