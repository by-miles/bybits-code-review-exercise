const main = require('./main');

module.exports = async (req, res) => {

    const reqBody = req.body;

    const response = await main({payment: reqBody});

    res.send(response);

};