# Travel Journal API

A app built with Node.js, Express, MongoDB and frontend through react js. Users can register, log in, add their own travel journals, and read journals added by others.

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
npm run start (frontend)
node server.js (backend)

## Project Structure

### Backend
- `controllers/` – request handling logic  
- `routes/` – API routes  
- `models/` – Mongoose schemas  
- `services/` – business logic  
- `middlewares/` – auth checks  
- `config/db.js` – MongoDB connection  
- `app.js` and `server.js` – main server files  

### Frontend
- `components/` – reusable UI elements (e.g., Navbar)  
- `pages/` – page-level React components like Login, Register, Journal, Add, Search  
- `App.jsx` and `index.js` – React app entry point and routing  
- `public/index.html` – base HTML file  
