cookie=document.cookie.split('=')[1];
if (cookie!=""){
	alert("Saludos "+cookie);
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