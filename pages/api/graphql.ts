import { gql, ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

interface Business {
  id: string
  businessId: string
  name: string
  description: string
  ownerName: string
  ownerEmail: string
}

const sampleBusinesses = [
  {
    id: '1',
    businessId: '1',
    name: 'Business 1',
    description: 'Business 1 description',
    ownerName: 'Business 1 owner',
    ownerEmail: 'lee@naver.com',
  },
  {
    id: '2',
    businessId: '2',
    name: 'Business 2',
    description: 'Business 2 description',
    ownerName: 'Business 2 owner',
    ownerEmail: '',
  },
]

const sampleBookingOptions = [
  {
    id: '1',
    optionId: '1',
    name: 'Option 1',
    price: 1000,
    description: 'Option 1 description',
    bookingCount: 0,
  },
  {
    id: '2',
    optionId: '2',
    name: 'Option 2',
    price: 2000,
    description: 'Option 2 description',
    bookingCount: 0,
  },
  {
    id: '3',
    optionId: '3',
    name: 'Option 3',
    price: 3000,
    description: 'Option 3 description',
    bookingCount: 0,
  },
]

const sampleVehicles = [
  {
    id: '1',
    vehicleId: '1',
    name: 'Vehicle 1',
    description: 'Vehicle 1 description',
    price: 1000,
  },
]

const typeDefs = gql`
  type User {
    id: ID
  }

  input BookingOptionInput {
    optionId: String
  }

  type BookingOption {
    id: ID
    optionId: String
    name: String
    price: Int!
    description: String!
    bookingCount: Int!
  }

  type Business {
    id: ID
    businessId: String
    name: String
    description: String
    ownerName: String
    ownerEmail: String
  }

  input VehicleInput {
    vehicleId: String
  }

  type Vehicle {
    id: ID
    vehicleId: String
    name: String
    description: String
    price: Int
  }

  type Query {
    getUser: User
    getBookingOptions: [BookingOption]
    getBookingOption(input: BookingOptionInput): BookingOption
    getVehicle(input: VehicleInput): Vehicle
    getBusinesses: [Business]
  }
`

interface BookingOptionInput {
  optionId: string
}

interface VehicleInput {
  vehicleId: string
}

const resolvers = {
  Query: {
    getUser: () => {
      return { id: 'foo' }
    },
    getBookingOptions: () => {
      return sampleBookingOptions
    },
    getBookingOption: (_, { input: { optionId } }: { input: BookingOptionInput }) => {
      return sampleBookingOptions.find(option => option.optionId === optionId)
    },
    getVehicle: (_, { input: { vehicleId } }: { input: VehicleInput }) => {
      return sampleVehicles.find(vehicle => vehicle.vehicleId === vehicleId)
    },
    getBusinesses: () => {
      return sampleBusinesses
    },
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = apolloServer.start()

export default async function handler(req, res) {
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
