import express from 'express';
import route from "./routes/route.js"; 

const app = express();

app.use(express.json()); 
app.use("/data", route); 

app.listen(8080, () => 
{
  console.log("Server is running on port 8080");
});
