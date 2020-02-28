const express = require('express');
const router = express.Router();
const ClockInTrackingLogs = require('../models/clock_in_time_tracking_logs.model');


//Post for tarcking log
router.post('/', (req, res) => {
  
    //console.log(req.body)
    let _ClockInTrackingLogs = new ClockInTrackingLogs(req.body.employee_id, req.body.employee_name, req.body.hour_rate, req.body.clock_in_time, req.body.is_clock_in);

    _ClockInTrackingLogs.save()
        .then(()=> {res.json(_ClockInTrackingLogs) })
        .catch(()=>{});
    
  // res.send('Data been saved')
});

module.exports = router;



//  payrole  table

// All reata with employee id 

