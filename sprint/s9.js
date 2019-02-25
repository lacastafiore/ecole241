let max = 5, nbr, i;
for (i = 1; i < 6; i++) {
  nbr = prompt(`"Entrez le nombre ${i}:"`);
   if (nbr > max) {
    max = nbr;
  } 
} console.log(`${max}`);