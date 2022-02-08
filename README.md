# Stuurkracht API

This is the API for Stuurkracht.be: a website for sending e-cards to support others in need.

## Technical requirements

The API uses Nest as general API framework.

Objection + Knex.js are used as ORM and all things database.

The database server is running postgres.

The base project setup is based on [Georgii Rychko's project](https://github.com/rychkog/nest-objection-article) and their [excellent article](https://labs.thisdot.co/blog/reducing-mental-fatigue-nestjs-objectionjs).

## How to run

Configure environment variables by creating a copy of `.env.example` and rename it to `.env`. Fill in any missing variables.

Install dependencies:

`npm i`

Start postgres in a Docker container:

`npm run run:pg-docker`

Initialize the database by running migrations and seeding data:

`npm run migrate && npm run seed`

Start the API server:

`npm run start`

API will now be accessible at

`http://localhost:3001`

## Migrations

When making changes to the database models, it is necessary to create a migration:

`npm run migrate:make MigrationName`

This will generate a migration file in `/src/database/migrations/`.

Edit this file and add your changes to the model here.

You can then run `npm run migrate` to perform the migration on the database.

## Debugging

To enable debugging in VSCode, press CTRL+SHIFT+P to open the command window and search for `Auto Attach`. Set this to `Smart`.

Now whenever you start the server from the built-in VSCode terminal, (CTRL+SHIFT+`), the debugger will automatically start.
