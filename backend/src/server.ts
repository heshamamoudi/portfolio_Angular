import express from 'express';
import cors from 'cors'
import * as bodyParser from 'body-parser'
import router from './controllers/projects';

const app = express();
const port = process.env.PORT || 8069;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    "allowedHeaders": [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization', 'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Methods'
    ],
    "methods": 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    "preflightContinue": true,
    "origin": '*',
  }))
  app.get('/',async(req,res)=>{
    res.send("server is working")
  })
  // app.post('/projects',(req:express.Request,res:express.Response)=>{
  //   res.end(JSON.stringify(req.body))
  // } )
app.use(router)
app.use('/projects',express.static('projects'));
app.listen(port, () => {
    console.log(`BackEnd Server is Listening on ${port}....`)
    console.log(`BackEnd Server is Running on ${process.env.URL}`)
})