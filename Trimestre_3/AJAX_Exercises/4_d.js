const myObj = JSON.parse(this.responseText);
document.getElementById("demo").innerHTML = "Número de mascotas: " + myObj.pets.length;
