nColumn=prompt("Numero de columnas: ");
nRow=prompt("Numero de filas: ");
heightUser=prompt("Altura: ");
widhtUser=prompt("Longitud: ");
tableColumn=""
for (i=0;i<nRow;i++){
	tableColum=tableColumn+"<tr>\n";
	for (j=0;j<nColumn/nRow;j++){
		tableColumn=tableColumn+"<th width="+widhtUser+">&nbsp;</th>\n"
	}
	tableColum=tableColumn+"/<tr>\n";
}
document.write("<table border=0 cellspacing=2 bgcolor=black width=200>\n<tr bgcolor=white height="+heightUser+">\n"+tableColumn);