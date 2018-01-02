const path = require('path');
const fs = require('fs');
const moduleAlias = require('module-alias');

const registerAliasesForSubdirs = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(fileName => {
        const filePath = path.join(dir, fileName);
        if (fs.lstatSync(filePath).isDirectory()) {
            moduleAlias.addAlias(`@${fileName}`, filePath);
        }
    })
};

const registerGlobalAliases = () => moduleAlias();

const rootSrcDir = path.join(__dirname, '..');
registerAliasesForSubdirs(rootSrcDir);
registerGlobalAliases();
