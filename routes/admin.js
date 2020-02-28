const express = require('express');
const router = express.Router();

const Admin = require('../models/admin.model');

router.get('/', (req, res ) => {
    Admin.fetchAllTimeSheetData()
    .then(([rows, fieldData]) => {
        res.json(rows)
    
    })
    .catch(err => console.log(err))
});


/** Will ADD More Field */
module.exports = router;