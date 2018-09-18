"use strict";

function draw(){
	drawBackground();
	drawDebug();
	drawTerrain();
}


function drawDebug(){
	drawGridDebug();
	drawTextDebug();
}
function drawTextDebug(){
	canvasContext.save();
	canvasContext.fillStyle = 'magenta';
	canvasContext.font = '30px sans-serif';
	canvasContext.fillText("Map Builder", 10, 50);
	
	var brush;
	switch(activeBrush){
		case brushes.plain:
			brush = "Plain";
			break;
		case brushes.road:
			brush = "Road";
			break;
		case brushes.mountain:
			brush = "Mountain";
			break;
		default:
			break;
	}
	canvasContext.fillText("Brush: " + brush, 10, 80);
	canvasContext.restore();



	
}
function drawGridDebug(){
	for (var i = 0; i < grid.columns; i++){
		for (var j = 0; j < grid.rows; j++){
			drawGridPoint(grid.elem[i][j]);
		}
	}
}

function drawGridPoint(gridNode){
	// i refers to the column, j the row
	var color;
	if(gridNode.walkable){
		color = 'white';
	}
	else{
		if (gridNode.seenBefore){
		 	color = 'gray';
		}
		else{
			color = 'black';
		}
	}
	
	/*
	switch(gridNode.tileType){
		case brushes.plain:
			color = "green";
			break;
		case brushes.road:
			color = "black";
			break;
		case brushes.mountain:
			color = "brown";
			break;
		default:
			color  = "magenta";
			break;
	}
	*/
	canvasContext.save()
	//canvasContext.strokeStyle = 'black';
	canvasContext.fillStyle = color;
	canvasContext.translate(gridNode.x, gridNode.y);
	//canvasContext.strokeRect(-gridNode.width/4, -gridNode.height/4, gridNode.width/2, gridNode.height/2);
	canvasContext.fillRect(-gridNode.width/2, -gridNode.height/2, gridNode.width, gridNode.height);
	canvasContext.restore();

}

function drawCircle(xLoc, yLoc, radius, fillColor){
	
	canvasContext.save();
	canvasContext.fillStyle = fillColor;
	canvasContext.beginPath();
	canvasContext.arc(xLoc, yLoc, radius, 0, 2 * Math.PI);
	canvasContext.fill();
	canvasContext.restore();
}

function drawBackground(){
	canvasContext.fillStyle = 'AntiqueWhite';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function drawTerrain(){

}
