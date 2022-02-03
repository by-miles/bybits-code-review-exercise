const pack = require('../../../package.json');
const dayjs = require('dayjs');


module.exports = (req, res) => {

    res.send({
        version: `Running version ${pack.version}`,
        datetime: dayjs().format()
    });
};