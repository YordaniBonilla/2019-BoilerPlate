var mysql      = require('mysql');
var dbLink = mysql.createPool({
  connectionLimit: 99,
  host     : 'localhost',
  user     : 'root',
  password : 'Jadeninja93',
  database : 'mydb',
  multipleStatements: true
});
 
dbLink.query('SELECT * from jet', function (error, results, fields) {
  if (error) throw error;
  console.log(`The car was a ${results[0].marca} ${results[0].modelo} priced at $${results[0].precio} moneys`);
});
 
module.exports = dbLink;