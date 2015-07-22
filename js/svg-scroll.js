$(document).ready(function() {
  
  //set the units for the svg paths
  $(".path").css("stroke-dashoffset", "1000");
  $(".path").css("stroke-dasharray", "1000");
  
  //add invisible text
  //$(".tex").css("visibility","hidden");
  
  //variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".path").css("stroke-dashoffset");//.star

  //on a scroll event - execute function
  $(window).scroll(function () {    

    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*100);    

    //convert dashoffset pixel value to interger
    var $newUnit = parseInt($dashOffset, 10); 

    //get the value to be subtracted from the 'stroke-dashoffset'
    var $offsetUnit = $percentageComplete * ($newUnit / 100);

    //set the new value of the dashoffset to create the drawing effect
    $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);//.star
    
    //if(($(window).scrollTop())>((document.getElementById("rect").getBBox().y)+70)){ // $(".rect").points.getItem().y)
    //    $(".tex").css("visibility","visible");
    //}
  });

});


