const express = require('express');
const router = express.Router();

const Employee = require('../models/employee.model');

router.get('/', (req, res ) => {
    Employee.fetchAll()
    .then(([rows, fieldData]) => {
           
        res.json(rows)
    
    })
    .catch(err => console.log(err))
});

/** put Router Update 
 * update is 
 */
router.put('/:id', (req, res) => {
    Employee.updateById(req.params.id)
            .then(([rows, fieldData]) => {
                res.json(rows)
            })
            .catch(err => console.log(err));
});


router.put('/clockout/:id', (req, res) => {
    Employee.updateIsClockOutById(req.params.id)
            .then(([rows, fieldData]) => {
                res.json(rows)
            })
            .catch(err => console.log(err));
});

router.put('/clockinfalse/:id', (req, res) => {
    Employee.updateSetIsClockInFalseById(req.params.id)
            .then(([rows, fieldData]) => {
                res.json(rows)
            })
            .catch(err => console.log(err));
});

router.put('/clockoutfalse/:id', (req, res) => {
    Employee.updateIsClockOutFalseById(req.params.id)
            .then(([rows, fieldData]) => {
                res.json(rows)
            })
            .catch(err => console.log(err));
});






module.exports = router;