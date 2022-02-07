
const main = require('./main');

module.exports = async (req, res) => {

    const policyReferenceFromQuery = req.query['policy_reference'];

    const policyReferences = policyReferenceFromQuery.split(',');

    const failedPayments = await main(policyReferences);

    res.send(failedPayments);


};