// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express')

const app = express() // initialize app

const config = {
	views: 'views', 	// Set views directory
	static: 'public', 	// Set static assets directory
	logging: true,
	controllers: require('./controllers'),
	db: vertex.nedb()
}

vertex.configureApp(app, config)
app.use(vertex.setContext(process.env)) // set CDN and global object on 'req.config' and 'req.site' object

// import routes
const page = require('./routes/page')
const main=require('./routes/main')
const vertexRouters = require('./routes/vertex')

// set routes
//app.use('/', page)
app.use('/', main)
app.use('/api', vertexRouters.api)
app.use('/blocks', vertexRouters.blocks)


module.exports = app
