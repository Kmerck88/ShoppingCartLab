let parsed = " ";
const myObject = [{

  Product: "Apple",
  Price: 1.20,

}, {

  Product: "Orange",
  Price: 1.30,

}, {

  Product: "Banana",
  Price: 1.40,
}.format(Price, Product)];


for (i = 0; i < myObject.length; i++) {
  let myobj = myObject[i];
  for (let property in myobj) {
    parsed += property + ": " + myobj[property] + "\n";
    alert(property);
    alert(myobj[property]);
  }
}
alert(parsed);


document.getElementById('arrayMessage').innerHTML = parsed;
