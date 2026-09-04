import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// Route index to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Friendly aliases
app.get('/nurse', (req, res) => {
  res.sendFile(path.join(__dirname, 'Nurse.html'));
});

app.get('/patient', (req, res) => {
  res.sendFile(path.join(__dirname, 'patient.html'));
});

app.get('/records', (req, res) => {
  res.sendFile(path.join(__dirname, 'file.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`MedVoice server running at http://${HOST}:${PORT}`);
});
