import {Router} from 'express';
import { getAllData , getUser , postUser , putUser , deleteUser } from "../controller/item.controller.js";

export default Router()
.get('/',getAllData)
.get('/user/:id',getUser)
.post('/',postUser)
.put('/update/:id',putUser)
.delete('/delete/:id',deleteUser);



