const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

const purgePath = './dist/prod';
const safeList = [
    'mat-primary',
    'mat-accent',
    'mat-error',
    'mat-warn',
];

// find the styles css file
const files = getCssFiles(purgePath);
let data = [];

if (files.length <= 0) {
    console.log(`No StyleSheets, please confirm the path : ${purgePath} Or forgot to run build?`);
    return;
}

for (let file of files) {
    // get original file size
    const originalSize = getFilesizeInKiloBytes(purgePath + '/' + file) + ' KB';
    var originalFile = { 'file': file, 'originalSize': originalSize, 'newSize': '' };
    data.push(originalFile);
}

console.log('Run PurgeCSS...');

exec(`purgecss -css ${purgePath}/*.css --content ${purgePath}/index.html ${purgePath}/*.js --safelist ${safeList.join(' ')} -o ${purgePath}/`, function () {
    for (let file of data) {
        // get new file size
        const newSize = getFilesizeInKiloBytes(`${purgePath}/` + file.file) + ' KB';
        file.newSize = newSize;
    }
    console.table(data);
});

function getFilesizeInKiloBytes(filename) {
    var stats = fs.statSync(filename);
    var fileSizeInBytes = stats.size / 1024;
    return fileSizeInBytes.toFixed(2);
}

function getCssFiles(dir) {
    const files = fs.readdirSync(dir);
    return files.filter(file => path.extname(file).toLowerCase() === '.css');
}
