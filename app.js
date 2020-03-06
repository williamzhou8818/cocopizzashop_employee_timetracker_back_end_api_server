const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
// const db = require('./utils/database');


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// db.execute('SELECT * FROM employee')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {console.log(err)});

app.get('/', (req, res) => {
    res.json('Wellcome to Coco Pizza Shop Employee manage api')
});

app.use('/api/admin', require('./routes/admin'));
app.use('/api/payrolls', require('./routes/payroll'));
app.use('/api/ispaidlogs', require('./routes/is_paid_logs'));
app.use('/api/employee', require('./routes/employee'));
app.use('/api/clock_in_tracking_log', require('./routes/clock_in_tracking_logs'));
app.use('/api/clock_out_tracking_log', require('./routes/clock_out_tracking_logs'));

app.use('/api/products', require('./routes/products'));

app.listen(5000, () => {
    console.log('coco pizza shop emplyee manage api run at port 5000');
});

