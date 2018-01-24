$(document).ready(function(){       
  var scroll_start = 0;
  var about = $('.scroll-down');
  var offset = about.offset();
    if (about.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#000000');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
  });
    }

});


$(document).ready(function() {
  $('#thumbnails a').lightBox();
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


var cr = 'Theme designed by &copy; <a href="http://www.Kodexplorer.com">KodeXplorer.com</a>';
$(document).ready(function(){
  $(".copyright").append(cr)
   
});

