# React-Kanban


Setting up the project
--------------------------
Fork and clone on local machine
Navigate to corresponding folder
Run psql in cmd line
Create a database for the project in postgres in (express-gallery) (psql cmd = create database "name of database";)
Connect to database (psql cmd = \c "name of database")
Update config.json file with name of your database
Run npm install
Run sequelize db:seed:all
Run gulp
(Linux) gulp may not automatically run redis-server, in that case start it up manually before the next step
Gulp should bring up a Chrome window at http://localhost:3000