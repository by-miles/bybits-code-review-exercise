const { v4: uuidv4 } = require('uuid');

const makePayment = ({amount}) =>{

    // ignore this implementation. It is to simulate integrating with a 3rd payment provider.
    
    
    return {
        paymentId: uuidv4(),
        status: 'success'
    };
};


module.exports = { makePayment };