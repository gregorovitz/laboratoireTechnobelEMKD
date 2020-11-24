import express from 'express';
import db from './models/index.js';

import router from './config/router.js'

const server = express();

db.sequelize.sync();

server.use("/", router);

server.listen(5000, () => console.log("Server lancé sur le port 5000"));