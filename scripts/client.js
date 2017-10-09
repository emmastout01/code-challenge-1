console.log('Script sourced.');

$(document).ready(onReady);

function onReady() {
  console.log('Document ready.');
  $('#generateBtn').on('click', addButton);
}




function addButton() {
  $('.main').append('<div class="block"></div>');
  console.log('div added');
}
