const db = require('../utils/database');

module.exports = class ClockInTimeTrackingLogsModel {
    constructor(employee_id, employee_name, hour_rate, clock_in_time, is_clock_in) {
        this.employee_id = employee_id,
        this.employee_name = employee_name,
        this.hour_rate = hour_rate,
        this.clock_in_time = clock_in_time,
        this.is_clock_in = is_clock_in
    }

     save() {
        return db.execute('INSERT INTO clock_in_tracking_logs (employee_id, employee_name, hour_rate,  clock_in_time, is_clock_in) VALUES (?, ?, ?, ?, ?)', 
                [ this.employee_id, this.employee_name, this.hour_rate, this.clock_in_time, this.is_clock_in ]
        );
    }

    // static deleteById(id) {
       
    // }

    // static fetchAll() {
    //    return  db.execute('SELECT * FROM employee')    
    // }

    // static findById(id, cb) {

    // }


}


