var async = require('async');
var oracle = require('oracle');

var connectData = {
    hostname: "dockerhost",
    port: 1521,
    database: "xe", // System ID (SID)
    user: "system",
    password: "oracle"
}

var employees = [
  { id:1, name:'Darth Vader', dept: 240},
  { id:2, name:'Luke Skywalker', dept: 210},
  { id:3, name:'Obi-Wan Kenobi', dept: 210}
]

oracle.connect(connectData, function(err, connection) {
    if (err) { console.log("Error connecting to db:", err); return; }

    function insert(obj, cb) {
      connection.execute (
        "INSERT INTO hr.admin_emp (empno, ename, deptno) VALUES (:1,:2,:3) ",
        [obj.id, obj.name, obj.dept],
        cb
      );
    }
    
    async.eachSeries(employees, insert, function (err) {
      if (err) {
        console.log(err);
      }
      connection.execute("SELECT * FROM hr.admin_emp", [], function(err, results) {
          if (err) { console.log("Error executing query:", err); return; }
          console.log(results);
          connection.close(); // call only when query is finished executing
      });
    })


});
