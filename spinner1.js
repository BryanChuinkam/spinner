

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');   // Need to escape the backslash since it's a special character.
}, 700);

// ......................
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 800);

setTimeout(() => {
  process.stdout.write('\n');
}, 1000);

