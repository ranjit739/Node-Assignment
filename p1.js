//create web server 
import http from 'http';
import fs from 'fs';
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/palin');
//res.end('Response from Server 1');
if(req.url==='/'){
    fs.readFile('./homepage.html',(error,data)=>{
        if(error) throw error;
        res.end(data);

    })

}
else if(req.url==='/about'){
    res.end('About page');

}else{
    res.end('404 page not found');

}

});
const PORT=process.env.PORT || 8000;
const HOST='localhost';
server.listen(PORT,HOST,()=>{
    console.log('Server Running at http://localhost:8000');
});