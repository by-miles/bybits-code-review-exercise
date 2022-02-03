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


module.exports = { savePayment };