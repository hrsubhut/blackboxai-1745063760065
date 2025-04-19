const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Storage setup for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// In-memory data store (for demo purposes)
let userPreferences = {};
let clothesDataset = [];

// Routes

// Upload clothes images
app.post('/api/upload-clothes', upload.array('clothesImages', 20), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }
  // For demo, just store file info in dataset
  req.files.forEach(file => {
    clothesDataset.push({
      filename: file.filename,
      path: file.path,
      originalname: file.originalname,
      uploadedAt: new Date()
    });
  });
  res.json({ message: 'Clothes images uploaded successfully', files: req.files.length });
});

// Save user preferences
app.post('/api/save-preferences', (req, res) => {
  const prefs = req.body;
  if (!prefs) {
    return res.status(400).json({ message: 'No preferences provided' });
  }
  userPreferences = prefs;
  res.json({ message: 'Preferences saved successfully' });
});

// Get daily outfit suggestion (placeholder)
app.get('/api/daily-outfit', (req, res) => {
  // Placeholder logic: return random clothes from dataset and dummy hairstyle
  if (clothesDataset.length === 0) {
    return res.json({ message: 'No clothes uploaded yet' });
  }
  const randomClothes = clothesDataset[Math.floor(Math.random() * clothesDataset.length)];
  const outfit = {
    clothes: randomClothes.originalname,
    hairstyle: 'Classic short haircut'
  };
  res.json({ outfit });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
