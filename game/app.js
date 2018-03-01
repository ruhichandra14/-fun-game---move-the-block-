var gameApp = (function(){

	function gameInit(){
		function generateGrid(){
			var totalrowElems = 3;
			var totalColumns = 4;
			var divElem = document.getElementById('container');
			var tableElem = document.createElement("table");
			tableElem.setAttribute("id", "main-table");
			var count = 0;

			for (var r = 0; r < totalrowElems; r++) {
				var rowElem = document.createElement("tr");
				rowElem.setAttribute("class", "row-elem");
				for (var c = 0; c < totalColumns; c++) {
					var dataElem = document.createElement("td");
					dataElem.setAttribute("class", "data-info");
					dataElem.setAttribute("id", count);
					count ++;
					var data = document.createTextNode(generateRandomNo());
					dataElem.appendChild(data);
					rowElem.appendChild(dataElem);
				}      
				tableElem.appendChild(rowElem); 

			}
			divElem.appendChild(tableElem);
			generateBlankCell();
		}

		function generateRandomNo(){
			var min = 0;
			var max = 10;
			var randomNo;
			randomNo = Math.floor(Math.random() * (max - min + 1)) + min;
			return randomNo;
		}

		function generateBlankCell(){
			var randomIndex = Math.floor(Math.random() * (11 - 0 + 1));
			document.getElementsByClassName("data-info")[randomIndex].textContent = "x";
		}


		function moveLogic(){
			if(event.target.className == "data-info"){
				var mainTarget = document.getElementById(event.target.id);
				var left = document.getElementById(Number(event.target.id) - 1);
				var right = document.getElementById(Number(event.target.id) + 1);
				var top = document.getElementById(Number(event.target.id) - 4);
				var bottom = document.getElementById(Number(event.target.id) + 4);
				if(top && top.innerHTML == "x"){
					top.innerHTML = mainTarget.innerHTML;
					mainTarget.innerHTML = "x";

				}
				if(left && left.innerHTML == "x"){
					left.innerHTML = mainTarget.innerHTML;
					mainTarget.innerHTML = "x";

				}
				if(right && right.innerHTML == "x" ){
					right.innerHTML = mainTarget.innerHTML;
					mainTarget.innerHTML = "x";

				}
				if(bottom && bottom.innerHTML == "x"){
					bottom.innerHTML = mainTarget.innerHTML;
					mainTarget.innerHTML = "x";

				}		
			}

		}

		generateGrid();
		document.getElementById("main-table").addEventListener("click", function(){
			moveLogic()
		});
	}


	return{
		gameInit: gameInit,
	}

})()
gameApp.gameInit()

