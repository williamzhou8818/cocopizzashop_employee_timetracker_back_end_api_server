const db = require('../utils/database');

module.exports = class AdminModel {
    constructor(employee_id, clock_in_time, clock_out_time, work_hours, date ) {
        this.employee_id = employee_id;
        this.clock_in_time = clock_in_time;
        this.clock_out_time = clock_out_time;
        this.work_hours = work_hours;
        this.date = date
    }

    // save() {
    //     // db.execute('INSERT INTO time_tracking_logs ('', employee_id) ');
    // }

    // static updateById(id) {
    //     return db.execute(`UPDATE employee SET is_clock_in=1 WHERE id=${id}`);
    // }

    // static updateIsClockOutById(id) {
    //     return db.execute(`UPDATE employee SET is_clock_out=1 WHERE id=${id}`);
    // }


    // static deleteById(id) {
       
    // }

    static fetchAllTimeSheetData() {
       return  db.execute('SELECT clock_in_tracking_logs.employee_id, clock_in_tracking_logs.employee_name, clock_in_tracking_logs.hour_rate, clock_in_tracking_logs.clock_in_time, clock_out_tracking_logs.clock_out_time, TIMEDIFF(clock_out_tracking_logs.clock_out_time, clock_in_tracking_logs.clock_in_time) as work_hours, clock_in_tracking_logs.created_time as date FROM clock_in_tracking_logs LEFT JOIN clock_out_tracking_logs ON clock_in_tracking_logs.id=clock_out_tracking_logs.id ORDER BY clock_in_tracking_logs.clock_in_time')    
    }

    // static findById(id, cb) {
        
    // }



}


