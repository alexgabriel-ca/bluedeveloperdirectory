/*Tasks each section:
 * 1. Get object.
 * 2. Set properties.
 * 3. Take action.  */

function makeCanvas() {
	/*Canvas 1 text drawing algorithm.*/
	var canvas1 = document.getElementById("canvas1");
	var context1 = canvas1.getContext("2d");
	var width = canvas1.width / 2;
	var height = canvas1.height / 2;

	context1.font = "32pt Arial";
	context1.fillStyle = "DeepSkyBlue";
	context1.strokeStyle = "black";
	context1.textAlign = "center";

	context1.fillText("I love HTML5", width, height);
	context1.strokeText("I love HTML5", width, height);

	/*Canvas 2 abstract drawing algorithm.*/
	var canvas2 = document.getElementById("canvas2");
	var context2 = canvas2.getContext("2d");

	context2.strokeStyle = "black";
	context2.lineWidth = 5;

	/*Canvas 2, Cube 1*/
	context2.fillStyle = "red";
	context2.fillRect(25, 25, 100, 100);
	context2.strokeRect(25, 25, 100, 100);

	/*Canvas 2, Cube 2*/
	context2.fillStyle = "grey";
	context2.fillRect(150, 25, 100, 100);
	context2.strokeRect(150, 25, 100, 100);

	/*Canvas 2, Cube 3*/
	context2.fillStyle = "grey";
	context2.fillRect(25, 150, 100, 100);
	context2.strokeRect(25, 150, 100, 100);

	/*Canvas 2, Cube 4*/
	context2.fillStyle = "red";
	context2.fillRect(150, 150, 100, 100);
	context2.strokeRect(150, 150, 100, 100);

	/*Canvas 3 circle drawing algorithm.*/
	var canvas3 = document.getElementById("canvas3");
	var context3 = canvas3.getContext("2d");

	context3.strokeStyle = "black";
	context3.fillStyle = "red";
	context3.lineWidth = 5;

	context3.beginPath();
	context3.moveTo(100, 100);
	context3.lineTo(150, 200);
	context3.lineTo(200, 200);
	context3.lineTo(200, 290);
	context3.lineTo(290, 290);
	context3.lineTo(290, 100);
	context3.lineTo(100, 100);
	context3.stroke();
	context3.fill();

	/*Canvas 4 drawing algorithm.*/
	var canvas4 = document.getElementById("canvas4");
	var context4 = canvas4.getContext("2d");
	var width = context4.width / 2;
	var height = context4.height / 2;

	/*Canvas 4, circle 1*/
	context4.fillStyle = "blue";
	context4.beginPath();
	context4.arc(200, 30, 25, 0, 2 * Math.PI);
	context4.fill();
	context4.closePath();

	/*Canvas 4, circle 2*/
	context4.fillStyle = "red";
	context4.beginPath();
	context4.arc(200, 100, 45, 0, 2 * Math.PI);
	context4.fill();
	context4.closePath();

	/*Canvas 4, circle 3*/
	context4.fillStyle = "black";
	context4.beginPath();
	context4.arc(200, 220, 75, 0, 2 * Math.PI);
	context4.fill();
	context4.closePath();

	/*Canvas 5 animation algorithm.*/
	var canvas5 = document.getElementById("canvas5");
	var context5 = canvas5.getContext("2d");
	var counter1 = 0;
	var counter2 = 0;

	setInterval(function () {
		/*Set background of canvas*/
		context5.fillStyle = "black";
		context5.fillRect(0, 0, canvas5.width, canvas5.height);

		/*Diagonal circle*/
		context5.fillStyle = "white";
		context5.beginPath();
		context5.arc(counter1, counter2, 25, 0, 2 * Math.PI);
		context5.fill();
		context5.closePath();

		/*Horizontal square*/
		context5.fillStyle = "green";
		context5.fillRect(counter1, 150, 100, 100);

		/*Vertical circle*/
		context5.fillStyle = "blue";
		context5.beginPath();
		context5.arc(200, counter2, 50, 0, 2 * Math.PI);
		context5.fill();
		context5.closePath();

		counter1++;
		counter2++;
	}, 10);
}