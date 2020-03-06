const db = require('../utils/database');

module.exports = class IsPaidLogsModel {
    constructor(
        employee_id,
        employee_name,
        working_date,
        clock_in_time,
        clock_out_time,
        daily_paid,
        ref_payrolls_pay_on_date
     ) {
        this.employee_id = employee_id;
        this.employee_name = employee_name;
        this.working_date = working_date;
        this.clock_in_time = clock_in_time;
        this.clock_out_time = clock_out_time;
        this.daily_paid = daily_paid,
        this.ref_payrolls_pay_on_date = ref_payrolls_pay_on_date;

    }

    save() {
        return db.execute('INSERT INTO is_paid_summary_logs ( employee_id,  employee_name, working_date, clock_in_time, clock_out_time, daily_paid, ref_payrolls_pay_on_date )  VALUES (?, ?, ?, ?, ?, ?, ?)', 
                [ 
                  this.employee_id, 
                  this.employee_name,
                  this.working_date,
                  this.clock_in_time,
                  this.clock_out_time,
                  this.daily_paid,
                  this.ref_payrolls_pay_on_date
                ]
        );
    }


 


}


