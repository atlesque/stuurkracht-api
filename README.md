# Stuurkracht API

This is the API for Stuurkracht.be: a website for sending e-cards to support others in need.

## Technical requirements

The API uses Nest as general API framework.

Objection + Knex.js are used as ORM and all things database.

The database server is running postgres.

The base project setup is based on [Georgii Rychko's project](https://github.com/rychkog/nest-objection-article) and their [excellent article](https://labs.thisdot.co/blog/reducing-mental-fatigue-nestjs-objectionjs).

## How to run

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
