$(document).ready(function(){
    /* Anything that gets to the document
        will hide the dropdown 
    */
    $(document).click(function(){
        $("#download-matrix").hide();
    });
  
  /* Clicks within the dropdown won't make
     it past the dropdown itself */
  $("#download-matrix").click(function(e){
    e.stopPropagation();
  });

  // show the dropdown of downloads
  $("#download-dropdown").click(function(e){
    e.stopPropagation();
    $('#download-matrix').slideToggle();
  })

});