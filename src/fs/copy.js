const fs = require('fs');
const path = require('path');

const copy = async (path,newPath) => {
return new Promise((resolve, reject)=>{
    if(!fs.existsSync(path)){
        fs.promises.cp(path, newPath, err=>{if(err){console.log(err)}})
        resolve()
    } else {
        reject(new Error('FS operation failed'))
    }
    
})};

copy(path.resolve(__dirname, 'files'), path.resolve(__dirname,"files_copy")).catch(err=>console.log(err));