const express = require('express');
const router = express.Router();
const PayRolls = require('../models/payroll.model');


//Post for tarcking log
router.post('/', (req, res) => {

    // console.log(req.body)
    let _PayRolls = new PayRolls(
                    req.body.employee_id,
                    req.body.employee_name, 
                    req.body.hour_rate, 
                    req.body.total_hours_worked,
                    req.body.total_weekly_paid,
                    req.body.is_paid_done,
                    req.body.date_of_paid
                            
                );

    _PayRolls.save()
             .then(()=> {res.json(_PayRolls) })
             .catch((err)=>{console.log(err)});
    
 // res.send(req.body.employee_name)
});

module.exports = router;



//  payrole  table

// All reata with employee id 

