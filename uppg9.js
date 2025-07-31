function uppg9() {
  // Skapa en funktion som heter kollaOmJämtEllerUdda och tar in en array av siffror som argument
  function kollaOmJämtEllerUdda(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i] + " jämt");
      } else {
        console.log(arr[i] + " udda");
      }
    }
  }
  // Anropa funktionen och skicka med en array som argument
  const siffror = [1, 2, 3, 4, 5, 6];
  kollaOmJämtEllerUdda(siffror);
}
module.exports = { uppg9 };