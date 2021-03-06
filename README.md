Adam McNown & Luke Murdock

Adam worked on:
- Most API work
- Creating repo
- changing half the variable names
- working on the delete function
- helping with CSS

Luke worked on:
- Most Client work
- connecting to the repo
- changing the other half of the variables
- making content on pages (flow of site with wording and such)
- Figured out CSS with React

Just register and then use credentials to login

Github with both Client and API
https://github.com/AdMcDown/comp-2068-project-starter-files

Github with just Client
https://github.com/AdMcDown/comp-2068-my-wish-list-client

Github with just API
https://github.com/AdMcDown/comp-2068-my-wish-list-api

Heroku
https://5fdd17619decd2000828314b--mystifying-ardinghelli-ee3bd0.netlify.app/

Hope this is to your liking Shaun! Have a great holiday season and lets all hope next year is a better year!

~Cheers~
Adam & Luke

# Project Starter files

## Includes:

- API
  - User CRUD (Create, Read, Update, Delete)
  - Session Authentication
    - Passport Local strategy
    - Passport JWT strategy
  - Error handling
  - Mongoose configuration
  - All required node packages
    - dotenv
    - express
    - express-session
    - cors
    - mongoose
    - body-parser
    - jsonwebtoken
    - passport
    - passport-jwt
    - passport-local
    - passport-local-mongoose
- Client
  - User CRUD components
  - Authentication components
  - Shared navigation component
    - Helper for using React Router DOM Link component with React Bootstrap component
  - Global provider for across application variable store
  - Notification provider for across application message system
  - User provider for across application user access
  - All required node packages
    - axios
    - bootstrap
    - react
    - react-bootstrap
    - react-dom
    - react-router-dom
    - react-scripts
    - styled-components

---
## Installation

### API
```shell
npm install
```

> To run:
```shell
npm run dev
```

> Add your .env file with your Atlas Cloud MongoDB credentials
```json
DB_URI="mongodb+srv://comp-2068.efkcg.mongodb.net/<database name>?retryWrites=true&w=majority"
DB_USER="<database username>"
DB_PASS="<database password>"
```
> Replace **\<config option\>** with the corresponding data

### Client
```shell
yarn
```

> To run:
```shell
yarn start
```

> When you are ready to deploy you will need to build it first:
```shell
yarn build
```
