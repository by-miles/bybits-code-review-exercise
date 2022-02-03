
const paymentsPost = require('../main');

describe('payments post', () => {

    it('can save payment', async()=>{

        const payment = {
            policy_reference: 'a51510ee-a123-4e7b-a67f-a6a6b601b3ab',
            amount: 15.00,
          };

        const response = await paymentsPost({payment: payment });

        
        expect(response).toEqual(expect.objectContaining({
            ...payment
        }));
        

    });

});