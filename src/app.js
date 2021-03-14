//Express
const express = require('express')
const app = express()

const path = require('path')
const router = express.Router()

//BD
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//Potrzebne do szukania w BD: 
const ObjectId = mongodb.ObjectID



//Łączenie z bazą danych
//connectionURL -----> !trzeba będzie ustawić inne przy łączeniu się z bazą danych na azurze!
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'gigas'




// //Wystawienie własnego pliku index.html  DOPÓKI ODKOMENTOWANE = TESTY PRZECHODZĄ NEGATYWNIE

// NIE DZIAŁAJĄCY PRZYKŁAD
// let http = require('http')
// let fs = require('fs')
// const { response } = require('express')

// let handleRequest = (request, response => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     fs.readFile('./index.html', null, function (error, data){
//         if(error){
//             response.writeHead(404);
//             response.write('Nieznaleziono pliku')
//         } else{
//             response.write(data);
//         }
//         response.end();
//     });
// }



//pokazanie że strona główna aplikacji ma połączenie z serwerem
// app.get('/', (req,res) => {
//     res.status(200).send('Hello World');
// });

// module.exports = app


//Łączenie się z bazą danych
// MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
//     if(error) {
//         return console.log('Nie można połączyć się z bazą danych')
//     }
//     console.log('Połaczono z bazą danych')
// })





// WSTAWIANIE DANYCH DO TABELI


// MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
//     if(error) {
//         return console.log('Nie można połączyć się z bazą danych')
//     }
//     const db = client.db(databaseName)
//     console.log('Połączono z bazą danych')
//     db.collection('E-mail').insertOne({
//         email:"tyczynski.kacper1@gmail.com",
//         userName:"Gigas",
//     },(err, res) => {
//         if(err) {
//             return console.log('Nie można połączyć się z bazą danych')
//         }
//         console.log(res.ops)
//     })
// })


// //Funkcja InsertMany
// MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
//     if(error) {
//         return console.log('Nie można połączyć się z bazą danych')
//     }
//     const db = client.db(databaseName)
//     console.log('Połączono z bazą danych')

//     db.collection('E-mail').insertMany([    
//         {
//             email:"tyczynski.kacper1@gmail.com",
//             userName:"Gigas",
//         },
//         {
//             email:"echelonka96@gmail.com",
//             userName:"Matt",
//         }        
//     ],(err, res) => {
//         if(err) {
//             return console.log('Nie można połączyć się z bazą danych')
//         }
//         console.log(res.ops)
//     })
// })


//WTAWIANIE DANYCH METODĄ ASYNCHRONICZNA (DOKUMENTACJA JEST)
// describe('insert', () => {
//     let connection;
//     let db;
  
//     beforeAll(async () => {
//       connection = await MongoClient.connect(global.__MONGO_URI__, {
//         useNewUrlParser: true,
//       });
//       db = await connection.db(global.__MONGO_DB_NAME__);
//     });
  
//     afterAll(async () => {
//       await connection.close();
//       await db.close();
//     });
  
//     it('Sprawdza uzupełnianie danych w kolekcji', async () => {
//       const users = db.collection('users');
  
//       const mockUser = {_id: 'some-user-id', UserName: 'Gigas'};
//       await users.insertOne(mockUser);
  
//       const insertedUser = await users.findOne({_id: 'some-user-id'});
//       expect(insertedUser).toEqual(mockUser);
//     });
//   });







// //operacja ZNAJDŹ w BD

// MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
//     if(error) {
//         return console.log('Nie można połączyć się z bazą danych')
//     }
//     const db = client.db(databaseName)


//     // Szukanie po konkretnym _ID
//     db.collection('E-mail').findOne(
//         {    
//             "_id" : ObjectId("604e12d377c2b05264f3267b")
//         },(err, user) => {
//             if(err) {
//                 return console.log('Nie można przypasować do żadnego z dokumentów')
//             }
//             console.log(user)
//         }
//     )

//     //Szukanie po atrybutach
//     //NP: db.collection('E-mail').find({age: 24}).toArray((err,user) => {
//     //    db.collection('E-mail').find({zyje: True}).toArray((err,user) => {
//     db.collection('E-mail').find({userName: "Gigas"}).toArray((err,user) => {
//         if(err) return console.log(err)
//         console.log(user)
//     })
// })








//AKTUALIZACJA DANYCH
//Wstawienie nowej kolekcji z innymi wartościami
// MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
//     if(error) {
//         return console.log('Nie można połączyć się z bazą danych')
//     }
//     const db = client.db(databaseName)
//     db.collection('users').insertMany([
//         {
//             userName:"Gigas",
//             age: 25,
//             description: "Poziom ukończenia projektu",
//             completed: false
//         }
//     ],(err, res) => {
//         if(err) {
//             return console.log('Nie można połączyć się z bazą danych')
//         }
//         console.log(res.ops)
//     })
// })


// //Aktualizacja Stringów
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log("Nie można połączyć z bazą danych")
//     }
//     const db = client.db(databaseName)

//     const updatePromise = db.collection('users').updateOne({
//         _id: ObjectId('604e1cd890551c4968177c2a')
//     },{
//         $set: {
//             userName: 'Twórca projektu'
//         }
//     })

//     updatePromise.then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

// })



//Zmiana wieku za pomocą inkrementacji - $inc

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Nie można połaczyć z bazą danych')
//     }
//     const db = client.db(databaseName)

//     const updatePromise = db.collection('users').updateOne({
//         _id: ObjectId('604e1cd890551c4968177c2a')
//     },{
//         $inc: {
//             age: 115
//         }
//     })

//     updatePromise.then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

// })         NIESTETY NIE DZIAŁA JAK NALEŻY. ZNALEŹĆ ZNAJDUJE ALE PODMIENIAĆ WIEKU NIE ZMIENIA




// ZAMIANA FALSE NA TRUE 
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Nie można połączyć z bazą danych')
//     }
//     const db = client.db(databaseName)

//     db.collection('users').updateMany({
//         completed:false
//     },{
//         $set: {
//             completed:true
//         }
//     }).then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

// })






// //USUWANIE DANYCH Z BAZY DANYCH
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Nie można połączyć z bazą danych')
//     }
//     const db = client.db(databaseName)

//     db.collection('E-mail').deleteMany({userName: "Gigas"})
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

//     db.collection('users').deleteOne({age: 25})
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

// })
//
