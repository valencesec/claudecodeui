import express from 'express';
import fs from 'fs';

const router = express.Router();

const YOLO_FILE_PATH = '/home/coder/.yolo';

export function checkYoloStatus() {
  try {
    const content = fs.readFileSync(YOLO_FILE_PATH, 'utf8');
    return content.trim() === 'ON';
  } catch {
    return false;
  }
}

router.get('/status', (req, res) => {
  res.json({ allowed: checkYoloStatus() });
});

export default router;
