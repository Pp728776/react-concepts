const mongoose = require("mongoose")
require("dotenv").config()

const connection_string = process.env.CONNECTION_STRING
console.log("conncection String", process.env.CONNECTION_STRING)
const connectDB = async () => {
  try {
    const connection = mongoose.connection
    connection.on("open", () => {
      console.log("Mongo DB connection is successful !!!")
    })
    connection.on("error", (error) => {
      logger.error(error, "Mongo DB connection failed !!!")
      throw new Error(error)
    })
    const connect = await mongoose.connect(connection_string)
    console.log(
      "Database connected",
      connect.connection.host,
      connect.connection.name
    )
  } catch (error) {
    console.log("error", error)
    process.exit(1)
  }
}

module.exports = connectDB
