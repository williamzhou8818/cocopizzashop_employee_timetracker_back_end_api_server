const express = require('express');
const router = express.Router();
const IsPaidLogs = require('../models/is_paid_logs.model');


//Post for tarcking log
router.post('/', (req, res) => {

   // console.log(req.body)
    let _IsPaidLogs = new IsPaidLogs(
        req.body.employee_id, 
        req.body.employee_name,
        req.body.working_date,
        req.body.clock_in_time,
        req.body.clock_out_time,
        req.body.daily_paid,
        req.body.ref_payrolls_pay_on_date
    );

        _IsPaidLogs.save()
             .then(()=> {res.json(_IsPaidLogs) })
             .catch((err)=>{console.log(err)});
    
 // res.send(req.body.employee_name)
});

module.exports = router;



//  payrole  table

// All reata with employee id 

