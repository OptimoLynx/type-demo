  SETUP EXPRESS PROJECT STEP-BY-STEP
======================================

[localpc]$ cd DevWorkspace/
[localpc]$ ls
reuseable-code  web
[localpc DevWorkspace]$ mkdir server
[localpc DevWorkspace]$ cd server/
[localpc server]$ npm init -y
Wrote to /localpc/DevWorkspace/server/package.json:
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

[localpc server]$ tsc --init

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig

[localpc server]$ npm install concurrently nodemon
#Edit tsconfig.json & package.json
[localpc server]$ touch .gitignore
[localpc server]$ touch README.md
[localpc server]$ mkdir src
[localpc server]$ cd src
[localpc src]$ touch index.ts
[localpc src]$ cd ..
[localpc server]$ npm start
#. CTRL + C

#. install express and others packages
[localpc server]$ npm install express body-parser cookie-session
[localpc server]$ npm start
#. CTRL + C

[localpc server]$ npm install @types/express @types/cookie-session @types/body-parser
#. add into index.ts => import express from 'express'; & add more..
[localpc server]$ npm start
#. test: http://localhost:3000/

#. create Express router "loginRoutes.ts" inside src/routes/
#. test: http://localhost:3000/login


/================================================/

#1. Run 
npm start

#2. install express and others
npm install express body-parser cookie-session

#3. Run
npm start

#4. install types/express and others
npm install @types/express @types/cookie-session @types/body-parser

#5. Run
npm start

#6. test on brower 
http://localhost:3000/

http://localhost:3000/login

