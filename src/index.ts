import * as express from 'express';
import * as path from 'node:path';
import * as http from 'http';
import { Server } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 80;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('dist'));

const landingPage = path.join(__dirname, '..', 'dist', 'index.html');

app.get('/', function(request, response) {
  response.sendFile(landingPage);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('Node.js web server running at port 80')
});

