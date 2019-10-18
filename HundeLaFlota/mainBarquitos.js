tableroJugador1=new tablero();
tableroJugador2=new tablero();
tableroHitj1=new tablero();
tableroHitj2=new tablero();


var paterasJugador1=3;
var paterasJugador2=3;
var destructorJugador1=2;
var destructorJugador2=2;

var totalBarcosJ1=new Array();
var totalBarcosJ2=new Array();

var occupiedTiles=new Array();

var barcosTotalJ1=paterasJugador1+destructorJugador1;
var barcosTotalJ2=paterasJugador2+destructorJugador2;
function previewTableJ1(){
	document.write("1  2  3  4  5  6  7  8  9  10\n");
	$fullTable="<table border='1'>\n"
	for ($i=0;$i<10;$i++){
			$fullTable=$fullTable+"<tr>\n"
			for ($j=0;$j<10;$j++){
					$fullTable=$fullTable+"<td id='col"+$i+"row"+$j+"'>"+tableroJugador1.tableroA[$j][$i]+"\n"
				}
			}
		$fullTable=$fullTable+"</table>"
		document.write($fullTable);
}
function previewTableJ2(){
	document.write("1  2  3  4  5  6  7  8  9  10\n");
	$fullTable="<table border='1'>\n"
	for ($i=0;$i<10;$i++){
			$fullTable=$fullTable+"<tr>\n"
			for ($j=0;$j<10;$j++){
					$fullTable=$fullTable+"<td id='col"+$i+"row"+$j+"'>"+tableroJugador2.tableroA[$j][$i]+"\n"
				}
			}
		$fullTable=$fullTable+"</table>"
		document.write($fullTable);
}

function hitTableJ1(){
	document.write("<br>\n");
	$fullTable="<table border='1'>\n"
	for ($i=0;$i<10;$i++){
			$fullTable=$fullTable+"<tr>\n"
			for ($j=0;$j<10;$j++){
					$fullTable=$fullTable+"<td id='hitcol"+$i+"row"+$j+"'>"+tableroHitj1.tableroA[$j][$i]+"\n"
				}
			}
		$fullTable=$fullTable+"</table>"
		document.write($fullTable);
}

function hitTableJ2(){
	document.write("<br>\n");
	$fullTable="<table border='1'>\n"
	for ($i=0;$i<10;$i++){
			$fullTable=$fullTable+"<tr>\n"
			for ($j=0;$j<10;$j++){
					$fullTable=$fullTable+"<td id='hitcol"+$i+"row"+$j+"'>"+tableroHitj2.tableroA[$j][$i]+"\n"
				}
			}
		$fullTable=$fullTable+"</table>"
		document.write($fullTable);
}

