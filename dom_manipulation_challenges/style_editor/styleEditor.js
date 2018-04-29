$(document).ready(function(){
  $('#submit-button').click( () => {
    event.preventDefault();
    let selector = $('#css-selector').val();
    let property = $('#property').val();
    let value = $('#value').val();
    $(selector).css(property, value)
  })
});
