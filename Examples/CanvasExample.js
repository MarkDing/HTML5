/**
  Simple Canvas Example
*/

window.onload = windowReady;


/**
  windowReady
*/
function windowReady()
{
  var context = document.getElementById('simpleCanvas').getContext("2d");
  
  var width = 125;
  var height = 105;
  var padding = 20;

   
  // Draw a path
  context.beginPath();
  context.moveTo(padding + width/2, padding); // To cornner
  context.lineTo(padding + width, height + padding); // Bottom right
  context.lineTo(padding, height + padding); // Bottom left
  context.closePath();

  // Create fill gradient
  var gradient = context.createLinearGradient(0,0,0,height);
  gradient.addColorStop(0, "#ffc821");
  gradient.addColorStop(1, "#faf100")

  // Add a shadow around the object
  context.shadowBlur = 10;
  context.shadowColor = "black";

  // Stoke the inner outline
  context.lineWidth = 5;
  context.lineJoin = "round";
  context.strokeStyle = "#333";
  context.stroke();
  // Fill the path
  context.fillStyle = gradient;
  context.fill();
}