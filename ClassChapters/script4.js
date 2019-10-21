nColumn=prompt("Numero de columnas: ");
heightUser=prompt("Altura: ");
widhtUser=prompt("Longitud: ");
tableColumn="";
white=false;
for (i=0;i<nColumn;i++){
	if (white==false){
		tableColumn=tableColumn+"<td width="+widhtUser+" bgcolor=white >&nbsp;</td>\n";
		white=true;

	}else{
		tableColumn=tableColumn+"<td width="+widhtUser+" bgcolor=black >&nbsp;</td>\n";
		white=false;
	}
}
document.write("<table border=0 cellspacing=2 bgcolor=black width=200>\n<tr bgcolor=white height="+heightUser+">\n"+tableColumn);