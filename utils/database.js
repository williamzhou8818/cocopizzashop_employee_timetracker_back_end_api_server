const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    port: '8889',
    user:'root',
    password: 'root',
    database:'coco_pizza_shop_employee_timetracking_api',

});

module.exports = pool.promise();
