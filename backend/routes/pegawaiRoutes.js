const express = require('express');
const router = express.Router();
const Pegawai = require('../models/pegawai.js'); 
const auth = require('../middleware/auth'); 

router.get('/', async (req, res) => {
  try {
    const pegawai = await Pegawai.find();
    res.json(pegawai);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const pegawai = new Pegawai(req.body);
  try {
    const savedPegawai = await pegawai.save();
    res.status(201).json(savedPegawai);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedPegawai = await Pegawai.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPegawai);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Pegawai.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pegawai berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;