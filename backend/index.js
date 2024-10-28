const express = require("express");
const {createTodo , updateTodo} = require("./types");
const {todo} = require("./db");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors())

app.post("/todo" , async (req, res)=>{
    const Payload = req.body;
    const parsedPayload = createTodo.safeParse(Payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return ;
    }
    try{
        await todo.create({
        title : Payload.title,
        description: Payload.description,
        completed: false
        })
        console.log("created");
        res.json({
            msg : "Todo Created !!"
        })
    }
    catch(err){
        console.log(err);
    }
})

app.get("/todos" , async (req , res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})
app.put("/completed" , async (req , res)=>{
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})
app.listen(3000);