const { Router } = require('express');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API index page - 👋🌎🌍🌏'
  });
});

// TODO : define routes

module.exports = router;
