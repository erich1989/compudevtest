const express = require('express');
const router = express.Router();
const path = require('path')


//routes
router.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, '../../public/index.html'));
} )

router.get('/blog', (req, res) =>{
  res.sendFile(path.join(__dirname, '../../public/blog.html'));
} )

router.get('/servicios', (req, res) =>{
  res.sendFile(path.join(__dirname, '../../public/services.html'));
} )

router.get('/nosotros', (req, res) =>{
  res.sendFile(path.join(__dirname, '../../public/about.html'));
} )

module.exports = router;