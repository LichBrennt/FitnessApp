import express, {json} from 'express'
//routes
import IndexRoutes from './routes/index.routes'
import MoviesRoutes from './routes/movies.routes'
import UserRoutes from './routes/user.routes'
import cors from 'cors'

const app = express()

//settings
app.set('port', process.env.PORT || 5000)

//middleware
app.use(json())
app.use(cors())
//routes
app.use(IndexRoutes)
app.use('/movies',MoviesRoutes)
app.use('/user',UserRoutes)

export default app