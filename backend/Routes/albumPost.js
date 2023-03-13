const express = require("express");
const router = express.Router();
const imgModel = require("./../models/createPost");
const multer = require("multer");
const fs = require("fs");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../backend/uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null,fileName)
    }
  });
  const upload = multer({ storage: storage ,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

  router.post("/createalbum", upload.single("testImage"), (req, res,error) => {
   console.log("in the backend",req.file)
   console.log(error)
        const saveImg = new imgModel({
            title: req.body.title,
            img: {
              data: fs.readFileSync("uploads/" + req.file.filename),
              contentType: "image/jpeg",
            },
            description: req.body.description,
          });
          saveImg
            .save()
            .then((res) => {
              console.log("image saved successfully");
            })
            .catch((err) => {
              console.log("image couldnot upload because ", err);
            });
   
   
  });

router.get('/createalbum',async (req,res)=>{
    const allData = await imgModel.find()
    res.json(allData)
    console.log("image received successfully")
})

  module.exports = router;