const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('masuk');
  res.send({masuk:'masuk'})
})

module.exports = router;
