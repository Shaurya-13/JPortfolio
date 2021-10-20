const ProjectController = require('./ProjectController')
const PostController = require('./PostController')
const ServiceController = require('./ServiceController')
const SubscriberController = require('./SubscriberController')

module.exports = {

	project: ProjectController,
  post: PostController,
  service: ServiceController,
  subscriber: SubscriberController

}
