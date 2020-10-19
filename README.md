# BCF2-Bot-Denstu-Aegis
BigCareerFest.Online Bot for Dentsu Aegis company

Tasks to run the application:

1) Create the /environment directory in the root of the project.
2_ Create the /development and /production sub-directories in the /environment directory.
3_ In /development directory, create the .env file and insert there next configurations:
```
# Server configurations
NODE_ENV=development
NODE_PRODUCTION_PLATFORM=localhost

# Bot configurations
PORT=5167
BOT_TOKEN=TELEGRAM_BOT_TOKEN
BOT_USERNAME=@TELEGRAM_BOT_USERNAME
```
4) In /production directory, create the .env file and insert there next configurations
```
# Server configurations
NODE_ENV=production
NODE_PRODUCTION_PLATFORM=heroku

# Bot configurations
PORT=5167
BOT_TOKEN=TELEGRAM_BOT_TOKEN
BOT_USERNAME=@TELEGRAM_BOT_USERNAME

# Heroku configurations
HEROKU_URL=https://phatic-dialogue-bot.herokuapp.com
```
5) Clone the project, Open it in your favorite IDE. To start the application in development mode, run:
npm run start:dev
To deploy the application to the production, push your changes to master. Heroku was configured to track changes on the master branch and to re-build after some permutations.
