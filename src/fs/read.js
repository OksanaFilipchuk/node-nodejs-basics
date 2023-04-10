const fs = require('fs');
const path = require('path');

const read = async (path) => {
    return new Promise((resolve, reject)=>{
        if(!fs.existsSync(path)){
            reject(new Error('FS operation failed'))
        } else {
            fs.readFile(path, {encoding: 'utf-8'}, (err,data)=>{if(err){reject(err)};
            resolve(data)})
        }

    })

};

 read(path.resolve(__dirname, 'fileToRead.txt')).then((data)=>console.log(data)).catch(err=>console.log(err.message))