const express = require('express');
const router = express.Router();
const Pegawai = require('../models/Pegawai');
const auth = require('../middleware/auth'); // Pastikan middleware auth digunakan

// Ambil semua pegawai
router.get('/', auth, async (req, res) => {
  try {
    const pegawai = await Pegawai.find();
    res.json(pegawai);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ⬇️ Tambahkan route ini untuk mengambil data pegawai berdasarkan ID
router.get('/:id', auth, async (req, res) => {
  try {
    const pegawai = await Pegawai.findById(req.params.id);
    if (!pegawai) return res.status(404).json({ message: 'Pegawai tidak ditemukan' });
    res.json(pegawai);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tambah pegawai baru
router.post('/', auth, async (req, res) => {
  const pegawai = new Pegawai(req.body);
  try {
    const savedPegawai = await pegawai.save();
    res.status(201).json(savedPegawai);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update pegawai
router.put('/:id', auth, async (req, res) => {
  try {
    const updatedPegawai = await Pegawai.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPegawai);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete pegawai
router.delete('/:id', auth, async (req, res) => {
  try {
    await Pegawai.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pegawai berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;