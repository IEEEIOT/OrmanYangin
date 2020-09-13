const db_operations = require('../lib/db_operations')

module.exports.renderIndex = (req, res, next) => {
    res.render('indexView');
    next();
};

module.exports.realtimedata = db_operations.anlikveriaramasi;