import express from 'express'
const app = express()
app.use(express.json())

const users = [
    {
        username:"alice", 
        age:25,
        email:"ali@gmail.com"
    },
    {
        username:"raja", 
        age:25,
        email:"raj@gmail.com"
    },
    {
        username:"nagmuthu", 
        age:25,
        email:"nagimu@gmail.com"
    },
]

app.get('/', (req,res)=>res.send("Welcome to Backend CA-2"))



app.get('/user', (req,res)=>{
    const username = req.query.username
    if(!username){
        return res.status(404).json({
            success:false,
            message:"User parameter cannot be empty"
        })
    }

    try {
        const finduser  = users.find(u => u.username == username)
        if(!finduser){
            res.status(400).json({
            success:false,
            message:"User not found"
        })
        
        return res.status(200).json({
            success:true,
            message:"User found",
            user:finduser
        })

        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
})

app.listen(3000, ()=>console.log("Your app is running on http://localhost:3000"))