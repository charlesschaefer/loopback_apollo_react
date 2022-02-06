Description
===========

A small project to test some technologies

[OK] - Create a database of ToDos (app using Loopback4 - db using mariadb) 
[OK] - Create a REST service to search people (using Loopback4)

- Explore GraphQL with ApolloServer, with queries like:
	- [OK] list all  TODOs (DB)
	- [OK] get TODO by ID (DB)
	- ? Late TODOs  (DB)
	- ?Today TODOs (DB)
	- [OK] Incomplete TODOs (DB)
	- [OK] TODOs from a Person (REST)
	- [OK] People working on a specified TODO (REST)

- Create an app using REACT to create and list todos.
[OK] - Create the needed services using Loopback 4.
[OK] - Data stored in mariadb
- Explore apollo-client to use graphql with react


Running the project
===================

Instal all the dependencies inside the directories:
- front
- back
- graphql-server

You need to have `docker` and `docker-compose` and `npm` installed.

The database credentials must be provided as environment variables to the `docker-compose` command. 
You can create a `.env` file with the following variables:
```
MARIADB_USER=user
MARIADB_PASSWORD=password
MARIADB_ROOT_PASSWORD=root_password
```

And the `docker-compose` will find it automatically. Or just run the command passing the variables:

```
$ MARIADB_USER=user MARIADB_PASSWORD=password MARIADB_ROOT_PASSWORD=root_password docker-compose up
```

