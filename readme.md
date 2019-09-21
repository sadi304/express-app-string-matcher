## Simple Express Server ( String Matcher )

### Steps to run
  - git clone https://github.com/sadi304/express-app-string-matcher.git
  - cd express-app-string-matcher
  - npm start
  
#### Note
  - this repo already shipped with database with three values already added
  - to remove data use: "npx sequelize-cli db:migrate:undo" to undo last migration
  - then run "npx sequelize db:migrate" to run the migration again
  
#### Endpoints
  - Get /list (list of all matched string pairs
  - POST /add { strA, strB } 
