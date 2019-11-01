tablaMulti="";
for (i=0;i<10;i++){
	tablaMulti=tablaMulti+"<h1> Tabla del "+i+"</h1><br>";
	for (j=0;j<10;j++){
		tablaMulti=tablaMulti+i+"*"+j+"="+(i*j)+"<br>";
	}
}
document.write(tablaMulti);