'use strict';

exports.ok = function(values, res) {
	var status = true;
	if (values.length!=1) {
		status = false;
	}
  var data = {
  		// 'woy' : "coba",
      'status': status,
      'values': values
  };
  res.json(data);
  res.end();
};