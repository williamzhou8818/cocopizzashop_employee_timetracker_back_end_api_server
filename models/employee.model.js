const db = require('../utils/database');

module.exports = class EmployeeModel {
    constructor(id, name, password, email, roles, hour_rate, is_clock_in, is_clock_out ) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.password = password;
        this.email = email;
        this.roles = roles;
        this.hour_rate = hour_rate;
        this.is_clock_in  = is_clock_in;
        this.is_clock_out = is_clock_out;
    }

    save() {
        // db.execute('INSERT INTO time_tracking_logs ('', employee_id) ');
    }

    static updateById(id) {
        return db.execute('UPDATE `employee` SET `is_clock_in` = ?  WHERE `employee`.`id` = ?  ', [true, `${id}`]);
    }
    static updateSetIsClockInFalseById(id) {
        return db.execute('UPDATE `employee` SET `is_clock_in` = ? WHERE `employee`.`id` = ? ', [false,`${id}`]);
    }

    static updateIsClockOutById(id) {
        return db.execute(' UPDATE `employee` SET `is_clock_out`=?  WHERE `employee`.`id`= ? ',  [true, `${id}`]);
    }

    static updateIsClockOutFalseById(id) {
        return db.execute('UPDATE `employee` SET `is_clock_out`=? WHERE `employee`.`id`= ? ', [false, `${id}`]);
    }





    static deleteById(id) {
       
    }

    static fetchAll() {
       return  db.execute('SELECT * FROM employee')    
    }

    static findById(id, cb) {
        
    }



}


