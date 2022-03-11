window.onload = pageLoad;

function pageLoad(){
    var startbutton = document.getElementById("start");
    startbutton.onmousedown = startGame;
	var gameLayer = document.getElementById("game-layer")
	gameLayer.id = "squares-layer";
	var gameContainer = document.getElementById("game-container")
	gameContainer.id = "squares-container";
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.1; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	clearInterval(timer);
	timer = setInterval(timeCount,TIMER_TICK)
	x.innerHTML = second;
	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer div");
		if(second > 0){
			second -= 1;
			console.log(timer);
			x.innerHTML = second;
			if(allbox.length == 0){
				clearScreen();
				clearInterval(timer);
				alert("You Win !")
			}
		}
		else {
			clearInterval(timer);
			if(allbox.length > 0){
				alert("Game Over")
				clearScreen();
			}
		}
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
    // สร้างกล่องตาม input ที่เราใส่ 
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("squares-layer");
    var colorDrop = document.getElementById("color").value;
    for (var i =0; i<numbox;i++){
        var tempbox = document.createElement("div");
        tempbox.className = "square";
        tempbox.id = "box"+i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.background = colorDrop;
        //add element to HTML node
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box)
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#squares-layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i])
		console.log(i);
	}
}




