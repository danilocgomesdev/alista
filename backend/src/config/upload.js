const multer = require('multer');
const path = require('path');
const crypto = require("crypto");


module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: multer.diskStorage({
destination: (request, file, cb) => {
  cb (null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
},
filename: (request, file, cb) => {
  crypto.randomBytes(8, (err, hash) => {
    if (err) cb(err);

    const fileName = `${hash.toString("hex")}-${file.originalname}`;

    cb(null, fileName);
  });
}
}),
limits: {
  fileSize: 2 * 1024 * 1024
},
fileFilter: (request, file, cb) => {
  const allowedMimes = [
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/gif"
  ];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Formato de arquivo invalido!"));
  }
}
};