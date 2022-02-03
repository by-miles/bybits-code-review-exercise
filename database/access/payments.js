const knex = require('../index');
const dayjs = require('dayjs');

const savePayment = async ({payment, paymentId, status}) => {

    const id = await knex('payments').insert({
        ...payment,
        payment_id: paymentId,
        status: status,
        created_at: dayjs().toISOString(),
        updated_at: dayjs().toISOString()
    });
    
    const result = await knex('payments').select('*').where({id: id});

    return result[0];

};

const fetchUnpaid = async (policyReference) =>{

    console.log('fetching failed payments for:', policyReference);

    const result = await knex('payments').where('policy_reference', policyReference);
    
    if (result.length > 0){
        
        console.log('failed payments exist for:', policyReference);

        console.log(result[0]);
        
        return result[0];
    }

    console.log('no failed payments found', policyReference);
    
    return null;
    
};

module.exports = { savePayment, fetchUnpaid };