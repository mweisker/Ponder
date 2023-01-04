![image](./assets/small-ponder.png)


## PONDER: An Object Relational Mapping Tool for Deno

## About

Ponder is a simple ORM for PostGRES built for Deno. Create, read, update, delete tables, columns, rows, and cells. 
Ponder is available for import at https://deno.land/x/ponder.

## Features

-Basic CRUD functionality for interacting with your PostGRES Database
-Introspect database and modify database tables through models in accordance with principles of OOP
-Introspect your database for a visual representation of your tables

## Installation

Ponder CLI coming soon!

## Getting Started
Ponder is a third-party module available at deno.land. Simply import/export the dependency for use in your project.

```
import * as ponder from "https://deno.land/x/ponder@v0.0.2/mod.ts";
```

## Connect your PostGRES Database
Connect your existing PostGRES Database using the built-in method called poolConnection. Ponder uses a pool connection which is strongly recommended by PostGRES for use in their databases. Simply insert your database URI (or insert from a dotenv file). OPTIONAL Arguments: how many pool connections you'd like to have, true or false for Lazy Loading (recommended true).

```
const yourVariable = ponder.poolConnection(yourURI, numberOfPools, BooleanForLazyLoading);
```

Now, using ```yourVariable``` you can access and use any of Ponder's built-in methods.

## Upcoming Features and Developments

The team at Ponder is working on database introspection. You'll soon be able to view all your SQL data as JavaScript Objects.

Extensive documentation is underway! Please follow this link to view our documentation.

A splash page for Ponder is underdevelopment! Check it out here. <a href="https://ponder.deno.dev/">Ponder Website</a>


## Documentation

The documentation is available <a href="https://ponder.deno.dev/docsfolder/docshome">here</a>. <br>
See docs for complete list of methods, their functionality, and how to use them.
LINK to both doc.md AND LINK to splash page docs url

## Built with

<p float="left">

<a href="https://deno.land/"><img src="https://img.shields.io/badge/Deno-white?style=for-the-badge&logo=deno&logoColor=464647" alt="Deno Logo" style="display: inline-block"></a>
<a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL Logo" style="display: inline-block"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript Logo" style="display: inline-block"></a>

</p>


## Contributors
<p>
* Sara Brown <a href="https://github.com/Sbrown2018">@Github</a> <br> 
* Sam Goldenberg <a href="https://github.com/sammyb1rd">@Github</a> <br>
* Matt Connell <a href="https://github.com/Matt-2112">@Github</a> <br>
* Corey McClendon-Brown <a href="https://github.com/mcbrownc">@Github</a> <br>
* Stella Baek <a href="https://github.com/StellaBaek">@GitHub </a> 
  
</p>

