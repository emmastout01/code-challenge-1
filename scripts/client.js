console.log('Script sourced.');

$(document).ready(onReady);

function onReady() {
  console.log('Document ready.');
  $('#generateBtn').on('click', addDiv);
  $('.main').on('click', '#swap', swapDiv);
  $('.main').on('click', '#delete', deleteDiv);
}


var numberOfClicks = 0;

function addDiv() {
//Append div to DOM and show how many times user has clicked 'generate' button
numberOfClicks ++;
  $('.main').append('<div class="block"><p>'+numberOfClicks+
  '</p><button id="swap">Swap Color</button><button id="delete">Delete</button></div>');
}

//Upon clicking 'swap color' button, swap div color from red to yellow/yellow to red
function swapDiv() {
  $(this).parent().toggleClass('yellow-bg');
}

//Upon clicking 'delete' button, delete div
function deleteDiv() {
  $(this).parent().remove();
}
