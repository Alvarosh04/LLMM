const myObj = JSON.parse(this.responseText);
let txt = "Nombres de mascotas:<br>";
for (let i = 0; i < myObj.pets.length; i++) {
  txt += "- " + myObj.pets[i].name + "<br>";
}
document.getElementById("demo").innerHTML = txt;
