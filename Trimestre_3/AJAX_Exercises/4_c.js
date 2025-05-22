const myObj = JSON.parse(this.responseText);
document.getElementById("demo").innerHTML = "Nombre del primer animal: " + myObj.pets[0].name;
