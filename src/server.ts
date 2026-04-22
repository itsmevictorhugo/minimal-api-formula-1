import 'dotenv/config';
import { env } from './config/env';
import fastify from 'fastify';

const server = fastify({logger: true})

const teams = [
    { teamId: 1, teamName: "Scuderia Ferrari HP", location: "Maranello, Italy"},
    { teamId: 2, teamName: "Oracle Red Bull Racing", location: "Milton Keynes, United Kingdom"},
    { teamId: 3, teamName: "Mercedes-AMG PETRONAS F1", location: "Brackley, Northamptonshire, UK"},
]

const drivers = [        
  { driverId: 1, name: "Lewis Hamilton", surname: "HAM" },
  { driverId: 2, name: "Charles Leclerc", surname: "LEC" },
  { driverId: 3, name: "Max Verstappen", surname: "VER" },
  { driverId: 4, name: "Isack Hadjar", surname: "HAD" },
  { driverId: 5, name: "George Russell", surname: "RUS" },
  { driverId: 6, name: "Andrea Kimi Antonelli", surname: "ANT" }
]

server.get("/teams", async(request, response) => {
  response.type("application/json").code(200)
  return {teams}
})

server.get("/drivers", async(request, response) => {
  response.type("application/json").code(200)
  return {drivers}
})

interface DriverParams{
  id: string,
  name: string,
  surname: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
  const id = parseInt(request.params.id);
  const driver = drivers.find(d => d.driverId === id);
  if(!driver) {
    response.type("application/json").code(404)
    return { message: "Driver Not Found"}
  } else {
    response.type("application/json").code(200)
    return { driver }
  }
})

server.listen({ port: env.PORT}, () => {
  console.log(`Server running on port ${env.PORT}`);
  
})
