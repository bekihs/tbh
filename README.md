# tbh Technical Assessment

Congrats on being selected on processing to our technical assessment! We see a lot of potential and don't want to have to waste your time on pesky whiteboard interviews.

Instead, this take-home task forms a better representation of some of the work that'll be done during your time at tbh.

Overall, we expect that this will take you < 4 hours, and we'd prefer you to not spend more time than this. If you're running close to 4 hours, we would suggest ensuring the code is in a runnable state and then documenting what additional changes you would have made if you had more time.

## 📝 Logistics

1. Make your own GitHub repo
2. Make commits as you would in your day to day work
3. Send a link to your repo to team@tbh.us once you’re done. We should be able to run the app via ```npm i && npm run start``` (Or yarn equivalent).

## 📜 Task

Our operations team has been using Typeform to ask students for feedback following each of their sessions. However, with the user base growing fast, they're struggling with the amount of manual work it takes to issue and tabulate responses. They've asked you to help design an in-house feedback system which can automate most, if not all the work. You will:

1. Design your own approach and SQL database schema (bonus points if you include a sketch!) that considers the following system features:
    - Each form is issued after with a particular session and there for should be associated with a sessionId
    - Each form is constructed from N question of type radio, checkbox or text
    - We should have the flexibility to change which questions appear in each form depending on various conditions (e.g. the user's school)
    - (optional) A user may be re-asked the same question several weeks later as the metric we are interested in improvement over time

2. Design a REST or GraphQL API that allows submission and retrieval of all the questions in a particular form by the user's email address and sessionId

3. (If time allows) Implement and integrate the frontend for one such form (design available below)

# Design

Frontend design available in [this Figma file](https://www.figma.com/file/BXtBV5qaS95lFb26MhUy0a/Interview---Fullstack?node-id=0%3A1) 
-> create an account to view the dimensions, colors, etc...
All form fields shown are required, the submit button should only become active when both have been answered.

NOTE: The font is [Popppins](https://fonts.google.com/specimen/Poppins?query=poppins)

# Requirements

- Git & GitHub
- React and/or NextJS
- Node (Typescript preferred)
- yarn or npm

# Tips

As a small start-up, every employee wears many hats! As our lead engineer, we need to know in addition to being a code guru, you can translate business problems into system designs and defined tasks for the rest of the engineering team.  We're using this task to see that you can deliver:

- A simple, but extensible architectural approach
- Well implemented React/NextJS form from spec
- Well-defined and extensible API schema
- Clearly communicated assumptions and code documentation

# Next steps

Be prepared to talk through your design decisions (and assumptions) and what you might change if you:
- Had more time
- Were designing as part of a much larger codebase
- Needed to handle a much larger form
- Needed to handle a lot of submission traffic

## 🤔 Questions?

Email team@tbh.us ✌️
