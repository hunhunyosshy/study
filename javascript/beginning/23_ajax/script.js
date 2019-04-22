$(document).ready(function(){
  $.ajax({url: 'data.json', dataType: 'json'})
  .done(function(data){
    $(data).each(function(){
      if(this.crowded === 'yes') {
        var idName = '#' + this.id;
        $(idName).find('.check').addClass('crowded');
      }
    });
  })
  .fail(function(){
    window.alert('読み込みエラー');
  });
  $('.check').on('click', function(){
    if($(this).hasClass('crowded')) {
      $(this).text('残席わずか').addClass('red');
    } else {
      $(this).text('席あります').addClass('green');
    }
  });
});