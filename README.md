# wanderlust-BE

# Technologies

- Production

Node.js
Express
Knex
SQLite
Postgres
Bcrypt
Cors
JSON Web Token
Knex Cleaner

- Development

Cross Env
Jest
Nodemon
Supertest

# Set up

- git clone (repository)
- yarn install dependencies and dev-dependencies
- yarn server

# Testing

- yarn test

# Endpoints

- user/register -> post ->name, username, password, userType -> string
- user/login -> post -> username, password -> string
- user/trip -> post -> title,description,location -> string
- user/trip -> get -> id,title,description,location,timestamps,user_id
- user/trip/:id -> update
- user/trip/:id -> delete
