
$(document).ready(function(){
 var win=0;
 var losses=0;
 var score=0;
 var targetNumber;

 var img1 = $("<img>");    
  img1.addClass("crystal-image");    
  img1.attr("src", "http://www.healing-crystals-for-you.com/images/xemerald-stone-sq250.jpg.pagespeed.ic.xy_plOBJik.jpg");      
  $("#images").append(img1);

    var img2 = $("<img>");    
    img2.addClass("crystal-image");    
    img2.attr("src", "https://previews.123rf.com/images/doctorblack/doctorblack1108/doctorblack110800026/10600755-Ruby-red-crystals-Stock-Photo-ruby-stone-emerald.jpg");       
    $("#images").append(img2);

    var img3 = $("<img>");    
    img3.addClass("crystal-image");    
    img3.attr("src", "http://www.healing-crystals-for-you.com/images/xherkimer-diamond.jpg.pagespeed.ic.BaHWVV1HBy.jpg");   
    $("#images").append(img3);

    var img4 = $("<img>");    
    img4.addClass("crystal-image");    
    img4.attr("src", "https://professional.swarovski.com/GenticsImageStore/930/580/prop//pro_webapp/file/crystals/spotlight-on-products/SP_SS2017_231_YellowOpal_Shadowbox_930x580.jpg");       
    $("#images").append(img4); 
    start();

function start(){
targetNumber = Math.floor(Math.random()*102)+19;
  score=0;
 $("#number").text(targetNumber);
$("#wins").text("Wins: "+win);
$("#losses").text("Losses: "+losses);
$("#score").text(score);


var numberOptions= Math.floor(Math.random()*12)+1;
var numberOptions1= Math.floor(Math.random()*12)+1;
var numberOptions2= Math.floor(Math.random()*12)+1;
var numberOptions3= Math.floor(Math.random()*12)+1;


    img1.attr("data-crystalvalue", numberOptions);      
   img2.attr("data-crystalvalue", numberOptions1);
   img3.attr("data-crystalvalue", numberOptions2);    
   img4.attr("data-crystalvalue", numberOptions3);   
    
}

 $(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#score").text(score);

    if (score === targetNumber) {
    	$("#message").text("You Won"); 
    	win++;
    	$("#wins").text("Wins: "+win); 
    	 start();    
    }

    else if (score > targetNumber) {
      $("#message").text("You Lost");
      losses++;
      $("#losses").text("Losses: "+losses);
       start();
    }

});
});