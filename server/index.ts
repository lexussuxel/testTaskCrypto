require('dotenv').config()
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const seque = require('./db')
const models = require("./models/models")
const routes = require('./routes/index')
dotenv.config();

const app = express();
const port = process.env.PORT;

const start = async () => {
   try{
       await seque.authenticate()
       await seque.sync()
       app.listen(port || '4200', () => {
           console.log(`Server is running at http://localhost:${port||4200}`);
       });

   }catch(e){
       console.log(e)
   }
}

app.use(cors())
app.use(express.json())
app.use('/',routes)

app.get('/', (req: any, res:any)=>{
    res.status(200).json({message: 'working'})
})


start()
