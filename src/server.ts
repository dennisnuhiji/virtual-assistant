import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import addRoutes from './routes'
import ENV from '../config'

const app = express();

app.use(cors({ 'origin': '*' }))
app.use(bodyParser.json())
addRoutes(app);

app.listen(ENV.PORT, () => console.log(`Virtual assistant listening on http://localhost:${ENV.PORT}`))
