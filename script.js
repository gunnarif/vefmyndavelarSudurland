
var cameraModule = (function () {
	
	var views = [];
	
	var cameras = [
		{ name: "Kambabrún - til Hveragerðis", url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/kambar_1.jpg" },
		{ name: "Kambabrún - niður á veg", url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/kambar_2.jpg" },
		{ name: "Kambabrún - niður á veg", url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/kambar_3.jpg" },
		{ name: "Kambabrún - til Reykjavíkur", url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/kambar_4.jpg" },
	];

	var onCameraChange = function(e, s) {
		var element = e;
		var select = s;		
		
		return function()
		{
			element.src = cameras[select.selectedIndex].url;
		}
	};
	
	var setView = function (element, select, cameraId) {
		element.src = cameras[cameraId].url;

		for (var i = 0; i < cameras.length ; i++) {
			var opt = document.createElement('option');
			opt.value = i.toString();
			opt.innerHTML = cameras[i].name;
			if (i == cameraId)	opt.selected = true;
			select.appendChild(opt);
		}
		
		select.onchange = onCameraChange(element, select); 		
		
		views.push({view:element,selection:select});
	}

	var updateTimer = function(){
		for (var i = 0; i < views.length; i++) {
			views[i].view.src = cameras[views[i].selection.selectedIndex].url + 
				"?" + new Date().getTime().toString();
		}
	}

	setInterval(updateTimer, 30000);

	return {
		setView: setView
	};
})();


document.body.onload = function () {
	var view1 = document.getElementById("view1");
	var view2 = document.getElementById("view2");
	var view3 = document.getElementById("view3");
	var view4 = document.getElementById("view4");
	var view5 = document.getElementById("view5");
	var view6 = document.getElementById("view6");

	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var option3 = document.getElementById("option3");
	var option4 = document.getElementById("option4");
	var option5 = document.getElementById("option5");
	var option6 = document.getElementById("option6");

	cameraModule.setView(view1, option1, 0);
	cameraModule.setView(view2, option2, 1);
	cameraModule.setView(view3, option3, 2);
	cameraModule.setView(view4, option4, 3);
	cameraModule.setView(view5, option5, 1);
	cameraModule.setView(view6, option6, 2);
}

