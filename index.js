const valueToType = require("valuetotype-module");

process.stdin.resume();

process.stdin.on('data', function (data) {
  const sourceObject = JSON.parse(String(data));
  console.log(valueToType(sourceObject));
});
