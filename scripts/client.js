console.log('Script sourced.');

$(document).ready(onReady);

function onReady() {
  console.log('Document ready.');
  $('#generateBtn').on('click', addDiv);
}


var numberOfClicks = 0;

function addDiv() {
//Append div to DOM
numberOfClicks ++;
  $('.main').append('<div class="block"><p>' + numberOfClicks +'</p></div>');

}
