# Travel Journal API

A RESTful API built with Node.js, Express, and MongoDB. Users can register, log in, add their own travel journals, and read journals added by others.

## Features

- User authentication with JWT
- Add, update, delete your own journal entries
- View journal entries from all users
- Secure password hashing with bcrypt

## Setup

1. Clone the repo and install dependencies:
npm install

2. Create a `.env` file.

3. Start the server:
npm start

## Project Structure

- `controllers/` – request handling logic
- `routes/` – API routes
- `models/` – Mongoose schemas
- `services/` – business logic
- `middlewares/` – auth checks
- `config/db.js` – MongoDB connection
- `app.js` and `server.js` – main server files
