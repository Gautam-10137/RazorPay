const express=require('express');
require('dotenv').config();
const PORT=process.env.PORT;
const apiRoutes=require('./routes/apiRoutes');
const cors=require('cors');
const bodyParser=require('body-parser');


const app=express();



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST']
}))

app.use('/api',apiRoutes);

app.listen(PORT,()=>{
    console.log(`Server is listening on Port: ${PORT}`);
})