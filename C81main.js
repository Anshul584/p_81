canvas = document.getElementById("mycanvas");
ctx1= canvas.getContext("2d");

color = "blue";

ctx1.beginPath();
ctx1.strokeStyle = color;
ctx1.lineWidth = 10;
ctx1.arc(200,200,60,0,2*Math.PI);
ctx1.stroke();

color = "gray";

ctx1.beginPath();
ctx1.strokeStyle = color;
ctx1.lineWidth = 10;
ctx1.arc(350,200,60,0,2*Math.PI);
ctx1.stroke();

color = "red";

ctx1.beginPath();
ctx1.strokeStyle = color;
ctx1.lineWidth = 10;
ctx1.arc(500,200,60,0,2*Math.PI);
ctx1.stroke();

color = "yellow";

ctx1.beginPath();
ctx1.strokeStyle = color;
ctx1.lineWidth = 10;
ctx1.arc(275,260,60,0,2*Math.PI);
ctx1.stroke();

color = "green";

ctx1.beginPath();
ctx1.strokeStyle = color;
ctx1.lineWidth = 10;
ctx1.arc(430,260,60,0,2*Math.PI);
ctx1.stroke();

