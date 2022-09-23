import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    const path=`projects/${req.body.name}`
    if(fs.existsSync(path)){
      cb(null, `projects/${req.body.name}`);
    }else{
      fs.mkdirSync(path,{recursive:true})
      cb(null, `projects/${req.body.name}`);
    }
    
  },
  filename(req, file, callback) {
    callback(null, `${file.originalname}`);
  }
});
const uploads = multer({ dest: `projects/`, storage: storage });
export default uploads;