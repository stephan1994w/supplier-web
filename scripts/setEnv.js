const fs = require('fs');
const path = require('path');

function getEnv(env) {
  const file = path.join(__dirname, `../env/${env}.json`);
  return require(file);
}

const args = process.argv.slice(2);

const envName = args[0];
if (!envName) {
  console.error('Error: No env name has been given');
  process.exit(1);
}

const config = getEnv(envName);
fs.writeFile(path.join(__dirname, '../src/config/env.json'), JSON.stringify(config, null, 2), function(err) {
  if (err) {
    console.error('Error: Failed to create env config file');
    process.exit(1);
    return;
  }

  console.log('Successfully set config file to', envName);
  process.exit(0);
});
