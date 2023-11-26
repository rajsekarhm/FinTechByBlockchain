// const { spawn } = require("child_process");

// const command = 'node';
// const args = ['textFile.js'];

// const childProcess = spawn(command,args, { cwd: '/home/rajasekar/kafka/kafka_2.12-3.5.1' });

// childProcess.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });
  
//   childProcess.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });
  
//   childProcess.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
//   });

const https = require('node:http');

// const options = {
//   key: fs.readFileSync('key.pem'),     // Path to your private key
//   cert: fs.readFileSync('cert.pem')    // Path to your SSL certificate
// };

const server = https.createServer( (req, res) => {
  res.writeHead(200);
  res.end('Hello, this is an HTTPS server!');
});

const PORT = 3000; // HTTPS default port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
