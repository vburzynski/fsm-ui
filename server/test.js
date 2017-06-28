const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

const mocha = new Mocha();
const testDir = 'test';

fs.readdirSync(testDir)
  .filter(file => file.substr(-3) === '.js')
  .forEach((file) => {
    console.log(`adding: ${file}`);
    mocha.addFile(path.join(testDir, file));
  });

mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures);
  });
});
