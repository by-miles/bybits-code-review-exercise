# Code Review Exercise
## The Task

Perform a code review of the current [pull request](https://github.com/bymiles-tech/code-review-exercise/pull/2).

The scope of this task is to focus on the new feature developed, which is a new API endpoint `GET /unpaid`.

The `GET /unpaid` should return a list of any failed or unpaid payments based on one or many policy references. (A policy reference is a unique )

It should query the sql table `payments` (see the [Payments schema table](#payments-schema-table) below) and find the relevant policies, where is has status of `failed`.

**Request**
```
GET /unpaid?policy_reference=
```

* The query string parameter `policy_reference` can be a comma list of policy references, e.g. `policy_reference=c5de0924-0c0e-4695-8117-045e948fc390,7fb2109e-3559-4081-a780-cdbe33ad7880`

**Example request**
```
GET /unpaid?policy_reference=c5de0924-0c0e-4695-8117-045e948fc390,7fb2109e-3559-4081-a780-cdbe33ad7880
```

**Example response**
```
[{
    "id": 1,
    "policy_reference": "c5de0924-0c0e-4695-8117-045e948fc390",
    "payment_id": "48f6f7cc-9fce-4826-88fa-1f45152dfc1c",
    "amount": 15,
    "status": "failed",
    "error_message": "card cancelled",
    "error_code": 511,
    "created_at": "2022-02-03T13:11:35.040Z",
    "updated_at": "2022-02-03T13:11:35.043Z"
}]
```

## How to Submit
* Create a document specifying line numbers and comments with regards to the code review. See example below.
* You can spend as much, or as little time, as you feel relevant, or comfortable for this task.
* Please use your style of language to communicate any comments with regards to the code review.
* Please state how much time you spent reviewing the code in the document.
* In the event of uncertainty, feel free to make any assumptions and mention them in the document.
* Send the document back for us to review.

Best of luck.

Example of submission:

```
Time spent: [insert duration here]

Line 20: There appears to be a typo in....
Line 30-33: This code block appears to be...
etc...
```
### Background context

Please note that this api is a contrived example of a real world application.

The api is currently implemented with the following endpoint:

**Request**
```
POST Payments
```
This will make a payment for a policy with a specific amount. Each payment made will be recorded in the `payments` table. And a `status` column defines if a payment was successful or if an error occurred.

**Example request**
```
POST /payments
{
    "policy_reference": "a51510ee-a123-4e7b-a67f-a6a6b601b3ab",
    "amount": 15.00
}
```

**Example response**
```
{
    "id": 1,
    "policy_reference": "a51510ee-a123-4e7b-a67f-a6a6b601b3ab",
    "payment_id": "2c913e13-14e4-4325-ab42-98545c6bbcaf",
    "amount": 15,
    "status": "success",
    "error_message": null,
    "error_code": null,
    "created_at": "2022-02-03T13:11:35.040Z",
    "updated_at": "2022-02-03T13:11:35.043Z"
}
```

### Payments schema table

A sqlite database is used and the following `payments` table schema can be seen below with some sample data:


| id 	| policy_reference                     	| payment_id                           	| amount 	| status  	| error_message      	| error_code 	| created_at               	| updated_at               	|
|----	|--------------------------------------	|--------------------------------------	|--------	|---------	|--------------------	|------------	|--------------------------	|--------------------------	|
| 1  	| 40974eb2-1fba-4597-b864-3c4303f919ba 	| 4af2b2b4-328a-4da8-9e90-8606d93d2203 	| 15.21  	| success 	| NULL               	| NULL       	| 2022-02-03T14:13:02.363Z 	| 2022-02-03T14:13:02.364Z 	|
| 2  	| e39e28ad-06f4-4a7e-8f40-c330a028a172 	| 2deda493-f23c-4817-a163-557d212a9c25 	| 33.15  	| failed  	| credit card frozen 	| 561        	| 2022-02-03T14:13:02.447Z 	| 2022-02-03T14:13:02.447Z 	|

## Setup

These steps are not necessary for the code review. But useful, if you wish to pull and have a look at the solution locally.


1. Install modules

```
npm install
```

2. Run database migrations
The database uses a local sqlite database.

```
npm run db:migrate
```

If database migrations need rolling back, run the following command:

```
npm run db:migrate:undo
```

3. Run tests

To run all tests

```
npm run test
```

4. Start the application

To start the api locally:

```
npm start
```

