const db = require('../utils/database');

module.exports = class ClockOutTimeTrackingLogsModel {
    constructor(employee_id, clock_out_time, is_clock_out) {
        this.employee_id = employee_id,
        this.clock_out_time = clock_out_time,
        this.is_clock_out = is_clock_out
    }

     save() {
        return db.execute('INSERT INTO clock_out_tracking_logs (employee_id, clock_out_time, is_clock_out) VALUES (?, ?, ?)', 
                [ this.employee_id, this.clock_out_time, this.is_clock_out ]
        );
    }

   

}