function fill(){
	previewTableJ1(); 
	alert("Jugador 1, coloca tus barcos:");
	//player1 loop
	while (barcosTotalJ1 != 0){
		if (paterasJugador1 != 0){
			do{
				seleccion=prompt("El jugador 1 tiene "+	paterasJugador1+" pateras, ¿donde quieres colocarlas? ej, casilla 1-1, 2-5... siendo el primer numero la linea horizontal.");	
			}while (seleccion.split('-')[0]>10 && seleccion.split('-')[0]<0 && seleccion.split('-')[1]>10 && seleccion.split('-')[1]<0 || occupiedTiles.includes(seleccion));
			occupiedTiles.push(seleccion);
			totalBarcosJ1.push(new patera());
			totalBarcosJ1[totalBarcosJ1.length-1].pos.push(seleccion);

			nhorizontal=seleccion.split('-')[0]-1;
			nvertical=seleccion.split('-')[1]-1;
			tableroJugador1.tableroA[nhorizontal][nvertical]="P";

			placetoput="col"+nvertical+"row"+nhorizontal;
			document.getElementById(placetoput).innerHTML = 'P';
			paterasJugador1--;
			barcosTotalJ1--;
		}
		if (destructorJugador1 != 0 && paterasJugador1==0){
			do{
				correcto=false;
				seleccion=prompt("El jugador 1 tiene "+	destructorJugador1+" destructores, ¿donde quieres colocarlas y en que direccion?");
				direccion=prompt("¿En que direccion? ej: norte, sur, este o oeste.");
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;
				placetoput="col"+nvertical+"row"+nhorizontal; 
				if (direccion=="norte"){
					if (nvertical==1){
							//do nothing
					}
					if (tableroJugador1.tableroA[nhorizontal][nvertical-1]=="0"){
						correcto=true;
					}
				}
				if (direccion=="sur"){
					if (nvertical==9){
						//do nothing
					}
					if (tableroJugador1.tableroA[nhorizontal][nvertical+1]=="0"){
						correcto=true;
					}
				}
				if (direccion=="este"){
					if (nhorizontal==9){
					//do nothing
					}
					if (tableroJugador1.tableroA[nhorizontal-1][nvertical]=="0"){
						correcto=true;
					}
				}
				if (direccion=="oeste"){
					if (nhorizontal==1){
					}
					if (tableroJugador1.tableroA[nhorizontal+1][nvertical]=="0"){
						correcto=true;
					}
				}
			}while (seleccion.split('-')[0]>10 && seleccion.split('-')[0]<0 && seleccion.split('-')[1]>10 && seleccion.split('-')[1]<0  && document.getElementById(placetoput).innerHTML=="0" && correcto==false || occupiedTiles.includes(seleccion));
			occupiedTiles.push(seleccion);
			totalBarcosJ1.push(new destructor());
			totalBarcosJ1[totalBarcosJ1.length-1].pos=seleccion;
			totalBarcosJ1[totalBarcosJ1.length-1].dir=direccion;

			if (direccion=="oeste"){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;

				tableroJugador1.tableroA[nhorizontal][nvertical]="D";
				placetoput="col"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'D';

				tableroJugador1.tableroA[nhorizontal+1][nvertical]="D";
				placetoput="col"+nvertical+"row"+(nhorizontal-1);
				occupiedTiles.push(nvertical+"-"+nhorizontal);
				document.getElementById(placetoput).innerHTML = 'D';
			}
			if (direccion=="este"){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;

				tableroJugador1.tableroA[nhorizontal][nvertical]="D";
				placetoput="col"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'D';

				tableroJugador1.tableroA[nhorizontal-1][nvertical]="D";
				placetoput="col"+nvertical+"row"+(nhorizontal-1);
				occupiedTiles.push(nvertical+"-"+nhorizontal);
				document.getElementById(placetoput).innerHTML = 'D';
			}
			if (direccion=="sur"){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;
				tableroJugador1.tableroA[nhorizontal][nvertical]="D";
				placetoput="col"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'D';

				tableroJugador1.tableroA[nhorizontal][nvertical+1]="D";
				placetoput="col"+(nvertical+1)+"row"+nhorizontal;
				occupiedTiles.push(nvertical+"-"+nhorizontal);
				document.getElementById(placetoput).innerHTML = 'D';
			}
			if (direccion=="norte"){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;

				tableroJugador1.tableroA[nhorizontal][nvertical]="D";
				placetoput="col"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'D';

				tableroJugador1.tableroA[nhorizontal][nvertical-1]="D";
				placetoput="col"+(nvertical-1)+"row"+nhorizontal;
				occupiedTiles.push(nvertical+"-"+nhorizontal);
				document.getElementById(placetoput).innerHTML = 'D';
			}
			destructorJugador1--;
			barcosTotalJ1--;
			}
		}
	alert("Barcos colocados.");
	document.body.innerHTML="";
	previewTableJ2();
	occupiedTiles=new Array();
	alert("Jugador 2, coloca tus barcos:");
	//player2 loop
	while (barcosTotalJ2 != 0){
		if (paterasJugador2 != 0){
			do{
				seleccion=prompt("El jugador 2 tiene "+	paterasJugador2+" pateras, ¿donde quieres colocarlas? ej, casilla 1-1, 2-5... siendo el primer numero la linea horizontal.");	
			}while (seleccion.split('-')[0]>10 && seleccion.split('-')[0]<0 && seleccion.split('-')[1]>10 && seleccion.split('-')[1]<0 || occupiedTiles.includes(seleccion));
			occupiedTiles.push(seleccion);
			totalBarcosJ2.push(new patera());
			totalBarcosJ2[totalBarcosJ2.length-1].pos.push(seleccion);

			nhorizontal=seleccion.split('-')[0]-1;
			nvertical=seleccion.split('-')[1]-1;
			tableroJugador2.tableroA[nhorizontal][nvertical]="P";

			placetoput="col"+nvertical+"row"+nhorizontal;
			document.getElementById(placetoput).innerHTML = 'P';
			paterasJugador2--;
			barcosTotalJ2--;
		}
		if (destructorJugador2 != 0 && paterasJugador2==0){
			do{
				correcto=false;
				seleccion=prompt("El jugador 2 tiene "+	destructorJugador2+" destructores, ¿donde quieres colocarlas y en que direccion?");
				direccion=prompt("¿En que direccion? ej: norte, sur, este o oeste.");
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;
				placetoput="col"+nvertical+"row"+nhorizontal; 
				if (direccion=="norte"){
					if (nvertical==1){
							//do nothing
					}
					if (tableroJugador2.tableroA[nhorizontal][nvertical-1]=="0"){
						correcto=true;
					}
				}
				if (direccion=="sur"){
					if (nvertical==9){
						//do nothing
					}
					if (tableroJugador2.tableroA[nhorizontal][nvertical+1]=="0"){
						correcto=true;
					}
				}
				if (direccion=="este"){
					if (nhorizontal==9){
					//do nothing
					}
					if (tableroJugador2.tableroA[nhorizontal-1][nvertical]=="0"){
						correcto=true;
					}
				}
				if (direccion=="oeste"){
					if (nhorizontal==1){
					}
					if (tableroJugador2.tableroA[nhorizontal+1][nvertical]=="0"){
						correcto=true;
					}
				}
			}while (seleccion.split('-')[0]>10 && seleccion.split('-')[0]<0 && seleccion.split('-')[1]>10 && seleccion.split('-')[1]<0  && document.getElementById(placetoput).innerHTML=="0" && correcto==false || occupiedTiles.includes(seleccion));
			occupiedTiles.push(seleccion);
			totalBarcosJ2.push(new destructor());
			totalBarcosJ2[totalBarcosJ2.length-1].pos=seleccion;
			totalBarcosJ2[totalBarcosJ2.length-1].dir=direccion;

			if (direccion=="oeste"){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;

				tableroJugador2.tableroA[nhorizontal][nvertical]="D";
				placetoput="col"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'D';

				tableroJugador2.tableroA[nhorizontal+1][nvertical]="D";
				placetoput="col"+nvertical+"row"+(nhorizontal-1);
				occupiedTiles.push(nvertical+"-"+nhorizontal);
				document.getElementById(placetoput).innerHTML = 'D';
			}
			if (direccion=="este"){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;

				tableroJugador2.tableroA[nhorizontal][nvertical]="D";
				placetoput="col"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'D';

				tableroJugador2.tableroA[nhorizontal-1][nvertical]="D";
				placetoput="col"+nvertical+"row"+(nhorizontal-1);
				occupiedTiles.push(nvertical+"-"+nhorizontal);
				document.getElementById(placetoput).innerHTML = 'D';
			}
			if (direccion=="sur"){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;
				tableroJugador2.tableroA[nhorizontal][nvertical]="D";
				placetoput="col"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'D';

				tableroJugador2.tableroA[nhorizontal][nvertical+1]="D";
				placetoput="col"+(nvertical+1)+"row"+nhorizontal;
				occupiedTiles.push(nvertical+"-"+nhorizontal);
				document.getElementById(placetoput).innerHTML = 'D';
			}
			if (direccion=="norte"){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;

				tableroJugador2.tableroA[nhorizontal][nvertical]="D";
				placetoput="col"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'D';

				tableroJugador2.tableroA[nhorizontal][nvertical-1]="D";
				placetoput="col"+(nvertical-1)+"row"+nhorizontal;
				occupiedTiles.push(nvertical+"-"+nhorizontal);
				document.getElementById(placetoput).innerHTML = 'D';
			}
			destructorJugador2--;
			barcosTotalJ2--;
			}
		}
	occupiedTiles=null;
	play();
}
function play(){
	while (totalBarcosJ1!=0 || totalBarcosJ2!=0){ 
		document.body.innerHTML="";
		previewTableJ1();
		hitTableJ1();
		var seleccion=prompt("jugador 1, ¿donde atacaras? ej: 1-1, 2-1...");
		for (i=0;i<totalBarcosJ2.length;i++)
			if (totalBarcosJ2[i].pos.includes(seleccion)){
				nhorizontal=seleccion.split('-')[0]-1;
				nvertical=seleccion.split('-')[1]-1;
				tableroHitj1.tableroA[nhorizontal][nvertical]="X";
				placetoput="hitcol"+nvertical+"row"+nhorizontal;
				document.getElementById(placetoput).innerHTML = 'X';
				alert("Golpe!");
		}
	}
}