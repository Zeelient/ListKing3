$(function() {
  $('li:contains("pecan")').text('almonds');
  $('li:contains("almonds")').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#set4one').remove()
  ;
});


