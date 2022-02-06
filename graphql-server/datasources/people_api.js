const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
    setBaseURL(baseURL) {
        this.baseURL = baseURL;
    }

    async getTodoPeople(todoId) {
        return this.get(`todos/${todoId}/person`)
    }
    
}


module.exports = { PeopleAPI };