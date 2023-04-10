const fs = require('fs');
const path = require('path');

const list = async (path) => {
    return new Promise((resolve, reject)=>{
        if(!fs.existsSync(path)){
            reject(new Error('FS operation failed'))
        }
        else{
            let result=[]
            fs.readdirSync(path).forEach(file=>{result.push(file)});
            resolve(result)
        }
    })
};

list(path.resolve(__dirname, 'files')).then(data=>console.log(data)).catch(err=> console.log(err.message));