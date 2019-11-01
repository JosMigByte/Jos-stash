fechaHoy= new Date();
fecha85=fechaHoy.setDate(fechaHoy.getDate() + 85);
fecha187=fechaHoy.setDate(fechaHoy.getDate() - 187);
fechaHoy.setFullYear(fechaHoy.getFullYear()+2);

document.write(fechaHoy+"\n"+fecha85+"\n"+fecha187+"\n")