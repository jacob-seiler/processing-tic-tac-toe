/**

    Jacob Seiler
    4/5/2016
    Tic Tac Toe

    * Click on a spot in the grid to place your piece
    * Turn is indicated by color on the border
    * 3 in a row to win

**/

var xTurn = false;
var pieces = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
	createCanvas(400, 400);
}

var drawPiece = function(X, position) {
	var x = 0;
	var y = 0;

	if (position === 1) {
		x = 50;
		y = 50;
	} else if (position === 2) {
		x = 200;
		y = 50;
	} else if (position === 3) {
		x = 350;
		y = 50;
	} else if (position === 4) {
		x = 50;
		y = 200;
	} else if (position === 5) {
		x = 200;
		y = 200;
	} else if (position === 6) {
		x = 350;
		y = 200;
	} else if (position === 7) {
		x = 50;
		y = 350;
	} else if (position === 8) {
		x = 200;
		y = 350;
	} else if (position === 9) {
		x = 350;
		y = 350;
	}

	if (X) {
		noFill();
		stroke(240, 245, 80);
		line(x - 50, y - 50, x + 50, y + 50);
		line(x + 50, y - 50, x - 50, y + 50);
	} else {
		noFill();
		stroke(40, 145, 190);
		ellipse(x, y, 75, 75);
	}
};

var checkWin = function() {
	if (pieces[0] === 1 && pieces[1] === 1 && pieces[2] === 1) {
		return [1, 0, 2];
	} else if (pieces[3] === 1 && pieces[4] === 1 && pieces[5] === 1) {
		return [1, 3, 5];
	} else if (pieces[6] === 1 && pieces[7] === 1 && pieces[8] === 1) {
		return [1, 6, 8];
	} else if (pieces[0] === 1 && pieces[3] === 1 && pieces[6] === 1) {
		return [1, 0, 6];
	} else if (pieces[1] === 1 && pieces[4] === 1 && pieces[7] === 1) {
		return [1, 1, 7];
	} else if (pieces[2] === 1 && pieces[5] === 1 && pieces[8] === 1) {
		return [1, 2, 8];
	} else if (pieces[0] === 1 && pieces[4] === 1 && pieces[8] === 1) {
		return [1, 0, 8];
	} else if (pieces[2] === 1 && pieces[4] === 1 && pieces[6] === 1) {
		return [1, 2, 6];
	}

	if (pieces[0] === 2 && pieces[1] === 2 && pieces[2] === 2) {
		return [2, 0, 2];
	} else if (pieces[3] === 2 && pieces[4] === 2 && pieces[5] === 2) {
		return [2, 3, 5];
	} else if (pieces[6] === 2 && pieces[7] === 2 && pieces[8] === 2) {
		return [2, 6, 8];
	} else if (pieces[0] === 2 && pieces[3] === 2 && pieces[6] === 2) {
		return [2, 0, 6];
	} else if (pieces[1] === 2 && pieces[4] === 2 && pieces[7] === 2) {
		return [2, 1, 7];
	} else if (pieces[2] === 2 && pieces[5] === 2 && pieces[8] === 2) {
		return [2, 2, 8];
	} else if (pieces[0] === 2 && pieces[4] === 2 && pieces[8] === 2) {
		return [2, 0, 8];
	} else if (pieces[2] === 2 && pieces[4] === 2 && pieces[6] === 2) {
		return [2, 2, 6];
	}

	var tie = true;
	for (var i = 0; i < pieces.length; i++) {
		if (pieces[i] === 0) {
			tie = false;
		}
	}

	if (tie) {
		return [3, 0, 0];
	} else {
		return [0, 0, 0];
	}
};
var drawWin = function(pos1, pos2) {
	var x1 = 0;
	var y1 = 0;
	var x2 = 0;
	var y2 = 0;

	if (pos1 === 1) {
		x1 = 50;
		y1 = 50;
	} else if (pos1 === 2) {
		x1 = 200;
		y1 = 50;
	} else if (pos1 === 3) {
		x1 = 350;
		y1 = 50;
	} else if (pos1 === 4) {
		x1 = 50;
		y1 = 200;
	} else if (pos1 === 5) {
		x1 = 200;
		y1 = 200;
	} else if (pos1 === 6) {
		x1 = 350;
		y1 = 200;
	} else if (pos1 === 7) {
		x1 = 50;
		y1 = 350;
	} else if (pos1 === 8) {
		x1 = 200;
		y1 = 350;
	} else if (pos1 === 9) {
		x1 = 350;
		y1 = 350;
	}

	if (pos2 === 1) {
		x2 = 50;
		y2 = 50;
	} else if (pos2 === 2) {
		x2 = 200;
		y2 = 50;
	} else if (pos2 === 3) {
		x2 = 350;
		y2 = 50;
	} else if (pos2 === 4) {
		x2 = 50;
		y2 = 200;
	} else if (pos2 === 5) {
		x2 = 200;
		y2 = 200;
	} else if (pos2 === 6) {
		x2 = 350;
		y2 = 200;
	} else if (pos2 === 7) {
		x2 = 50;
		y2 = 350;
	} else if (pos2 === 8) {
		x2 = 200;
		y2 = 350;
	} else if (pos2 === 9) {
		x2 = 350;
		y2 = 350;
	}

	stroke(255, 255, 255);
	strokeWeight(50);
	line(x1, y1, x2, y2);
};

