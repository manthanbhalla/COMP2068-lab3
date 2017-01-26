var connect
=
require('connect');
	
	
//link to the url module
	
	
var url
=
require('url');
	
	
//create a new app using connect
	
var app
=
connect();
	
	
	
var
calculate
=
function (req,
res, 
next) {
	
// get calculator from the url querystring
	
var qs
=
url.parse(req.url,
true).query;
	
var method
=
qs.method;
	
var x
=
qs.x;
	
var y
=
qs.y;
	
var total;
	
var symbol;
	
	
if (method
===
'add') {
	
total 
= 
parseFloat(x) 
+ 
parseFloat(y);
	
symbol 
= 
'+';
	
} else
if (method
===
'subtract') {
	
	
total 
= 
parseFloat(x) 
- 
parseFloat(y);
	
symbol 
= 
'-';
	
} else
if (method
===
'multiply') {
	
	
total 
= 
parseFloat(x) 
* 
parseFloat(y);
	
symbol 
= 
'*';
	
} else
if (method
===
'divide') {
	
	
total 
= 
parseFloat(x) 
/ 
parseFloat(y);
	
symbol 
= 
'/';
	
} else {
	
return
"Not Valid";
	
	
}
	
	
res.writeHead(200, {
	
	
"Content-Type":
"text-plain"
	
	
});
	
	
//display result
	
res.write('Output:
' 
+ x 
+ 
' 
' 
+ symbol 
+ 
' 
' 
+ y 
+ 
' = 
' 
+ total 
+ 
'\n');
	
res.end()
	
};
	
	
	
// route each url to proper function
	
	
app.use('/lab3',
 calculate);
	
	
//listen to the events
	
app.listen(3000);
	
console.log('Connect
 app running at http:// localhost:3000');