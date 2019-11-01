nColumn=prompt("Numero de columnas: ");
heightUser=prompt("Altura: ");
widhtUser=prompt("Longitud: ");
tableColumn=""
for (i=0;i<nColumn;i++){
	tableColumn=tableColumn+"<td width="+widhtUser+">&nbsp;</td>\n"
}
document.write("<table border=0 cellspacing=2 bgcolor=black width=200>\n<tr bgcolor=white height="+heightUser+">\n"+tableColumn);