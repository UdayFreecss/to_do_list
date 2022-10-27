$('ul').on('click','li',function(){
  $(this).toggleClass('completed');
});

$('ul').on('click','span',function(event){
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$('input[type="text"]').on('keypress',function(event){
  	if(event.which == 13){
      var input = $(this).val();
      $('ul').append('<li><span><i class="lis fa-trash"></i></span> '+input+'</li>')
      $(this).val('');
    }
});

$('.fa-plus').click(function(){
  $('input').fadeToggle(1000);
});