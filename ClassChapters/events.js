function alertaClick(){
	alert("No me toques!");
}
function cordenadasRaton(event){
	x=event.clientX;
	y=event.clientY;
	coords = x+"\n"+y;
	document.getElementById("cords").innerHTML = coords;
}
function printCanvas(){
	tableText="<table border='1'>\n"
	for (i=0;i<100;i++){
		tableText=tableText+"<tr onclick=\"this.bgColor='white'\">\n";
		for (j=0;j<100;j++){
			tableText=tableText+"<td onmouseover=\"this.bgColor='red'\">0</td>\n";
		}
		tableText=tableText+"</tr>\n";
	}
	tableText=tableText+"\n</table>";
	document.getElementById("canvas").innerHTML=tableText;
}
function colorCell(){

}
function moveImage(event){
	x=event.clientX;
	y=event.clientY;
	img = document.getElementById('imgtomove');
	width = img.clientWidth/2;
	height = img.clientHeight/2;
	img.style.left=(x-width)+"px";
	img.style.right=(x+width)+"px";
	img.style.top=(y-height)+"px";
	img.style.bottom=(y+height)+"px";
}
