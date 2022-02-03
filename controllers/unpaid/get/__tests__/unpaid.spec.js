
const unpaidGet = require('../main');


describe('unpaid get', ()=> {

    it('can get unpaid payments', async()=>{

        const failedPaymentStub = {
            id: 1,
            policy_reference: 'a51510ee-a123-4e7b-a67f-a6a6b601b3ab',
            payment_id: 'a4036cfd-cc6b-4293-9ea5-f8ea1c63f23d',
            amount: 15.00,
            error_message: 'test failure',
            status: 'failed',
            error_code: 431,
            created_at: '2022-02-02T18:37:39.665Z',
            updated_at: '2022-02-02T18:37:39.665Z'
          };

        const policyRefs = ['0fbfb0f7-670a-4406-a654-1b81345289cf'];

        const response = await unpaidGet({
            policyReferences: policyRefs, 
            fetchUnPaid: ()=> {
                return failedPaymentStub;
            }
        });

        expect(response[0]).toEqual(expect.objectContaining({
            ...failedPaymentStub
        }));


        

    });

});