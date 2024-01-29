import Express, { Router } from 'express'
import cors from 'cors'
// ---
import homeRouter from './routes/home'
import videoRouter from './routes/videos'
import userRouter from './routes/user'
const app = Express()
app.use(cors({
  origin:'http://localhost:3000'
}))

app.use(Express.json())
app.use(Express.urlencoded())


app.use('/',homeRouter)
app.use('/videos',videoRouter)
app.use('/user',userRouter)
 
app.listen(8080, () => {
  console.log("Server Started")
})
