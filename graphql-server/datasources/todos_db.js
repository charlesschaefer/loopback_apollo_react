const { SQLDataSource } = require("datasource-sql");

const CACHE_SECONDS = 60;
const MAX_ROWS = 50;

class TodosDB extends SQLDataSource {
    async getTodos() {
        return this.knex
            .select("*")
            .from("Todo")
            .limit(MAX_ROWS)
            .cache(CACHE_SECONDS);
    }

    async getTodo(id) {
        return this.knex
            .select("*")
            .from("Todo")
            .where({id: id})
            .limit(1)
            .first()
            .cache(CACHE_SECONDS);
    }

    async getIncompleteTodos() {
        return this.knex
            .select("*")
            .from("Todo")
            .where({isComplete: false})
            .cache(CACHE_SECONDS);
    }
}

module.exports = { TodosDB };