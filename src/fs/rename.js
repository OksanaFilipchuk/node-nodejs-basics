const fs = require('fs');
const path = require('path');

const rename = async (oldPath, newPath) => {
    return new Promise((resolve, reject)=>{
        if(fs.existsSync(newPath) || !fs.existsSync(oldPath)){
            reject(new Error("FS operation failed"))
        } else {
            fs.rename(oldPath, newPath, err=>{reject(err)});
            resolve()
        }

    })
};

rename(path.resolve(__dirname, 'wrongFilename.txt'), path.resolve(__dirname, 'properFilename.md'));