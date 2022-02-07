const { v4: uuidv4 } = require('uuid');
const { savePayment, fetchUnpaid } = require('../../access/payments');
const dayjs = require('dayjs');
const knex = require('../../index');


describe('Making payments', ()=>{

    it('Can save a payment', async () => {
        
        const payment = {
            policy_reference: uuidv4(),
            amount: 15.21,
        };

        const fakePaymentId = uuidv4();

        const savedPayment = await savePayment({
            payment: payment,
            paymentId: fakePaymentId,
            status: 'success'
        });

        expect(savedPayment).toEqual(expect.objectContaining({
            ...payment, 
            payment_id: fakePaymentId,
            status: 'success',
            created_at: expect.anything(), 
            updated_at: expect.anything() 
        }));

        
    });
});

describe('Fetching failed payments', ()=>{

    it('Can fetch failed payments', async () => {
        
        const failedPayment = {
            policy_reference: uuidv4(),
            payment_id: uuidv4(),
            amount: 15.21,
            status: 'failed',
            error_message: 'test failure',
            error_code: 431,
            created_at: dayjs().toISOString(),
            updated_at: dayjs().toISOString()
        };

        // insert fake failed payment
        await knex('payments').insert(failedPayment);

        // fetch failed payment
        const failedPaymentResult = await fetchUnpaid(failedPayment.policy_reference);

        // make assertion
        expect(failedPaymentResult).toEqual(expect.objectContaining({
            ...failedPayment, 
            created_at: expect.anything(), 
            updated_at: expect.anything() 
        }));
        
    });
});