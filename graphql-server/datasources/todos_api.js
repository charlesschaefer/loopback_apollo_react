const { RESTDataSource } = require('apollo-datasource-rest');

class TodosAPI extends RESTDataSource {
    setBaseURL(baseURL) {
        this.baseURL = baseURL;
    }

    async getTodosFromOwner(ownerId) {
        return this.get(`todos/fromOwner/${ownerId}`)
    }
    
}


module.exports = { TodosAPI };