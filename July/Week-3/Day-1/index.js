const express=require("express");

const router=express.Router()

const app=express();
app.use(express.json())
const port =8000;

app.use("/api",router)

router.get("/",(req,res)=>{
    res.send("router get method called")
})

router.post("/user",(req,res)=>{
    res.send("router post method called")
})
router.put("/user/:userID",(req,res)=>{
    const{userID}=req.params;
    res.send(`id is :${userID}`)
})
router.delete("/user/:id/",(req,res)=>{
     const {id}=req.params;
     res.send(`delete method is called :${id}`)
})










// app.get("/",(req,res)=>{
//     const obj =req.query;
//     console.log(obj.name)
//     console.log(obj.age)
//     console.log(obj.email)
//     res.send("my server accept")
// })
// app.post("/user",(req,res)=>{
//     const {name,age,email,password}=req.body;
//     console.log(name,age,email,password)
//     res.send("post method is called")
// })
// app.put("/user/:userID",(req,res)=>{
//     const{id}=req.params;
//     res.send(`id is :${useID}`)
// })
// app.delete("/user/:id/",(req,res)=>{
//     const {id}=req.params;
//     res.send(`delete method is called :${id}`)
// })

app.listen(port,()=>{
    console.log("my server is running on the port",port);
})