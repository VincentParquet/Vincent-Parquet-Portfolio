$(document).ready(function() {

  $(".path").css("stroke-dashoffset", "1000");
  $("#blanc1").css("visibility", "hidden");
  document.getElementById('blanc1').style.visibility  = "hidden";

  $(window).scroll(function () {    

    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*100);    

  });

});


