import { ApolloClient, NormalizedCacheObject } from "@apollo/client";


class Service {
    protected client:ApolloClient<NormalizedCacheObject>;

    constructor(client:ApolloClient<NormalizedCacheObject>) {
        this.client = client;
    }
}

export default Service;