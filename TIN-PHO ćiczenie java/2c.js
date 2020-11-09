2c plik js:
function readTable (tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
};
var auto = [
  "AUDI", //indeks 0
  "BMW", //indeks 1
  "LEXUS", //indeks 2
  "KIA", //indeks 3
  "JAGUAR", //indeks 4
];

readTable(auto);