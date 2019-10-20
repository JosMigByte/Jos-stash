message="Esto es un mensaje aabbcc";
message2="Esto es un segundo mensaje aabbcc";
alert(message+" "+message2);
document.write("a");



//ej4 pdf1
num1=5;
num2=11;
document.write("<br>"+num1+num2);

//ej3 pdf2
cRadius=100;
cDiameter=cRadius*2
cCircurferencia=cDiameter*3.14
document.write("<br> The cicurference is: "+cCircurferencia);

//ej4 pdf2
tCelcius=25;
tFahrenheit=tCelcius*9/5+32;
document.write("<br>"+tCelcius+"º in Celcius is "+tFahrenheit+"º in Fahrenheit");
document.write("<br>"+tFahrenheit+"º in Fahrenheit is "+((tFahrenheit-32)*5/9)+"º in Celcius");

//2.age calculator
function calculateAge(){
	bYear= prompt("Type your birthyear: ");
	date= new Date();
  	year= date.getFullYear();
  	document.write("<br> You are: "+(year-bYear)+" years old or "+((year-bYear)-1)+" years old.");
}

//3.snack calc
function calculateSupply(){
	age= prompt("Type your age: ");
	amount= prompt("How much you will eat each day: ");
	fullAmount=Math.round((365*(100-age))*amount);
	document.write("You will need "+fullAmount+" snacks in order to survive with them 100 years.")
}

//4 geometrizer
function calcCircumfrence(){
	radius= prompt("Give me the radius: ");
	document.write("The circurference is: "+(radius*2)*3.14);
}
function calcArea(){
	radius= prompt("Give me the radius: ");
	document.write("The area is: "+3.14*(radius*radius));
}

//5 temp convert

function celsiusToFahrenhei(){
	tCelcius= prompt("Give me the celcius: ");
	document.write(""+tCelcius+"ºC is "+((tCelcius*9/5)+32)+"Fº");
}
function FahrenheitToCelcius(){
	tFahrenheit= prompt("Give me the Fahrenheit!: ");
	document.write(""+tFahrenheit+"ºF is "+((tFahrenheit-32)*5/9)+"Cº");
}
