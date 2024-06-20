import Express, {Request, Response} from 'express'
import cors from "cors";
import userRouter from './routes/user.routes'
import appDataSource from './infra/data-source'
import reservationRouter from "./routes/reservation.routes";

const app = Express()
require('dotenv').config()

app.use(Express.json())
app.use(cors({
    origin: 'http://174.129.177.78',
    credentials: true
}))

appDataSource.initialize().then((connection) => {
  console.log("Banco de dados inicializado")
  app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`)
  })
})

app.get('/', (req, res) =>{
  res.send('Olá')
}) 

app.use('/user', userRouter)
app.use('/reservation', reservationRouter)