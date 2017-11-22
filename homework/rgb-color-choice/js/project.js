// user inputs numbers into input fields
// user click on what appears to be a button = add an event listener
// grab the input from all three inputs
// create a string that represents the rgb function 
// also include the inputs and commas
// set the background to be the new rgb
// update the html to include the new rgb html



$('#color-button').click(updateColors)
function updateColors() {
  let red = $('#red').val(); console.log(red);
  let blue = $('#blue').val(); console.log(blue);
  let green = $('#green').val(); console.log(green);
  let rbgVal = "R.B.G (" + red + "," + blue + "," + green + ")";
  let rgbVal = "rgb("+ red + "," + green + "," + blue + ")";
  $('body').css('background-color',rgbVal);
  // $('#color-button').css('color',rgbVal);
  $('#colorful-text').html(rbgVal);
}
//   const rgbVal = "rgb("+ red + "," + green + "," + blue + ")"; console.log(rgbVal);
  // $('body').css('background',rgbVal);