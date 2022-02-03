
const main = require('./main');

module.exports = async (req, res) => {

    main();

    res.status(500).send({msg: 'not yet implemented'});


};