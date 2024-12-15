let express=require("express")
let sql=require("mysql2")

let conn=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"knps",
    database:"information"
    
})

conn.connect((err)=>{
    if(err){
        res.send(err)
    }
    else{
        console.log("Connected to database");
        
    }
})



let app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post("/",(req,res)=>{
    conn.query(`CREATE TABLE Birthday (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL
);
`,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})




app.listen(3014,()=>{
    console.log("Started Server");
    
})
