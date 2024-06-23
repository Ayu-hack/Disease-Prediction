import express from 'express';
import predict from './src/routes/predict.js';
import  bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));


app.get('/', (req, res) => {
    res.status(401);
    res.send('<center><h1>Get your ass out of here.<br>Because you are not Authorized</h1></center>');
})

app.use("/predict",predict);

app.listen(5172, () => {
  console.log('Server is running on port 5172\nclick on: http://localhost:5172/');
});