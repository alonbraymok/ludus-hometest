const express = require('express')
const locationRouter = require('./routers/location')



const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(locationRouter)


app.listen( port, () => {
    console.log(`server is up on port ${port}`)
})