import mongoose from "mongoose"

const connection = {}

const dbConnection = async ()=> {
  if (connection.isConnected) return

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true
    })
    connection.isConnected = db.connections[0].readyState
    console.log(
      `Mongo DB got Connected :${connection}`
    )
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default dbConnection
