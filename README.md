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
- api/trip -> post -> title,description,location -> string
- api/trip/:id -> get -> get trip by trip_id
- api/trip -> get -> id,title,description,location,timestamps,user_id
- api/trip/:id -> update
- api/trip/:id -> delete
- api/trip/:id/profile -> get by user_id, the user_trip
