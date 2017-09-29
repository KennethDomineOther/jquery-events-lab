console.log("Sanity Check: JS is working!");


var startTime; 
var endTime;
var total = 0;

$(document).ready(function(){
  $(window).on("keypress", function handleKeypress(event){

    if ( startTime ) {
      endTime = Date.now();
      total = (endTime - startTime) / 1000;
      displayTotal();
    } else {
      startTime = Date.now();

      window.setInterval(displayTotal, 500);
    }

  })

})

function displayTotal(){
  total = (Date.now() - startTime) / 1000;
  $("#total-time").text( total + " seconds" );
}
