const MongoDB = require('mongodb');
const mongoClient = MongoDB.MongoClient;
const clear = require('clear');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

const url = `mongodb://localhost:27017/companies`;

mongoClient.connect(url, (error, db) => {
    if (error) {
      console.log('Error trying to connect to the Database');
      console.log(error);
    } else {
      console.log('Connection established correctly!! 😬');
  
      function mainMenu(){
        clear();
        // printMenu();
        rl.question('Type an option: ', (option) => {
          switch(option){
            case "1":
            db.collection('companies').find({}, {name: 1, _id: 0}, {name:1}).toArray((error, result) => {
                if (error) {
                  console.log(error);
                  rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                  console.log(result);
                  rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "2":
            db.collection('companies').find({}, {name: 1, _id: 0}).toArray((error, result) => {
                if (error) {
                  console.log(error);
                  rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                  console.log(result.length);
                  rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "3":
            db.collection('companies').find({founded_year: 2004}, {name: 1, _id: 0}).toArray((error, result) => {
                if (error) {
                  console.log(error);
                  rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                  console.log(result.length);
                  rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "4":
            db.collection('companies').find({$and: [{founded_year: 2004}, {founded_month: 2}]}, {name: 1, founded_year:1, founded_month:1, _id: 0}).toArray((error, result) => {
                if (error) {
                    console.log(error);
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    console.log(result);
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "5":
            db.collection('companies').find({$and: [{founded_year: 2004}, {founded_month: {$gte: 4}}, {founded_month: {$lte: 6}}]}).project({name: 1, founded_year:1, founded_month:1, _id: 0}).sort({founded_month:1}).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    console.log(result);
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "6":
            db.collection('companies').find({'offices.city': 'Barcelona'}).project({name: 1, 'offices.city':1, _id: 0}).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    function yeet (){
                        for (var i=0; i<result.length; i++){
                            console.log(`${result[i].name} ${result[i].offices[0].city}`)
                        }
                    }
                    yeet()
                    // console.log(result);
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "7":
            db.collection('companies').find({}).project({name: 1, number_of_employees:1, _id: 0}).sort({number_of_employees:-1}).limit(10).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    console.log(result);
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "8":
            db.collection('companies').find({name: 'Facebook'}).project({name: 1, number_of_employees:1, _id: 0}).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    console.log(result);
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "9":
            db.collection('companies').find({name: 'Facebook'}).project({number_of_employees:1, _id: 0}).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    console.log(result[0].number_of_employees);
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "10":
            db.collection('companies').find({name: 'Facebook'}).project({name:1, products:1, _id:0}).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    products = result[0].products
                    function yeet (){
                        for (var i=0; i<products.length; i++){
                            console.log(products[i].name)
                        }
                    }
                    yeet()
                    // console.log(result[0].products[0].name)
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "11":
            db.collection('companies').find({name: 'Facebook'}).project({relationships:1, _id:0}).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    products = result[0].relationships
                    function yeet (){
                        for (var i=0; i<products.length; i++){
                            console.log(`${products[i].person.first_name} ${products[i].person.last_name} `)
                        }
                    }
                    yeet()
                    // console.log(result[0].relationships)
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "12":
            db.collection('companies').find({name: 'Facebook'}).project({relationships:1, _id:0}).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    products = result[0].relationships
                    function yeet (){
                        for (var i=0; i<products.length; i++){
                            if (products[i].is_past === true)
                            console.log(`${products[i].person.first_name} ${products[i].person.last_name}`)
                        }
                    }
                    yeet()
                    // console.log(result[0].products[0].name)
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "13":
            db.collection('companies').find({'relationships.person.first_name': 'Hyther'}).project({relationships:1, _id:0}).limit(10).toArray((error, result) => {
                if (error) {
                    console.log(error);Trigger
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                } else {
                    products = result
                    function yeet (){
                        for (var i=0; i<products.length; i++){
                            // if (products[i].is_past === true)
                            // console.log(`${products[i].person.first_name} ${products[i].person.last_name}`)
                            console.log(result[i].relationships);
                            // console.log( result[i].relationships.forEach(e=>e))
                        }
                    }
                    // yeet()
                    console.log(result[0].relationships)
                    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
                }
            });
            break;
            case "0":
              console.log(`👋👋👋👋 😞 \n`);
              db.close((error) => { process.exit(0) });
              break;
            default:
              mainMenu();
              break;
          }
        });
      }
  
      mainMenu();
  
    }
  });


function printMenu(){
	console.log(`
0.- Exit
1.- List by name all companies.
2.- How many companies are there?
3.- How many companies were founded in 2004?
4.- List by name all companies founded in february of 2004.
5.- List by name all companies founded in the summer of 2004 (april to june) sorted by date.
6.- What companies have offices in "Barcelona".
7.- List the 10 companies with more employees sorted ascending (show name and employees).
8.- Find the company with the name "Facebook"
9.- How many employees has Facebook?
10.- List the name of all the products of Facebook
11.- List the people that are working at Facebook right now (check relationships field)
12.- How many people are not working anymore at Facebook
13.- List all the companies where "david-ebersman" has worked.
14.- List by name the competitors of Facebook
15.- Names of the companies that has "social-networking" in tag-list (be aware that the value of field is a string check regex operators)
16.- How many companies that has "social-network" in tag-list and founded between 2002 and 2016 inclusive
17.- Names and locations of companies that have offices in London
18.- How many companies that has "social-network" in tag-list and founded between 2002 and 2016 inclusive and has offices in New York
`);
}

// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// // Connection URL
// var url = 'mongodb://localhost:27017/companies';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server");
  
//       findDocuments(db, function() {
//         db.close();
//       });
//   });

// var findDocuments = function(db, callback) {
//     // Get the documents collection
//     var collection = db.collection('companies');
//     // Find some documents
//     collection.find({}).toArray(function(err, docs) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(docs)
//       callback(docs);
//     });
//   }