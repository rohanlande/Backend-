import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //file is the file being uploaded
    // cb is a callback function that multer calls to determine where to store the file
    cb(null, "./public/temp"); // cb means callback function, null means no error, and "./public/temp" is the directory where files will be stored temporarily
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});
