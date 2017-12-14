
// ADD 10
// user clicks #a10
$('#a10').click(add10);

function add10() {
  // read value of #out
  const result = $('#out');
  const num = result.html();
  // turn result into number
  let int = parseInt(num, 10);
  // add 10 to value of #out
  int += 10;
  // replace #out html with new value
  $('#out').html(int);
  // oooohohoho yeah baby!  
}

// SUBTRACT 10
// user clicks #n10
$('#n10').click(sub10);

function sub10() {
  // read value of div#out
  const result = $('#out');
  const num = result.html();
  // turn result into number
  let int = parseInt(num, 10);
  // subtract 10 from value of #out
  int -=10;
  // replace #out html with new value
  $('#out').html(int);
  // feeling just a teensy bit smarter
}

// MORE MATH
// add20
$('#a20').click(add20);

function add20() {
  const result = $('#out');
  const num = result.html();
  let int = parseInt(num, 10);
  int += 20;
  $('#out').html(int);
}
// add30
$('#a30').click(add30);

function add30() {
  const result = $('#out');
  const num = result.html();
  let int = parseInt(num, 10);
  int += 30;
  $('#out').html(int);
}
// sub20
$('#n20').click(sub20);

function sub20() {
  const result = $('#out');
  const num = result.html();
  let int = parseInt(num, 10);
  int -=20;
  $('#out').html(int);
}
// sub30
$('#n30').click(sub30);

function sub30() {
  const result = $('#out');
  const num = result.html();
  let int = parseInt(num, 10);
  int -=30;
  $('#out').html(int);
}

// COLOR
// user clicks #red
$('#red').click(changeRed);

function changeRed() {
// change background color of #out to 'red'
  $('#out').css({'background-color':'red','color':'white'})
// ^added color: white to make it easier to read when background is a color
  }

// user clicks #blue
$('#blue').click(changeBlue);

function changeBlue() {
  $('#out').css({'background-color':'blue','color':'white'})
  }

// RESET
// user clicks #out
$('#out').click(reset);

function reset() {
  // replace #out html with 0
  $('#out').html(0);
  // change background color of #out to '#fff'
  // $('#out').css('background-color','#fff')
  // -or-
  // change background color of #out to 'none' doesn't work, because none is not a valid value of the background-color property 
  // transparent or initial should work here
  $('#out').css({'background-color':'initial','color':'initial'});
  // ^reverted text also since I changed it to white in the color functions
}

