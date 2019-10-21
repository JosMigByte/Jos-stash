
document.write("<table>\n<tr>");
nIncre=2;
for (j=0;j<10;j++){
	for (i=0;i<1;i++){
		document.write("<td>"+nIncre+"</td>\n<td>"+j+"</td>\n</tr>");
		nIncre++;
	}
}
document.write("</tr>\n</table>");