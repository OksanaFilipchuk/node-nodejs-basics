const fs = require('fs');
const path = require('path');

const create = async (path,data) => {
    return new Promise((resolve,reject)=> {
        if(!fs.existsSync(path)){
            fs.promises.writeFile(path, data, (err)=>{
                if(err){
                    return reject(err.message)
                }
                resolve()
    
            })
        }else {
            reject(new Error("FS operation failed"))
        }
        
    })
};

create(path.resolve(__dirname,'fresh.txt'), 'I am fresh and young').catch(err=>console.log(err));