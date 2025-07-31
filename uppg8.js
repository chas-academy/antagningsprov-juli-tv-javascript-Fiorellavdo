<<<<<<< HEAD


function uppg8(){
=======
function uppg8(){

>>>>>>> 795dece (Första commit med alla uppgifter)
// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
const personer = [
    { name: "Samuel", age: 26 },
    { name: "Uffe", age: 35 },
    { name: "Fiorella", age: 45 },
    { name: "Viktor", age: 28 },
    { name: "Andreas", age: 31 },
<<<<<<< HEAD
  ]; 
=======
  ];

 
>>>>>>> 795dece (Första commit med alla uppgifter)
// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
function skrivUtNamnOver30(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].age > 30) {
        console.log(arr[i].name);
      }
    }
  }
// anropa funktionen och skicka med arrayen som argument
 skrivUtNamnOver30(personer);
}
<<<<<<< HEAD
module.exports = { uppg8 };
=======

module.exports = { uppg8 };
>>>>>>> 795dece (Första commit med alla uppgifter)
