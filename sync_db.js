var request = require('request');
var token = ""
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '138.122.227.11',
  user     : '',
  password : '',
  database : 'cf'
});
connection.connect();
var array = [];
var uniqueArray = [];

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var cont = JSON.parse(body);
    for(var i = 0; i < cont.data.zone.length; ++i) {
       for(domain in cont.data.zone[i]) {
          array.push(cont.data.zone[i].domain);
       }
    }
    uniqueArray = array.filter(function(elem, pos) {
      return array.indexOf(elem) == pos;
    })
    console.log(uniqueArray);
    for(var i = 0; i < uniqueArray.length; ++i) {
      var sql = "INSERT IGNORE INTO `zonas` (`dominio`) VALUES (?)";
      sql = mysql.format(sql, uniqueArray[i]);
      connection.query(sql, [uniqueArray], function (err, result) {
        if (err){console.log(err);}
        console.log("Number of records inserted: " + result.affectedRows);
      });
    }
  }
}

request({
  method : 'GET',
   url : 'https://server.grep.cl:2087/json-api/listzones?api.version=1',
   headers : {
     'Authorization': 'whm root:'+token
   }
}, callback);
