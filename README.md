# 📣 Quote API

A simple Express.js API for serving and adding quotes about programming and technology. Built in the early days of my self-training in software development — part of my full-stack curriculum with Codecademy. This project constitutes my first time practicing routing, HTTP verbs, and modular Express structure.

## 🔧 Features

- GET `/api/quotes/random` — Fetch a random quote  
- GET `/api/quotes` — Fetch all quotes, or filter by `person` via query param  
- POST `/api/quotes` — Add a new quote via query parameters

Quotes are stored in-memory using a basic array structure. The API returns JSON responses and uses appropriate HTTP status codes.

## 🧠 Concepts Practiced

- Express.js routing and modular routers  
- Query parameter handling and validation  
- JSON response shaping  
- HTTP status codes

## 🚀 Tech Stack

- Node.js  
- Express.js  

## 📎 Example Response

```json
{
  "quote": {
    "quote": "The best way to predict the future is to invent it.",
    "person": "Alan Kay"
  }
}
```

---

💭 My first ever REST API...
