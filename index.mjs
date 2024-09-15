import express from "express"
import cors from 'cors'
const port = 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async(req,res)=>{
    res.send('Hello World')
})

app.listen(port, () =>{
    console.log(`Server is running at this ${port}`);
    
})