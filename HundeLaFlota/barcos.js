class patera{
	constructor(){
		this.health=true
		this.pos=new Array();
	}
}
class destructor{
	constructor(){
		this.health=true
		this.health2=true
		this.pos=new Array();
		this.dir="";
	}
}
class acorazado{
	constructor(){
		this.health=true
		this.health2=true
		this.health3=true
		this.pos=new Array();
		this.dir="";
	}
}
class portaaviones{
	constructor(){
		this.health=true
		this.health2=true
		this.health3=true
		this.health4=true
		this.pos=new Array();
		this.dir="";
	}
}
class tablero{
	constructor(){
		this.tableroA = new Array(10);
		for(var i=0; i<10; i++) {
    		this.tableroA[i] = new Array(10);
		}
		for(var i=0; i<10; i++) {
			for (var j=0; j<10; j++){
    		this.tableroA[i][j] = 0;
			}
		}
	}
}
