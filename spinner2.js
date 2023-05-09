
const writeSpinner = function(delay, spinnerSymbol) {
  setTimeout(() => {
    process.stdout.write(spinnerSymbol);
  }, delay);
};

writeSpinner(100, '\r|   ');
writeSpinner(300, '\r/   ');
writeSpinner(500, '\r-   ');
writeSpinner(700, '\r\\   ');
writeSpinner(800, '\r|   ');
writeSpinner(1000, '\n');
