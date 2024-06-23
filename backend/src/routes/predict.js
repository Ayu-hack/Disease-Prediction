import express from 'express';
import {getHandle, postHandle} from '../controllers/predict.js';

const predict = express.Router();

predict.get('/',getHandle)
.post('/',  postHandle)


export default predict