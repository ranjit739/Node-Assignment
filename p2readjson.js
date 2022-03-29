import http from 'http';

const server=http.createServer((req,res)=>{
if(req.url=== "/"){
    res.setHeader('Content-Type', 'text/json');
    res.end(Json.stringify(vegetable));
    
}
});
const PORT =process.env.PORT ||8000;
const HOST='localhost'; 
server.listen(PORT,HOST,()=>{
    console.log('Server Running http://localhost:8000');
});