// controller connect view and model
const connection = require('./index.js');
// const handleResponse = function(err, data, res) {
//     if(err){
//         res.status(500);
//         res.send(err);
//     } else {
//         res.status(200);
//         res.send(err);
//     }
// }
// create a database function that will query and return a list of all data
const getAll = function (callback) {
    // create to the connect
    //console.log(res)
    //connection.connect();
    connection.query('SELECT * FROM groceries', (err, data) => {
        if (err) {
            throw err;
        } else {
            callback(null, data);
        }
    })
    //    connection.end();
}
// const checkGrocery = function(name, quantity, res) {
//     connection.query(`SELECT id, quantity FROM groceries WHERE "${name}" = name`, (err, data) => {
//         //data = [{id, quantity}]
//         if (err) {
//             res.status(500);
//             res.send(err);
//         } else {
//             res.status(200);
//             // data[0].id and data[0].quantity
//             //if array is empty
//             // add new row
//            if(data.lenght === 0) {
//             connection.query(`INSERT INTO groceries (name, quantity) VALUES ("${name}", "${quantity}")`, (err, data) => {handleResponse(err, data, res)})
//            } else {
//             connection.query(`UPDATE groceries SET quantity = quantity + ${data[0].quantity} WHERE ${data[0].id} = id`, (err, data) => {handleResponse(err, data, res)})
//            }
//         }

//     })
// }
const addGrocery = function (name, quantity, callback) {

    //connection.connect();
    // check to see if the grocery already exists in the table
    // if it does, update that entry by summing the by numbers
    // otherwise add a new row to the table
    // checkGrocery(name, quantity, res);
    connection.query(`update groceries set quantity = quantity + "${quantity}" where name = "${name}"`, (err, data) => {
        if (err) {
            throw err;
        } else if (data.affectedRows === 0) {  //affectedRows is a param in data. if there is 
            // exist row, affectedRows will set as 1. otherwise it set as 0.
            connection.query(`INSERT INTO groceries (name, quantity) VALUES ("${name}", "${quantity}")`, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, data);
                }
            });
        } else {
            callback(null, data);
        }
    });

}
const deleteGrocery = function (req, res) {

    console.log('request delete headers 68:', req.body)
    var query = `DELETE FROM groceries WHERE ${req.body.id} = id`;
    connection.query(query, (err, data) => {
        if (err) {
            console.log('error in delete')
            res.status(500);
            res.send(err);

        } else {
            console.log('successful delete')
            res.status(200);
            res.send(data)
        }
    })
}


module.exports = {
    getAll: getAll,
    addGrocery: addGrocery,
    deleteGrocery: deleteGrocery
    //checkGrocery: checkGrocery
}