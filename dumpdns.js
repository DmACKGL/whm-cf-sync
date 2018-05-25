var request = require('request');
var token   = ""
var mysql   = require('mysql');
var sleep   = require('system-sleep');
var connection = mysql.createConnection({
  host     : '138.122.227.11',
  user     : '',
  password : '',
  database : 'cf'
});
connection.connect();
global.dominiosjson = "";
global.final = "";


connection.query('SELECT * FROM `zonas`', function (error, results, fields) {
  console.log(results);
  console.log(JSON.stringify(results));
  dominiosjson = JSON.stringify(results);
});

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}
sleep(3000);
dominiosjson = JSON.parse(dominiosjson);
console.log("1.-"+dominiosjson+"\n");
for(var i = 0; i < dominiosjson.length; ++i) {
  console.log("2.-"+JSON.stringify(dominiosjson[i].dominio)+"\n");
  final = JSON.stringify(dominiosjson[i].dominio);
  final = final.replace(/['"]+/g, '')
  console.log("3.-"+final+"\n");
  request({
    method : 'GET',
     url : 'https://server.grep.cl:2087/json-api/dumpzone?api.version=1&domain='+final,
     headers : {
       'Authorization': 'whm root:'+token
     }
  }, callback);
}
