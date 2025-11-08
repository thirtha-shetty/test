const { add } = require('./index');
if (add(2, 3) === 5) {
  console.log("JS Service test passed!");
  process.exit(0);
} else {
  console.error("JS Service test failed!");
  process.exit(1);
}
