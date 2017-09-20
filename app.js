require('dotenv-extended').load();
var mysql = require('mysql');
console.log("Application started ##############################");
console.log("Host name ::"+process.env.RDS_HOSTNAME);
console.log("port ::"+ process.env.RDS_PORT);
console.log("User name ::"+ process.env.RDS_USERNAME);
console.log("password ::"+ process.env.RDS_PASSWORD);
console.log("Trying to connect to db..");
var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.query('SHOW DATABASES', function (err, results) {
    if (err) {
        console.error('Database show database failed: ' + err);
    }
   
    console.log('Database :: SHOW DATABASES' );
    if (results) {
        for (var i in results) {
            console.log(results[i].Database)
        }
        
        
    }
});

connection.end();
console.log("Application END ##############################");