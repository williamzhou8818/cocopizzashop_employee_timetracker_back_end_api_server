const express = require('express');
const router = express.Router();
const ClockOutTrackingLogs = require('../models/clock_out_time_tracking_logs.model');


//Post for tarcking log
router.post('/', (req, res) => {
  
    //console.log(req.body)
    let _ClockOutTrackingLogs = new ClockOutTrackingLogs(req.body.employee_id, req.body.clock_out_time, req.body.is_clock_out);

    _ClockOutTrackingLogs.save()
        .then(()=> {res.json(_ClockOutTrackingLogs) })
        .catch(()=>{});
    
  // res.send('Data been saved')
});

module.exports = router;


