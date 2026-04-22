import 'dotenv/config';
import { env } from './config/env';
import fastify from 'fastify';

const server = fastify({logger: true})

const teams = [
    { id: 1, teamName: "Scuderia Ferrari HP", location: "Maranello, Italy"},
    { id: 2, teamName: "Oracle Red Bull Racing", location: "Milton Keynes, United Kingdom"},
    { id: 3, teamName: "Mercedes-AMG PETRONAS F1", location: "Brackley, Northamptonshire, UK"},
]

const drivers = [        
  { id: 1, name: "Lewis Hamilton", surname: "HAM" },
  { id: 1, name: "Charles Leclerc", surname: "LEC" },
  { id: 2, name: "Max Verstappen", surname: "VER" },
  { id: 2, name: "Isack Hadjar", surname: "HAD" },
  { id: 3, name: "George Russell", surname: "RUS" },
  { id: 3, name: "Andrea Kimi Antonelli", surname: "ANT" }
]


server.get("/teams", async(request, response) => {
  response.type("application/json").code(200)
  return {teams}
})

server.get("/drivers", async(request, response) => {
  response.type("application/json").code(200)
  return {drivers}
})

server.listen({ port: env.PORT}, () => {
  console.log(`Server running on port ${env.PORT}`);
  
})
