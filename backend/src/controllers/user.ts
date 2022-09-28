import * as express from 'express';
import { User, UserStore } from '../models/user';
import * as jwt from 'jsonwebtoken';
import { authToken } from '../middleware/auth';
import * as fs from 'fs';
const store = new UserStore();
const private_key = fs.readFileSync('private.pem');


const Show = async (req: express.Request, res: express.Response) => {
  try {
    const user = await store.show(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const Create = async (req: express.Request, res: express.Response) => {
  try {
    let data = req.body;
   const user: User = {
    first_name: data.first_name,
    last_name: data.last_name,
    username: data.username,
    password: data.password
  };
    const newUser = await store.create(user);
    const token = jwt.sign(
      { name: newUser.first_name, Lname: newUser.last_name },
      private_key,
      {
        algorithm: 'RS256',
        expiresIn: '2h',
        subject: newUser.id + ''
      }
    );
    res.json({idToken:token});
  } catch (err) {
    res.status(400);
    res.json(`${err} + user`);
  }
};

const signin = async (req: express.Request, res: express.Response) => {
  let data = req.body;
  const userinput: User = {
    first_name:data.first_name,

    username: data.username,
    password: data.password
  };
  try {
    const user:User|undefined = await store.authenticate(userinput);
      const token = jwt.sign(
        { name: user?.first_name, Lname: user?.last_name },
        private_key,
        {
          algorithm: 'RS256',
          expiresIn: '2h',
          subject: user?.id + ''
        }
      );
      res.cookie("SESSIONID", token, {httpOnly:true, secure:true});
      //  res.json({idToken:token,name:user?.first_name,lname:user?.last_name,username:user?.username});   
  } catch (error) {
    res.status(401);
    res.json( error );
  }
};


const user_routes = (app: express.Application) => {
  app.get('/users/:id', authToken, Show);
  app.post('/signin', signin);
  app.post('/signup', Create);
  // app.put('/users/:id', Update)
  // app.delete('/users/:id',Delete)
};

export default user_routes;
