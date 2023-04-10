const path = require('path');
const fs = require('fs')

const remove = async (path) => {
    return new Promise((resolve,reject)=>{
        if(fs.existsSync(path)){
            fs.unlink(path, (err)=>{if(err){return reject(new Error())}})
            resolve()
        } else {
            reject(new Error('FS operation failed'))

        }
    })
};
remove(path.resolve(__dirname,'fileToRemove.txt')).catch(err=> console.log(err.message));