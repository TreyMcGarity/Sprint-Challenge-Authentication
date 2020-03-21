const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const configure = require('../database/dbConfig')

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(session({
	name: 'token',
	secret: 'secretum ignotum',
	cookie: {
		httpOnly: true
	},
	resave: false,
	saveUninitialized: false,
	store: new KnexSessionStore({
		knex: configure,
		createtable: true,
	}),
}))

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

module.exports = server;
