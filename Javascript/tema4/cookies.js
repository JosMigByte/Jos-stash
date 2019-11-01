function readCookies(){
	var cookie = document.cookie;
	name=cookie.split(';')[0];
	name=name.split('=')[1];
	if (cookie!=""){
		alert("Saludos "+name);
	}
	cookie = document.cookie;
	color=cookie.split(';')[1];
	color=color.split('=')[1];
	document.getElementById("bod").style.backgroundColor=color
	//SETTING SITE COOKIES
}


function readName(){
	var date = new Date();
	date.setTime(date.getTime() + (5 * 60 * 1000));
	document.cookie = "username="+document.getElementById("nombreText").value; { expires: date };
	cookie=document.cookie.split('=')[1];
	alert("Saludos "+cookie);
}
function checkCookie(){
	alert(document.cookie);
}
function cerrarSesion(){
	document.cookie = "username=";
}

function redBackground(){
	document.cookie = "color=red";
	cookie = document.cookie;
	color=cookie.split(';')[1];
	color=color.split('=')[1];
	document.getElementById("bod").style.backgroundColor=color
}
function blueBackground(){
	document.cookie = "color=blue";
	cookie = document.cookie;
	color=cookie.split(';')[1];
	color=color.split('=')[1];
	document.getElementById("bod").style.backgroundColor=color
}