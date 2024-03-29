import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts';

const app=express();

app.use=('/posts',postRoutes);

app.use(bodyParser.json({limt:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limt:"30mb",extended:true}));
app.use(cors());

//connection with mongoDb
const CONNECTION_URL="mongodb+srv://Pritamkumar:pk143221@cluster0.psi4fmi.mongodb.net/?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`))
})
.catch((error)=>{console.log(error.message)});

mongoose.set('useFindAndModify',false);