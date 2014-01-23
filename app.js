var express = require("express");
var app = express();

app.get('/:color', function(req, res) {
	res.send('<body bgcolor=#'+req.params.color+'></body>');
});

app.listen(process.env.LISTEN_PORT||3000);
