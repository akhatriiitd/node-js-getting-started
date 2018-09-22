const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "20.20.20.3",
  user: "Java",
  password: "J@vaTr@%n%G!7L",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/employees/:id', function (req, res) {
   con.query('select * from DialogFlow_Bot_Data where Employee_ID=?', [req.params.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  
 
  
  
