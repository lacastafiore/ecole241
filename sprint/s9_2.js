let max = 5;
let nbr;
let i = 1;
do {
  nbr = prompt(`"Entrez le nombre ${i}:"`);
  if (nbr > max) {
    max = nbr;
  } else {
    max = max;
  } i++;
} while (i < 6);
console.log(max);