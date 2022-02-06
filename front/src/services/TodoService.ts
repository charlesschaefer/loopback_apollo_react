import { gql } from "@apollo/client";

import Todo from "../types/Todo";
import Service from "./Service";



class TodoService extends Service {
    async getTodos():Promise<any> {
        const query = gql`
            query Todos {
                todos {
                    id
                    title
                    isComplete
                    owner
                }
            }
        `;
        return this.client.query({query});
    }
}

export default TodoService;