const db = require('../utils/database');

module.exports = class PayRollModel {
    constructor(
        ref_pizzas_categories_id,
        tittle,
        price,
        selections
     ) {
        this.ref_pizzas_categories_id = ref_pizzas_categories_id;
        this.tittle = tittle;
        this.price = price;
        this.selections = selections;
    }

    save() {
        return db.execute('INSERT INTO payrolls (ref_pizzas_categories_id,  tittle, hour_rate, price, selections)  VALUES (?, ?, ?, ?, ?)', 
                [ 
                  this.ref_pizzas_categories_id, 
                  this.tittle,
                  this.price,
                  this.selections
                ]
        );
    }


    static fetchPizzasData() {
        return  db.execute(' SELECT * FROM pizzas');
     }


}


