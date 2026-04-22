import 'dotenv/config';
import { env } from './config/env';
import fastify from 'fastify';
import cors from "@fastify/cors";

const server = fastify({logger: true})

server.register(cors, {
  origin: "*",
  methods: ["GET"]
})

interface Driver {
  driverId: number
  name: string
  surname: string
  teamId: number
}

interface DriverParams{
  id: string,
}

const teams = [
  { teamId: 1, teamName: "Scuderia Ferrari HP", location: "Maranello, Italy" },
  { teamId: 2, teamName: "Oracle Red Bull Racing", location: "Milton Keynes, United Kingdom" },
  { teamId: 3, teamName: "Mercedes-AMG PETRONAS Formula One Team", location: "Brackley, United Kingdom" },
  { teamId: 4, teamName: "McLaren Mastercard F1 Team", location: "Woking, United Kingdom" },
  { teamId: 5, teamName: "Aston Martin Aramco Formula One Team", location: "Silverstone, United Kingdom" },
  { teamId: 6, teamName: "BWT Alpine Formula One Team", location: "Enstone, United Kingdom" },
  { teamId: 7, teamName: "TGR Haas F1 Team", location: "Kannapolis, United States" },
  { teamId: 8, teamName: "Atlassian Williams F1 Team", location: "Grove, United Kingdom" },
  { teamId: 9, teamName: "Visa Cash App Racing Bulls Formula One Team", location: "Faenza, Italy" },
  { teamId: 10, teamName: "Audi Revolut F1 Team", location: "Hinwil, Switzerland" },
  { teamId: 11, teamName: "Cadillac Formula 1 Team", location: "Silverstone, United Kingdom" }
]

const drivers: Driver[] = [        
  { driverId: 44, name: "Lewis Hamilton", surname: "HAM", teamId: 1},
  { driverId: 16, name: "Charles Leclerc", surname: "LEC", teamId: 1},
  { driverId: 3, name: "Max Verstappen", surname: "VER", teamId: 2},
  { driverId: 6, name: "Isack Hadjar", surname: "HAD", teamId: 2},
  { driverId: 63, name: "George Russell", surname: "RUS", teamId: 3},
  { driverId: 12, name: "Andrea Kimi Antonelli", surname: "ANT", teamId: 3},
  { driverId: 1, name: "Lando Norris", surname: "NOR", teamId: 4 },
  { driverId: 81, name: "Oscar Piastri", surname: "PIA", teamId: 4 },
  { driverId: 14, name: "Fernando Alonso", surname: "ALO", teamId: 5 },
  { driverId: 18, name: "Lance Stroll", surname: "STR", teamId: 5 },
  { driverId: 10, name: "Pierre Gasly", surname: "GAS", teamId: 6 },
  { driverId: 43, name: "Franco Colapinto", surname: "COL", teamId: 6 },
  { driverId: 31, name: "Esteban Ocon", surname: "OCO", teamId: 7 },
  { driverId: 87, name: "Oliver Bearman", surname: "BEA", teamId: 7 },
  { driverId: 23, name: "Alexander Albon", surname: "ALB", teamId: 8 },
  { driverId: 55, name: "Carlos Sainz", surname: "SAI", teamId: 8 },
  { driverId: 30, name: "Liam Lawson", surname: "LAW", teamId: 9 },
  { driverId: 41, name: "Arvid Lindblad", surname: "LIN", teamId: 9 },
  { driverId: 27, name: "Nico Hulkenberg", surname: "HUL", teamId: 10 },
  { driverId: 5, name: "Gabriel Bortoleto", surname: "BOR", teamId: 10 },
  { driverId: 77, name: "Valtteri Bottas", surname: "BOT", teamId: 11 },
  { driverId: 11, name: "Sergio Perez", surname: "PER", teamId: 11 }
]

server.get("/teams", async() => {
  return teams
})

server.get("/drivers", async() => {
  return drivers
})

server.get<{Params: DriverParams}>("/drivers/:id", async(request, reply) => {
  const id = Number(request.params.id);
  
  if (Number.isNaN(id)) {
    return reply.code(400).send({ message: "Invalid driver id" })
  }

  const driver = drivers.find(d => d.driverId === id);
  if(!driver) {
    return reply.code(404).send({ message: "Driver not found"})
  }

  return driver
})

server.listen({ port: env.PORT}, () => {
  console.log(`Server running on port ${env.PORT}`);
  
})
