const myObj = JSON.parse(this.responseText);
let txt = "Nombre: " + myObj.name + ", Edad: " + myObj.age + ". Mascotas: ";
for (let i = 0; i < myObj.pets.length; i++) {
  txt += myObj.pets[i].name + " (" + myObj.pets[i].type + ")";
  if (i < myObj.pets.length - 1) txt += ", ";
}
document.getElementById("demo").innerHTML = txt;
