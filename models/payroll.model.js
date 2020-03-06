const db = require('../utils/database');

module.exports = class PayRollModel {
    constructor(
        employee_id,
        employee_name,
        hour_rate,
        total_hours_worked,
        total_weekly_paid,
        paid_on_date
     ) {
        this.employee_id = employee_id;
        this.employee_name = employee_name;
        this.hour_rate = hour_rate;
        this.total_hours_worked = total_hours_worked;
        this.total_weekly_paid = total_weekly_paid;
        this.paid_on_date = paid_on_date;

    }

    save() {
        return db.execute('INSERT INTO payrolls ( employee_id,  employee_name, hour_rate, total_hours_worked, total_weekly_paid, paid_on_date)  VALUES (?, ?, ?, ?, ?, ?)', 
                [ 
                  this.employee_id, 
                  this.employee_name,
                  this.hour_rate,
                  this.total_hours_worked,
                  this.total_weekly_paid,
                  this.paid_on_date
                ]
        );
    }


 


}


