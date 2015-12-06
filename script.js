
var cameraModule = (function () {
	
	var views = [];
	
	var cameras = [
		{ name: "Bræðratunguvegur séð að Bræðratungu" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/braedratunguvegur_1.jpg" },
		{ name: "Bræðratunguvegur séð niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/braedratunguvegur_2.jpg" },
		{ name: "Bræðratunguvegur séð að Flúðum" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/braedratunguvegur_3.jpg" },
		{ name: "Draugahlíðabrekka til Reykjavíkur" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/litla_kaffistofan_1.jpg" },
		{ name: "Draugahlíðabrekka niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/litla_kaffistofan_2.jpg" },
		{ name: "Draugahlíðabrekka til Hveragerðis" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/litla_kaffistofan_3.jpg" },
		{ name: "Draugahlíðabrekka niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/litla_kaffistofan_4.jpg" },
		{ name: "Gjábakki til suðurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/gjabakki_1.jpg" },
		{ name: "Gjábakki séð niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/gjabakki_2.jpg" },
		{ name: "Gjábakki til norðurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/gjabakki_3.jpg" },
		{ name: "Hellisheiði séð til vesturs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/hellisheidi_1.jpg" },
		{ name: "Hellisheiði séð niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/hellisheidi_2.jpg" },
		{ name: "Hellisheiði séð til austurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/hellisheidi_3.jpg" },
		{ name: "Hveradalir til vesturs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/hveradalir_1.jpg" },
		{ name: "Hveradalir niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/hveradalir_2.jpg" },
		{ name: "Hveradalir austur Hellisheiði" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/hveradalir_3.jpg" },
		{ name: "Kambabrún - til Hveragerðis", url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/kambar_1.jpg" },
		{ name: "Kambabrún - niður á veg", url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/kambar_2.jpg" },
		{ name: "Kambabrún - niður á veg", url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/kambar_3.jpg" },
		{ name: "Kambabrún - til Reykjavíkur", url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/kambar_4.jpg" },
		{ name: "Landvegamót séð í átt að Þjórsá" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/landvegamot_1.jpg" },
		{ name: "Landvegamót séð upp Landveg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/landvegamot_2.jpg" },
		{ name: "Landvegamót séð í átt að Hellu" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/landvegamot_3.jpg" },
		{ name: "Landvegamót séð til suðurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/landvegamot_4.jpg" },
		{ name: "Lyngdalsheiði til vesturs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/lyngdalsheidi_1.jpg" },
		{ name: "Lyngdalsheiði niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/lyngdalsheidi_2.jpg" },
		{ name: "Lyngdalsheiði til austurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/lyngdalsheidi_3.jpg" },
		{ name: "Mosfellsheiði til vesturs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/mosfellsheidi_1.jpg" },
		{ name: "Mosfellsheiði niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/mosfellsheidi_2.jpg" },
		{ name: "Mosfellsheiði til austurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/mosfellsheidi_3.jpg" },
		{ name: "Sandskeið til austurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/sandskeid_1.jpg" },
		{ name: "Sandskeið" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/sandskeid_2.jpg" },
		{ name: "Sandskeið til vesturs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/sandskeid_3.jpg" },
		{ name: "Sandskeið niður á veg til vesturs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/sandskeid_4.jpg" },
		{ name: "Selvogur til vesturs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/selvogur_1.jpg" },
		{ name: "Selvogur niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/selvogur_2.jpg" },
		{ name: "Selvogur til austurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/selvogur_3.jpg" },
		{ name: "Skeiðavegamót séð í átt að Selfossi" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/skeidavegamot_1.jpg" },
		{ name: "Skeiðavegamót séð í átt að Þjórsá" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/skeidavegamot_2.jpg" },
		{ name: "Skeiðavegamót niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/skeidavegamot_3.jpg" },
		{ name: "Skeiðavegamót séð upp Skeið" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/skeidavegamot_4.jpg" },
		{ name: "Svínavatn til vesturs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/svinavatn_1.jpg" },
		{ name: "Svínavatn niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/svinavatn_2.jpg" },
		{ name: "Svínavatn til norðurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/svinavatn_3.jpg" },
		{ name: "Svínavatn til austurs" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/svinavatn_4.jpg" },
		{ name: "Þrengslavegamót til Reykjavíkur" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/threngslavegamot_1.jpg" },
		{ name: "Þrengslavegamót" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/threngslavegamot_2.jpg" },
		{ name: "Þrengslavegamót til Hveragerðis" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/threngslavegamot_3.jpg" },
		{ name: "Þrengslavegamót Þrengsli" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/threngslavegamot_4.jpg" },
		{ name: "Þrengslavegur séð í norður" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/threngsli_1.jpg" },
		{ name: "Þrengslavegur séð niður á veg" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/threngsli_2.jpg" },
		{ name: "Þrengslavegur séð yfir Ölfus" , url: "http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/threngsli_3.jpg" }
	];

	var onCameraChange = function(v, s) {
		var view = v;		
		var select = s;
		return function()
		{
			v.view.src = cameras[select.selectedIndex].url;
			view.cameraId = select.selectedIndex;
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
		
		var view = {view:element,cameraId:cameraId};
		
		select.onchange = onCameraChange(view, select); 		
		
		views.push(view);
	}

	var updateTimer = function(){
		for (var i = 0; i < views.length; i++) {
			views[i].view.src = cameras[views[i].cameraId].url + 
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

	cameraModule.setView(view1, option1, 10);
	cameraModule.setView(view2, option2, 13);
	cameraModule.setView(view3, option3, 16);
	cameraModule.setView(view4, option4, 19);
	cameraModule.setView(view5, option5, 24);
	cameraModule.setView(view6, option6, 34);
}


