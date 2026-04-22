<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white" />
  <img src="https://img.shields.io/badge/tsup-building-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" />

# 🏎 Minimal API — Formula 1

**A minimal REST API built with Fastify and TypeScript, exposing F1 2026 season data - teams and drivers - from in-memory data.**

</div>

---

## 📌 About

This project was built on top of my own [Node.js TypeScript Boilerplate](https://github.com/itsmevictorhugo/node-ts-minimal-boilerplate) as a practical exercise to introduce **Fastify** and **CORS** into the minimal stack I had already structured.

The API exposes Formula 1 2026 season data — all 11 constructors and 22 drivers — stored directly in memory. No database, no external data source. The focus is on **typed interfaces, clean route handling, and proper HTTP responses**, keeping everything explicit and framework-aware without unnecessary layers.

---

## 🏗 Project Structure

```
src/
├── config/
│   └── env.ts       # Environment loader and validation
└── server.ts        # Application entry point, data, routes and server bootstrap
```

| File | Responsibility |
| ----------- | --------------------------------------------------------------- |
| `server.ts` | Registers plugins, declares in-memory data, defines all routes, and starts the server |
| `env.ts`    | Loads and validates environment variables from `.env` |

---

## ✨ Features

- 🏁 List all 11 F1 2026 constructors with name and location
- 👤 List all 22 F1 2026 drivers with number, name, abbreviation and team
- 🔍 Retrieve a single driver by their race number
- ❌ Returns `400 Bad Request` for non-numeric driver IDs
- 🚫 Returns `404 Not Found` when the driver number has no match
- 🔒 Fully typed with TypeScript interfaces throughout
- 🌐 CORS enabled — accepts requests from any origin

---

## 🌐 Endpoints

### GET /teams

Returns all registered constructors for the 2026 season.

**Example response:**

```json
[
  { "teamId": 1, "teamName": "Scuderia Ferrari HP", "location": "Maranello, Italy" },
  { "teamId": 2, "teamName": "Oracle Red Bull Racing", "location": "Milton Keynes, United Kingdom" }
]
```

---

### GET /drivers

Returns all registered drivers for the 2026 season.

**Example response:**

```json
[
  { "driverId": 44, "name": "Lewis Hamilton", "surname": "HAM", "teamId": 1 },
  { "driverId": 16, "name": "Charles Leclerc", "surname": "LEC", "teamId": 1 }
]
```

---

### GET /drivers/:id

Returns a single driver matched by race number.

**Example request:**

```
GET /drivers/1
```

**Example response:**

```json
{ "driverId": 1, "name": "Lando Norris", "surname": "NOR", "teamId": 4 }
```

> Returns `400 Bad Request` if the `:id` param is not a valid number.
> Returns `404 Not Found` if no driver matches the given number.

---

## ⚙️ Environment Setup

Create a `.env` file at the root of the project:

```env
PORT=3000
```

> The `.env` file is listed in `.gitignore` and must be created manually before running the project.
> Use `.env.example` as a reference.

---

## 🛠 Technologies

| Package | Role |
| ---------------- | ----------------------------------------------------- |
| `typescript` | Static typing and modern language features |
| `fastify` | Fast and low-overhead web framework for Node.js |
| `@fastify/cors` | CORS plugin for Fastify |
| `dotenv` | Loads environment variables from `.env` |
| `tsx` | Development runtime for executing TypeScript directly |
| `tsup` | Bundler for generating production builds |
| `@types/node` | Type definitions for Node.js |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/itsmevictorhugo/minimal-api-formula-1.git

# Navigate to the project
cd minimal-api-formula-1

# Install dependencies
npm install
```

### Scripts
 
| Script | Command | Description |
| ------------- | ------------------------- | ----------------------------------- |
| `dev` | `tsx watch src/server.ts` | Run in development mode with watch |
| `build` | `tsup` | Build the project into `dist/` |
| `build:watch` | `tsup --watch` | Rebuild on file changes |
| `start` | `node dist/server.js` | Run compiled production build |
 
```bash
# Development
npm run dev
 
# Production
npm run build
npm start
 
# Rebuild on file changes
npm run build:watch
```

### Access the API

```
http://localhost:3000/teams
http://localhost:3000/drivers
http://localhost:3000/drivers/44
```

---

## 🧠 Concepts Demonstrated

- **Fastify** — typed route handlers with generics (`Params`) and built-in JSON serialization
- **TypeScript interfaces** — typed shapes for `Driver` and route params (`DriverParams`)
- **CORS** — configured via `@fastify/cors` to allow cross-origin GET requests
- **HTTP semantics** — `400` for invalid input, `404` for missing resources
- **Environment variables** — port configured via `.env` using a typed loader
- **In-memory data** — no database layer; data lives in typed arrays within the server module

---

## 🔗 Built on top of

This project was bootstrapped from [node-ts-minimal-boilerplate](https://github.com/itsmevictorhugo/node-ts-minimal-boilerplate) — a minimal, framework-agnostic Node.js + TypeScript starter built to provide a clean and controlled foundation for backend projects.

---

## 👨‍💻 Author

**Victor Hugo**  
Frontend Engineer · [GitHub](https://github.com/itsmevictorhugo) · [LinkedIn](https://linkedin.com/in/itsmevictorhugo)