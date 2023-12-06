import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './config/routes.js'


// It's our variable 
const app = express()


// Middleware
app.use(express.json())

// Logger 
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}` )

  next()
})

// End point 
app.use('/api', router)

// Start our Server

async function startServer(){
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('✅ Database connections established')
    app.listen(process.env.PORT, () => console.log(`🦻🏽 Server listenig on port ${process.env.PORT}`))
  } catch (error) {
    console.log('🆘 Error establishing connection')
    console.log(error)
  }
}
startServer()
