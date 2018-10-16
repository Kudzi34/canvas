var canvas = document.querySelector("canvas");
canvas.style.border = "5px solid black";
var c = canvas.getContext("2d");
// tell canvas what color'pen to pick
c.beginPath();
c.strokeStyle = "blue";
//   (x, y, radius, startAngle, endAngle, counterClockwise )
c.arc(250, 150, 30, 30, 180, false);
c.stroke();

c.beginPath();
c.moveTo(250, 180);
c.lineTo(250, 300);
c.stroke();

c.beginPath();
c.moveTo(250, 180);
c.lineTo(200, 250);
c.stroke();

c.beginPath();
c.moveTo(250, 180);
c.lineTo(300, 250);
c.stroke();

c.beginPath();
c.moveTo(250, 300);
c.lineTo(300, 350);
c.stroke();

c.beginPath();
c.moveTo(250, 300);
c.lineTo(200, 350);
c.stroke();
// tell canvas to get ready to draw
//tell canvas to move pen
/*c.moveTo(100, 0);
c.lineTo(0, 200);
c.lineTo(200, 200);
c.lineTo(100, 0);
c.stroke();

/*c.strokeStyle();

c.beginPath();
c.strokeStyle = "blue";*/
