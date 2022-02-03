
const { v4: uuidv4 } = require('uuid');
const { savePayment } = require('../../access/payments');


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

