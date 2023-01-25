const express=require('express');
const app = express();
const multer = require("multer");
const cors=require('cors')



const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/files')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({ storage: fileStorageEngine })


app.use(cors())

app.listen(4000,()=>{
    console.log("server 4000 started running");
})



app.post('/',upload.single("file"),(req,res)=>{

})

