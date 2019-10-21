n1=Math.random();
n2=Math.floor((Math.random() * 200) + 100);

n1User=prompt("Dame el primer numero: ");
n2User=prompt("Dame el segundo numero: ");
n3=Math.floor((Math.random() * n2User) + n1User);

document.write(n1+"<br>"+n2+"<br>"+n3+"<br>");