draw = function() {
	background(205, 180, 150);
	stroke(85, 85, 85);
	strokeWeight(20);
	line(125, 50, 125, 350);
	line(275, 50, 275, 350);
	line(50, 125, 350, 125);
	line(50, 275, 350, 275);

	for (var i = 0; i < pieces.length; i++) {
		if (pieces[i] === 0) {
			continue;
		} else if (pieces[i] === 1) {
			drawPiece(true, i + 1);
		} else if (pieces[i] === 2) {
			drawPiece(false, i + 1);
		}
	}

	if (checkWin()[0] === 3) {
		textFont("impact", 300);
		textAlign(CENTER, CENTER);
		fill(250, 95, 95);
		strokeWeight(0);
		text("TIE", 200, 200);
	} else if (checkWin()[0] !== 0) {
		drawWin(checkWin()[1] + 1, checkWin()[2] + 1);
		if (checkWin()[0] === 1) {
			textFont("impact", 100);
			textAlign(CENTER, CENTER);
			fill(250, 95, 95);
			strokeWeight(0);
			text("X WINS", 200, 200);
		} else {
			textFont("impact", 100);
			textAlign(CENTER, CENTER);
			fill(250, 95, 95);
			strokeWeight(0);
			text("O WINS", 200, 200);
		}
	} else {
		noFill();
		if (xTurn) {
			stroke(240, 245, 80);
		} else {
			stroke(40, 145, 190);
		}
		rect(0, 0, 400, 400);
	}
};
mousePressed = function() {
	if (checkWin()[0] !== 0) {
		return;
	}

	var pos = 0;

	if (mouseX >= 0 && mouseX <= 125 && mouseY >= 0 && mouseY <= 125) {
		pos = 0;
	} else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 0 && mouseY <= 125) {
		pos = 1;
	} else if (mouseX >= 275 && mouseX <= 400 && mouseY >= 0 && mouseY <= 125) {
		pos = 2;
	} else if (mouseX >= 0 && mouseX <= 125 && mouseY >= 125 && mouseY <= 275) {
		pos = 3;
	} else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 125 && mouseY <= 275) {
		pos = 4;
	} else if (mouseX >= 275 && mouseX <= 400 && mouseY >= 125 && mouseY <= 275) {
		pos = 5;
	} else if (mouseX >= 0 && mouseX <= 125 && mouseY >= 275 && mouseY <= 400) {
		pos = 6;
	} else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 275 && mouseY <= 400) {
		pos = 7;
	} else if (mouseX >= 275 && mouseX <= 400 && mouseY >= 275 && mouseY <= 400) {
		pos = 8;
	}

	if (pieces[pos] !== 0) {
		return;
	}

	if (xTurn) {
		pieces[pos] = 1;
	} else {
		pieces[pos] = 2;
	}

	if (xTurn) {
		xTurn = false;
	} else {
		xTurn = true;
	}
};
