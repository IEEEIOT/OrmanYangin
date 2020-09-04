const db_operations = require('../lib/db_operations');

module.exports.getData = db_operations.arama;
module.exports.getlastXData = db_operations.limitsayisinagorearama;
module.exports.getlastxDatawithinId = db_operations.idbazlisonxarama;
module.exports.getDangerData = db_operations.yanginarama;