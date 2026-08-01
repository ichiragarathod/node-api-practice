# Products CRUD API

A simple REST API built with Node.js, Express, TypeScript, and MongoDB to manage products. This project is part of my backend development learning journey (coming from 6 years of Flutter app development).

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB (Atlas) + Mongoose
- dotenv (environment variables)
- CORS

## Features

- Create, Read, Update, Delete (CRUD) operations for Products
- MongoDB Atlas cloud database connection
- Environment-based configuration (.env)
- Type-safe code with TypeScript

## Project Structure
src/
├── models/
│ └── Product.ts # Mongoose schema/model
├── routes/
│ └── productRoutes.ts # API routes
└── server.ts # Entry point

## API Endpoints

| Method | Endpoint              | Description         |
|--------|------------------------|----------------------|
| GET    | /api/health            | Health check         |
| POST   | /api/products           | Create a new product |
| GET    | /api/products           | Get all products      |
| GET    | /api/products/:id       | Get a single product  |
| PUT    | /api/products/:id       | Update a product      |
| DELETE | /api/products/:id       | Delete a product      |

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account (free tier)

### Installation

1. Clone the repository
```bash
git clone https://github.com/ichiragarathod/node-api-practice.git
cd node-api-practice
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Run the development server
```bash
npm run dev
```

Server will start at `http://localhost:5000`

## Example Request (Create Product)

**POST** `/api/products`

```json
{
  "name": "Wireless Mouse",
  "price": 599,
  "description": "Ergonomic wireless mouse",
  "stock": 50
}
```

## Author

Chirag Rathod