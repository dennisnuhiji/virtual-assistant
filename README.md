# VIRTUAL ASSISTANT

# Getting started

## Installing
Instal node modules by running
```
npm install
```

## Running the server locally
Start the server with the command
```
npm start
```

Questions that are available to be processed are

1. **Who was the F1 champion in {year}**
2. **What's the weather in {London or Viena}**.

In the first question for the field **year** its able to process dynamic values, while the second question is
implemented with only those two options because getting an API key from Google can be troublesome.

## Structure
```
+-- src
|   +-- models
|   |   |   +-- F1Model.ts // Model that communicates with third party API
|   +-- services
|   |   |   +-- F1.ts // Service that handles all the operations
|   +-- types // All the types, maps, interfaces
|   +-- utils
|   |   |   +-- Request.ts // Handles all the requests to third party API's
+-- config.ts // Contains all the environment variables
+-- server.ts // Initialization and startup of the server
+-- routes.ts // All routes/endpoints availlable on this server
```

# Error Handling
Each error that's thrown should be from FailCodesMap. For new errors create new error template in the **FailCodesMap.ts**.

# Environment Variables
Check `.env.sample` file for variables

# Version Control
Every feature or bug worked on needs to have a ticket and ticket number, with that when working on something
you should **checkout** from master and create a branch in format TYPE_OF_TICKET/TICKET_NUMBER eg. **feature/VA-2003**,
when you are finished push your branch to origin and create a pull-request, merging permissions has only the author of this repo.

# Scaling
Ideally this should be scaled like an AI system would, recognizing type's of questions
1. WHAT question
2. WHO question
3. WHEN question

by semantically processing it and then spreading out on more and more specific details. Recognizing phrases and chained questions by having large sets of user entered data, with the ability to smart-retry parsing of question with history
of made attempts.

