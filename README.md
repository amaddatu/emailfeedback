This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

installation...:

if you don't have nodemon...

npm install -g nodemon

typical install after nodemon is installed

npm install

I modified this version of react app and added some deployment features commonly found in Heroku. This particular version is a MERN stack at it's barest state. I hope you find it useful. I'm using this to prototype a few things.

re-done run hooks...

"start": "node server.js",
"build": "node scripts/build.js",
"test": "node scripts/test.js --env=jsdom",
"start-dev": "nodemon --exec \"npm run build; node server.js\"",
"start-dev-express": "nodemon server"


you use this hook to recompile react and restart express

npm run start-dev

you use this hook to restart express only

npm run start-dev-express
