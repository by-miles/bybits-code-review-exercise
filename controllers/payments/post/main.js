const { makePayment } = require('../../../services/paymentService');
const {  savePayment : defaultSavePayment } = require('../../../database/access/payments');

module.exports = async ({
    payment, 
    savePayment = defaultSavePayment
    }) => {

    try {

        const paymentResult = makePayment(payment.amount);

        let response;

        if (paymentResult.status === 'success'){

            response = await savePayment({
                payment, 
                paymentId: paymentResult.paymentId, 
                status: 'success'
            });
        }
        else if (paymentResult.status === 'failed')
        {
            response = await savePayment({
                payment, 
                paymentId: paymentResult.paymentId, 
                status: 'failed'
            });

        }

        return response;
        
    }

    catch (error) {
        console.log(error);
    }
    

};