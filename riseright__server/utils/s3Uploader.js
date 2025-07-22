import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,       // From .env
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // From .env
  region: process.env.AWS_REGION                    // Optional but recommended
});

// 🔒 Make sure .env contains AWS_BUCKET_NAME
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME, // 🧠 This must be set!
    acl: 'public-read', // or 'private' if needed
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const filename = `${Date.now().toString()}-${file.originalname}`;
      cb(null, filename);
    }
  })
});

export default upload;
