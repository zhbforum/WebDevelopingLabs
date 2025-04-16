import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();
const DATA_FILE = path.resolve('data.json');

let data = [];

if (fs.existsSync(DATA_FILE)) 
{
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  try 
  {
    data = JSON.parse(raw);
    if (!Array.isArray(data)) data = []; 
  } 
  
  catch (err) 
  {
    console.error("Error while reading JSON:", err);
    data = [];
  }
}

router.post('/', (req, res) => 
{
  const item = req.body;
  data.push(item);

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  res.status(201).json({ message: 'Data saved successfully', data: item });
});

router.get('/', (req, res) => 
{
  res.status(200).json(data);
});

export default router;
