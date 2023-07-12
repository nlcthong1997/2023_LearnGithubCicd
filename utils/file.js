import fs from 'fs';
import path from 'path';
function getDirLogPath(filePath) {
    let rootPath = path.resolve() + '/logs';
    return path.join(rootPath, filePath);
}

export const write = (path, content) => {
    fs.writeFile(getDirLogPath(path), content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

export const append = (path, content) => {
    content = "\n" + content;
    fs.appendFile(getDirLogPath(path), content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}