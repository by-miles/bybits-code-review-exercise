const {  fetchUnpaid : defaultFetchUnpaid } = require('../../../database/access/payments');

module.exports = ({
    policyReferences, 
    fetchUnPaid = defaultFetchUnpaid
    }) => {

    let failedPayments = [];
     
    policyReferences.forEach((p)=>{
        const failedPayment = fetchUnPaid(p);
        if (failedPayment){
            failedPayments.push(failedPayment);
        }
        
    });

    console.table(failedPayments);

    return failedPayments;

};