exports.up = (knex) => {

    return knex.schema.createTable('payments', (t)=>{

        t.increments('id').unsigned().primary();
        t.string('policy_reference', 64).notNull();
        t.string('payment_id', 64).notNull();
        t.decimal('amount', 6,4);
        t.string('status');
        t.string('error_message').nullable();
        t.integer('error_code').nullable();
        t.datetime('created_at').defaultTo(knex.fn.now());
        t.datetime('updated_at').defaultTo(knex.fn.now());

    });

};

exports.down = (knex) => {
    
    return knex.schema.dropTable('payments');
};