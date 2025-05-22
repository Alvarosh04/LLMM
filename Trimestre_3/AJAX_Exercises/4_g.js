const myObj = JSON.parse(this.responseText);
let txt = "<table border='1'><tr><th>Nombre</th><th>Tipo</th></tr>";
for (let i = 0; i < myObj.pets.length; i++) {
  txt += "<tr><td>" + myObj.pets[i].name + "</td><td>" + myObj.pets[i].type + "</td></tr>";
}
txt += "</table>";
document.getElementById("demo").innerHTML = txt;
