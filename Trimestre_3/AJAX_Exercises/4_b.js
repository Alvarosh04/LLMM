const myObj = JSON.parse(this.responseText);
document.getElementById("demo").innerHTML = "Tipo del primer animal: " + myObj.pets[0].type;
