const express = require('express')
const app = express()

app.use(express.json())


// Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request received for ${req.url}`);
    next();
  });
  
  // Routes
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  app.get('/special',(req,res)=>{
    res.json(' ooooo')
  })
  app.get('/hello', (req, res) => {
    res.send('GET request received');
  });
  
  // POST method
  app.post('/hello', (req, res) => {
    res.send('POST request received');
  });
  
  // PUT method
  app.put('/hello', (req, res) => {
    res.send('PUT request received');
  });
  
  // DELETE method
  app.delete('/hello', (req, res) => {
    res.send('DELETE request received');
  });
  
  // Start server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  