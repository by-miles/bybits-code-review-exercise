# Code Review Exercise

## The Task

Perform a code review of the current [pull request]().

The scope of this task is to focus on the new feature developed, which is a new API endpoint `GET /unpaid`.

Please note that this api is a contrived example.

## Setup

These steps are not necessary for the code review. But useful, if you wish to have this setup locally.


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

## How to Submit
* Create a document specifying line numbers and comments with regards to the code review. Example below.
* You can spend as much or as little time as you feel relevant and comfortable for this code review.
* Please state how much time you spent reviewing the code in the document.
* In the event of uncertainty, feel free to make any assumptions and mention them in a comment.

Best of luck.

Example of submission:

```
Time spent: [insert duration here]

Line 20: There appears to be a typo in....
Line 30-33: This code block appears to be...
etc...
```
