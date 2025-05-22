const myObj = JSON.parse(this.responseText);
document.getElementById("demo").innerHTML = "Edad: " + myObj.age;
