# GIT config

```
git init
git config --global user.name "John Doe"
git config --global user.email "john@doe.com"
git config --list
```

# NodeJS and NPM config

npm -v
node -v

## basics of npm and node

```
npm init # to initialize an application and create the package.json file

npm install lite-server --save-dev # to have lightserver module installed and test application with browser
```
--save-dev is indicating that the application is using this module for development purpose
wheras --save indicates that the application is directly depending on this module.
In the node_modules/ directory, you can find a whole bunch of subfolders needed by liteserver.

## Use of lite-server

Lite-server allows you to see your changes reflected immediately.

Install lite-server module:
```
npm install lite-server --save-dev # to have lightserver module installed and test application with browser
```

Add the following to package.json:
```
"scripts": {
    "start": "npm run lite",
    ...
    "lite": "lite-server"
},
```

Then run the following in any command prompt:
```
npm start
```

## Setting up gitignore

Create a .gitignore file in week1 directory with:
```
node_modules
```
This tells git to ignore the whole node_modules folder.

# Bootstrap 4

## Installing

By installing bootstrap 4.0.0-beta, it does not automatically install jquery and tether
So install it also.