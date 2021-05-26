import express from 'express';
import cors from "cors";
import appRouter from './routes/app'
import bodyParser from 'body-parser'

const app = express();
const PORT = 3003;

app.use(cors())
app.use(bodyParser())

app.use('/api', appRouter)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});