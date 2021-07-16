const { Router } = require('express');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'API index page - 👋🌎🌍🌏'
  });
});

// TODO : getRows
router.get('/:commodityname', (req, res, next) => {
    // getRows by commodity name (unique?)
})

// TODO: create a table
router.post('/:commodityname', (req, res, next) => {
    // check if table exists
    // create a table for a commodity name and post data (rows) to that table
    // data needs to be in request body - an array of arrays (innermost array will be row) OR an array of objects where object has properties of SQL table
})

// ISSUE: need a unique parameter for each entry that needs to be updated
router.put('/:commodityname', (req, res, next) => {
    // check if table exists
    // update certain values in existing table 
    // if table doesn't exist, cannot "put"
})



module.exports = router;
