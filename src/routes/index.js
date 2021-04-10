const express = require('express');
const router = express.Router();
const path = require('path')


//routes
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../docs/index.html'));
})

router.get('/servicios', (req, res) => {
  res.sendFile(path.join(__dirname, '../../docs/services.html'));
})

router.get('/nosotros', (req, res) => {
  res.sendFile(path.join(__dirname, '../../docs/about.html'));
})

router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '../../docs/blog.html'));
})
router.get('/tienda', (req, res) => {
  res.sendFile(path.join(__dirname, '../../docs/shop.html'));
})

module.exports = router;