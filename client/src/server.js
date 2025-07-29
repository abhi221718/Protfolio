import express from 'express';
const app = express();
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
dotenv.config();

// Email notification route
app.post('/send-email', express.json(), async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS // Use Gmail App Password, not your main password
      }
    });
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.use(cors({ origin: true, credentials: true }));

mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

const fileSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  path: String,
  uploadedAt: { type: Date, default: Date.now }
});
const File = mongoose.model('File', fileSchema);

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
  // Store absolute path for cross-platform compatibility
  const absolutePath = path.resolve(req.file.path);
  const file = new File({
    ...req.file,
    path: absolutePath
  });
  await file.save();
  res.json({ success: true, fileId: file._id });
});

app.get('/download-cv', async (req, res) => {
  const file = await File.findOne().sort({ uploadedAt: -1 }); // latest file
  if (!file) return res.status(404).send('No CV uploaded');
  // Use path.resolve for cross-platform
  res.download(path.resolve(file.path), file.originalname);
});

app.listen(5000, '0.0.0.0', () => console.log('Server started on port 5000 and accessible on your network'));