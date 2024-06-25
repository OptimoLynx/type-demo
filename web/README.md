// 1. run parcel
npx parcel index.html

// 2. open
localhost:1234

// 3. install json-server
npm i json-server

//4. Create db.json and run this command with new terminal
npx json-server -w db.json


OR
//Run this commands instead of  1-4
// npm i
npm run start:db
npm run start:parcel

// create tsconfig.json file
tsc --init
