# node-mysql-practice

Getting Started with Node, Express and Mysql Using Sequelize
\$ npm init

Install Express and a few of it’s dependencies.
$ npm install --save express body-parser cors
$ npm i -D nodemon

Sequelize Setup
\$ npm install -g sequelize-cli

Install sequelize
$ npm install --save sequelize
$ npm install --save mysql2

Initializes sequelize
\$ sequelize init // final, Initializes project with sequelize cil

Generating Model & Migrations
\$ sequelize model:create --name Company --attributes name:string

\$ sequelize db:migrate
