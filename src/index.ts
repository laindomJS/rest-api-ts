import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();
const PORT:number = 3001;

app.use(express.json());


app.get('/', (_req, res) => {
    res.status(200).type('html').send('<h1>API with TypeScript</h1>');
})


app.use('/api/diaries', diaryRouter);


app.listen(PORT, () => {
    console.log(`The server is running in the port ${PORT}`);
})