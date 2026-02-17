# Login System Backend

Express.js backend with JWT authentication for the Login System.

## Tech Stack

- Express.js 5.2.1
- JWT (jsonwebtoken)
- bcryptjs for password hashing
- express-validator for input validation
- CORS enabled
- dotenv for environment variables

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update the `.env` file with your configuration:
```
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=1h
CORS_ORIGIN=http://localhost:3000
```

## Running the Server

Development mode (with nodemon):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on port 5000.

## API Endpoints

### POST /api/auth/login
Login with email and password.

**Request body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

### GET /api/auth/me
Get authenticated user information (requires JWT token).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

## Demo Credentials

```
Email: user@example.com
Password: password123
```

## Project Structure

```
.
├── controllers/
│   └── authController.js    # Authentication logic
├── middleware/
│   └── authMiddleware.js    # JWT verification middleware
├── routes/
│   └── authRoutes.js        # API routes
├── server.js                # Express app entry point
├── .env                     # Environment variables (not in git)
└── .env.example             # Environment variables template
```
