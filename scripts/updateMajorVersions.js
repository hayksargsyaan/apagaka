const fs = require('fs');

const path = './packages/';

fs.readdir(path, (err, files) => {
  files.forEach(file => fs.readdir(`${path}${file}`, (err, files) => {
    console.log(err);
    console.log(files);
    console.log(file);
    const json = JSON.parse(fs.readFileSync(`${path}${file}/package.json`));
    console.log(json.version, '>>');
    // const pckgJSON = require(`./packages/${file}/package.json`);
    // console.log(pjson.version);
  }))

});
